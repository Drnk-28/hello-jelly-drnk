const express = require("express")
const app = express()
const port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.listen(port, () => {
  console.log(`connected to ${port}`)
})
app.get("/", (req, res) => {
  res.render("home")
})

app.get("/home", async (req, res) => {
  res.render("home")
})
