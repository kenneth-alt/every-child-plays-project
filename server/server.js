import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import playgroundRouter from "./routes/playgroundRoutes.js"
import reviewRouter from "./routes/reviewRoutes.js"
import contactUsRouter from "./routes/contactUsRoutes.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 5001

connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/playgrounds', playgroundRouter);
app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/contact-us', contactUsRouter);


app.listen(port, () => console.log(`Server started on port ${port}`))