const app = require("express")()
const port = 3000

app.get("/", async (req, res) => {
  res.send("hi")
})

app.listen(port, () => {
console.log("hello")
})
