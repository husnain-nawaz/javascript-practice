import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Award, Landmark, Clock, Calendar, Heart, Share2, Compass, Play, Video, Users, ListFilter, Newspaper, Eye, Film } from "lucide-react";
import { getMovieDetails } from "../services/omdb";
import { getTmdbId, getMovieCast, getSimilarMovies, getMovieTrailer } from "../services/tmdb";
import { getMovieNews } from "../services/news";
import { getWatchProviders } from "../services/watchProviders";
import { useMovies } from "../context/MovieContext";
import { formatCurrency, getRatingColor } from "../utils/helpers";
import Trailer from "../components/Trailer";
import CastCard from "../components/CastCard";
import NewsCard from "../components/NewsCard";
import ProviderCard from "../components/ProviderCard";
import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";
import Loader from "../components/Loader";
import { TMDB_API_KEY } from "../utils/constants";

export function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useMovies();

  // Primary Movie States
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // TMDB Bridged States
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [providers, setProviders] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchFullMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        let imdbId = id;
        let resolvedTmdbId = null;
        let tmdbData = null;
        let movieTitle = "";

        if (id.startsWith("tt")) {
          // 1. It is an IMDb ID! Fetch OMDb Details first
          const omdbDetails = await getMovieDetails(id);
          setMovie(omdbDetails);
          movieTitle = omdbDetails.Title;
          
          // 2. Resolve TMDB ID from IMDb ID
          resolvedTmdbId = await getTmdbId(id);
        } else {
          // 1. It is a TMDB Movie ID! Fetch details from TMDB first to get its imdb_id
          resolvedTmdbId = id;
          try {
            const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`);
            if (tmdbResponse.ok) {
              tmdbData = await tmdbResponse.json();
              if (tmdbData.imdb_id) {
                imdbId = tmdbData.imdb_id;
              }
              movieTitle = tmdbData.title;
            }
          } catch (e) {
            console.error("Failed to fetch primary TMDB details:", e);
          }

          // 2. Query OMDb with the resolved imdbId
          if (imdbId && imdbId.startsWith("tt")) {
            const omdbDetails = await getMovieDetails(imdbId);
            setMovie(omdbDetails);
            movieTitle = omdbDetails.Title;
          } else if (tmdbData) {
            // OMDb couldn't find it or doesn't have it; normalize TMDB details to OMDb format to prevent app crash
            const normalized = {
              imdbID: id,
              Title: tmdbData.title,
              Year: tmdbData.release_date ? tmdbData.release_date.split("-")[0] : "",
              Plot: tmdbData.overview,
              Poster: tmdbData.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : null,
              imdbRating: tmdbData.vote_average ? String(tmdbData.vote_average.toFixed(1)) : "N/A",
              Genre: tmdbData.genres ? tmdbData.genres.map(g => g.name).join(", ") : "",
              Director: "",
              Actors: "",
              Runtime: tmdbData.runtime ? `${tmdbData.runtime} min` : "",
              Released: tmdbData.release_date,
              BoxOffice: tmdbData.revenue ? `$${tmdbData.revenue.toLocaleString()}` : "",
              Language: tmdbData.original_language,
              Country: tmdbData.production_countries ? tmdbData.production_countries.map(c => c.name).join(", ") : ""
            };
            setMovie(normalized);
          } else {
            throw new Error("No data available.");
          }
        }

        // 3. Trigger parallel queries for extended items using resolved TMDB ID
        if (resolvedTmdbId) {
          // Let's also fetch TMDB detailed movie response if we haven't already, to resolve the real backdrop path
          if (!tmdbData) {
            try {
              const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/${resolvedTmdbId}?api_key=${TMDB_API_KEY}`);
              if (tmdbResponse.ok) {
                tmdbData = await tmdbResponse.json();
              }
            } catch (e) {
              console.error("Failed to fetch backdrop TMDB details:", e);
            }
          }

          const [castData, similarData, trailerData, providerData, newsData] = await Promise.all([
            getMovieCast(resolvedTmdbId),
            getSimilarMovies(resolvedTmdbId),
            getMovieTrailer(resolvedTmdbId),
            getWatchProviders(resolvedTmdbId),
            getMovieNews(movieTitle)
          ]);

          setCast(castData.slice(0, 10)); // limit to first 10 cast members
          setSimilar(similarData.slice(0, 5)); // limit to 5 similar movies
          setTrailerUrl(trailerData);
          setProviders(providerData);
            if (newsData && newsData.length > 0) {
              setNews(newsData);
            }           
            console.log("News received:", newsData);
        }

        // Set backdrop and poster URLs directly onto the movie state
        if (tmdbData) {
          setMovie(prev => {
            if (!prev) return prev;
            return {
              ...prev,
              Backdrop: tmdbData.backdrop_path ? `https://image.tmdb.org/t/p/original${tmdbData.backdrop_path}` : null,
              Poster: prev.Poster && prev.Poster !== "N/A" ? prev.Poster : (tmdbData.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : null)
            };
          });
        }

      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("We encountered an issue downloading the movie ledger. Please check your connectivity.");
      } finally {
        setLoading(false);
      }
    };

    fetchFullMovieDetails();
  }, [id]);

  if (loading) {
    return <Loader fullScreen />;
  }

  if (error || !movie) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <Compass className="w-12 h-12 text-rose-500 mb-4 animate-bounce" />
        <h2 className="font-sans font-extrabold text-xl text-gray-900 dark:text-white">
          Details Unavailable
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 max-w-sm mt-1 mb-6">
          {error || "The movie file could not be queried."}
        </p>
        <Link
          to="/"
          className="flex items-center space-x-2 px-5 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    );
  }

  const isFav = isFavorite(movie.imdbID);

  // Resolve poster
  const posterUrl = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : null;

  // Resolve backdrop
  const backdropUrl = movie.Backdrop || posterUrl;

  const handleFavoriteClick = () => {
    toggleFavorite(movie);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: movie.Title,
        text: movie.Plot,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Movie URL copied to clipboard!");
    }
  };

  return (
    <div className="space-y-12 pb-24 transition-colors duration-200" id="movie-details-page">
      {/* 1. Ambient Blurred Backdrop Cover */}
      <div className="absolute top-0 left-0 right-0 h-[480px] z-0 overflow-hidden select-none pointer-events-none">
        <img
          src={backdropUrl}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-2xl opacity-20 dark:opacity-25 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"></div>
      </div>

      {/* 2. Main Hero Card Block */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 sm:gap-10 items-start pt-6">
        
        {/* Left Aspect: Poster Frame */}
        <div className="w-full max-w-[280px] mx-auto md:mx-0 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-gray-200/40 dark:border-slate-800/80 aspect-[2/3] relative flex items-center justify-center">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={`${movie.Title} Poster`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
                const fb = e.target.parentNode.querySelector(".details-poster-fallback");
                if (fb) fb.classList.remove("hidden");
              }}
            />
          ) : null}
          <div className={`details-poster-fallback absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-6 text-center ${posterUrl ? "hidden" : ""}`}>
            <Film className="w-12 h-12 text-white/20 mb-3" />
            <span className="text-xs font-bold text-white/40 uppercase tracking-wider">No Poster Available</span>
          </div>
        </div>

        {/* Right Aspect: Core Details Content */}
        <div className="flex-grow space-y-6 text-center md:text-left">
          
          {/* Back link & Actions row */}
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <Link
              to={-1}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-amber-500 dark:text-white/40 dark:hover:text-[#F2B01E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Previous</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={handleFavoriteClick}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all border cursor-pointer ${
                  isFav
                    ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/30 dark:border-rose-900/40 dark:text-rose-400"
                    : "bg-white/40 border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10"
                }`}
              >
                <Heart className={`w-4 h-4 ${isFav ? "fill-rose-500 text-rose-500" : "text-gray-400"}`} />
                <span>{isFav ? "Favorited" : "Add Favorite"}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="p-2 bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 text-gray-600 dark:text-slate-300 rounded-xl shadow-sm transition-colors cursor-pointer"
                aria-label="Share movie"
              >
                <Share2 className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Film Name & Year */}
          <div className="space-y-2">
            <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
              {movie.Title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-mono font-medium text-gray-500 dark:text-slate-400">
              <span className="bg-gray-150 dark:bg-slate-800 px-2 py-0.5 rounded">{movie.Rated || "Unrated"}</span>
              <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{movie.Runtime || "N/A"}</span>
              <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" />{movie.Released || movie.Year || "N/A"}</span>
            </div>
          </div>

          {/* Genre Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {movie.Genre && movie.Genre.split(",").map((g) => (
              <span
                key={g}
                className="px-3 py-1 bg-amber-50 dark:bg-white/5 border border-amber-200/40 dark:border-white/10 text-amber-700 dark:text-white/70 text-xs font-black rounded-lg"
              >
                {g.trim()}
              </span>
            ))}
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 border-y border-gray-150 dark:border-slate-800/80 py-4 max-w-lg mx-auto md:mx-0">
            {/* IMDb Rating */}
            <div className="text-center md:text-left space-y-0.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400 dark:text-slate-500">IMDb Rating</span>
              <div className="flex items-center justify-center md:justify-start space-x-1">
                <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                <span className="font-sans font-extrabold text-base text-gray-900 dark:text-white">{movie.imdbRating || "N/A"}</span>
                <span className="text-xs text-gray-400 font-medium">/10</span>
              </div>
            </div>

            {/* Box Office */}
            <div className="text-center md:text-left space-y-0.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400 dark:text-slate-500">Box Office</span>
              <div className="flex items-center justify-center md:justify-start space-x-1 text-emerald-600 dark:text-emerald-400">
                <Landmark className="w-4.5 h-4.5" />
                <span className="font-sans font-extrabold text-base">{formatCurrency(movie.BoxOffice)}</span>
              </div>
            </div>

            {/* Awards */}
            <div className="text-center md:text-left space-y-0.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-gray-400 dark:text-slate-500">Awards Status</span>
              <div className="flex items-center justify-center md:justify-start space-x-1 text-indigo-600 dark:text-indigo-400">
                <Award className="w-4.5 h-4.5" />
                <span className="font-sans font-extrabold text-xs sm:text-sm truncate max-w-[120px] inline-block" title={movie.Awards}>
                  {movie.Awards && movie.Awards !== "N/A" ? movie.Awards : "No Academy Awards"}
                </span>
              </div>
            </div>
          </div>

          {/* Plot Paragraph */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono font-bold tracking-wider text-gray-400 dark:text-slate-500">The Plotline</h3>
            <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {movie.Plot || "A detailed narrative synopsis for this title is currently not on file."}
            </p>
          </div>

          {/* Director & Writers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div>
              <span className="font-bold text-gray-500 dark:text-slate-400">Director:</span>{" "}
              <span className="text-gray-900 dark:text-white font-medium">{movie.Director || "N/A"}</span>
            </div>
            <div>
              <span className="font-bold text-gray-500 dark:text-slate-400">Actors/Writers:</span>{" "}
              <span className="text-gray-900 dark:text-white font-medium">{movie.Actors || "N/A"}</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Trailer & Streaming Providers Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Trailer Embed Column (Takes 2/3 of space) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200/40 dark:border-white/5 pb-3">
            <h3 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight border-l-4 border-amber-500 dark:border-[#F2B01E] pl-3">
              Official Trailer
            </h3>
          </div>
          <Trailer src={trailerUrl} title={movie.Title} />
        </div>

        {/* Watch Providers Column (Takes 1/3 of space) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200/40 dark:border-white/5 pb-3">
            <h3 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight border-l-4 border-amber-500 dark:border-[#F2B01E] pl-3">
              Where to Watch
            </h3>
          </div>
          <div className="space-y-3">
            {providers.length > 0 ? (
              providers.map((p) => (
                <ProviderCard key={p.name} provider={p} />
              ))
            ) : (
              <div className="p-6 text-center border border-dashed border-gray-200 dark:border-slate-800 rounded-2xl text-gray-400 text-xs">
                Not active on subscription flatrates. Rent or buy options may apply.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Cast Section */}
      <section className="space-y-4 relative z-10" id="cast-section">
        <div className="flex items-center justify-between border-b border-gray-200/40 dark:border-white/5 pb-3">
          <h3 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight border-l-4 border-amber-500 dark:border-[#F2B01E] pl-3">
            Principal Cast
          </h3>
        </div>
        
        {cast.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {cast.map((actor) => (
              <CastCard key={actor.id || actor.name} actor={actor} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 dark:text-slate-500 font-mono">No detailed casting logs retrieved.</p>
        )}
      </section>

      {/* 5. Movie News Section */}
      <section className="space-y-4 relative z-10" id="news-section">
        <div className="flex items-center justify-between border-b border-gray-200/40 dark:border-white/5 pb-3">
          <h3 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight border-l-4 border-amber-500 dark:border-[#F2B01E] pl-3">
            Related Cinematic News
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.length > 0 ? (
            news.slice(0, 3).map((article, idx) => (
              <NewsCard key={idx} article={article} />
            ))
          ) : (
            <p className="text-sm text-gray-400 dark:text-slate-500 font-mono">No press releases recorded for this title.</p>
          )}
        </div>
      </section>

      {/* 6. Similar Movies */}
      <section className="space-y-4 relative z-10" id="similar-section">
        <div className="flex items-center justify-between border-b border-gray-200/40 dark:border-white/5 pb-3">
          <h3 className="font-sans font-black text-base sm:text-lg text-gray-900 dark:text-white tracking-tight border-l-4 border-amber-500 dark:border-[#F2B01E] pl-3">
            Similar Suggestions
          </h3>
        </div>
        <MovieGrid movies={similar} emptyMessage="No related items discovered." />
      </section>
    </div>
  );
}
export default MovieDetails;
