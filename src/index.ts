import express, { Request, Response } from "express"

const app = express()
const PORT = 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, welcome to your Express API!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})