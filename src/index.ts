import dotenv from "dotenv";
import config from "./config";
import app from './server';

dotenv.config();

app.listen(config.port, () => {
    console.log(process.env.NODE_ENV)
    console.log(config.port)
    console.log(`Server is live on http://localhost:${config.port}`)
})