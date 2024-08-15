import express from "express"
// Creating an app with express
const app = express()


app.use(express.json())

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users",userRouter)


export { app }