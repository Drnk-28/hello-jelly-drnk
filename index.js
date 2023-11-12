const app = require("express")()
const port = 3000

app.get("/", async (req, res) => {
  res.send("<h1>heyo</h1><br><h2>heyo</h2>")
})

app.listen(port, () => {
console.log("hello")
})
