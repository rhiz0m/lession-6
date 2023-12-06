import express, { Request, Response } from "express"

const app = express()
const PORT: number = 3000

app.use(express.json())

// Interfaces
interface Student {
  name: string
  age: number
  grades: string[]
}

// Endpoints
// Example for name: http://localhost:3000/student?name=thomas

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, welcome to your Express API!")
})

app.get("/test", (req: Request, res: Response) => {
  res.send("This is my first test End-Point with Express!")
})

// Query Practice
app.get("/student", (req: Request, res: Response) => {
  const queryName: string = req.query.name as string

  const benny: Student = {
    //name: "benny"
    name: queryName,
    age: 15,
    grades: ["A", "B", "C", "F"],
  }

  res.json(benny)
})

// Query Post + Body -Practice

app.post("/student", (req: Request, res: Response) => {
  const student: Student = req.body

  res.status(201).json(student)

  console.log(student)
})

// Listen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
