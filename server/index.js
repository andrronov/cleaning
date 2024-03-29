import express from 'express'
import bodyParser from 'body-parser'
import router from './router.js'
import cors from 'cors';

const PORT = process.env.PORT || 3003

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', router)

app.use(express.static(process.cwd()+"/dist"))
app.listen(process.env["PORT"] || PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});