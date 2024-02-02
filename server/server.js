import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.listen(PORT, () => {
    console.log("Server listening")
})