require('dotenv').config()

const express = require('express');
const app = express()
const port = 3000

const githubData = {
  "login": "husnain-nawaz",
  "id": 64336728,
  "node_id": "MDQ6VXNlcjY0MzM2NzI4",
  "avatar_url": "https://avatars.githubusercontent.com/u/64336728?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/husnain-nawaz",
  "html_url": "https://github.com/husnain-nawaz",
  "followers_url": "https://api.github.com/users/husnain-nawaz/followers",
  "following_url": "https://api.github.com/users/husnain-nawaz/following{/other_user}",
  "gists_url": "https://api.github.com/users/husnain-nawaz/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/husnain-nawaz/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/husnain-nawaz/subscriptions",
  "organizations_url": "https://api.github.com/users/husnain-nawaz/orgs",
  "repos_url": "https://api.github.com/users/husnain-nawaz/repos",
  "events_url": "https://api.github.com/users/husnain-nawaz/events{/privacy}",
  "received_events_url": "https://api.github.com/users/husnain-nawaz/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2020-04-25T23:45:48Z",
  "updated_at": "2026-07-09T18:45:25Z"
}


app.get('/', (req, res) => {
  res.send('Hello Wncxorhgfdld!')
})



app.get('/sialkot', (req, res)=>{
    res.send('bab g sialkkot')
})

app.get("/h2", (req, res)=>{
    res.send('<h2>jhgfdfh</h2>')
})

app.get('/h3', (gujar, patti)=>{
    patti.send('<h1>gujjar ty patti</h1>')
})


app.get('/githubdata', (req, res)=>{
    res.json(githubData)
})
















app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})