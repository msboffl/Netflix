import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4400 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const initialPath = path.join(__dirname, '../client')
const  frontPath = app.use(express.static(initialPath))

// Home Page
app.get('/', (req, res) => {
    res.send(path.join(frontPath, 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})