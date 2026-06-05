import "./App.css";

// function App() {
//   return (
  

// // <>
// // <div className="container">

// //   <header className="header box">
// //     Header
// //   </header>
// //   <aside className="sidebar box">
// //     Sidebar
// //   </aside>
// //   <main className="content box">
// //     Main
// //   </main>
// //   <aside className="sidebar2 box">
// //     Sidebar2
// //   </aside>
// //   <footer className="footer box">
// //     Footer
// //   </footer>

// // </div>


// //     <div className="bg-black text-white h-screen flex items-center justify-center">
// //       <h4 className="text-5xl font-bold text-red-500">
// //         Tailwind Working 🚀
// //       </h4>
// //     </div>

// // </>



//   );
// }

// export default App;



function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] grid-rows-[70px_80px_1fr_80px_70px] md:grid-rows-[1fr_5fr_1fr] gap-3 p-3 min-h-screen font-sans bg-gray-100">

      <header className="md:col-span-3 flex items-center justify-center rounded-xl text-xl md:text-2xl bg-cyan-400 text-yellow-300">Header</header>

      <aside className="flex items-center justify-center rounded-xl text-xl md:text-2xl bg-purple-500 text-white">Sidebar</aside>

      <main className="flex items-center justify-center rounded-xl text-xl md:text-2xl bg-blue-500 border-4 border-green-500 text-gray-200">Main</main>

      <aside className="flex items-center justify-center rounded-xl text-xl md:text-2xl bg-red-400">Sidebar2</aside>

      <footer className="md:col-span-3 flex items-center justify-center rounded-xl text-xl md:text-2xl bg-violet-400">Footer</footer>

    </div>
  )
}

export default App






