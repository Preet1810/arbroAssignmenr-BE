import express from "express";
const app=express();
import dotenv from "dotenv";
dotenv.config()// intitializing env file
import cors from 'cors'
import morgan from "morgan";
import errorMiddleware from "./middlewares/errors.js";
import { connectDatabase } from "./config/dbConnect.js";
import routes from "./routes/routes.startup.js";



// Connecting to database
connectDatabase();

app.use(
    express.json({
        limit: "10mb",
        verify: (req, res, buf) => {
            req.rawBody=buf.toString();
        },
    })
);

app.use(express.urlencoded({ extended: true })); // parses encoded url
app.use(morgan("tiny")); // initiating console api requests
app.use(cors());


// configuring routes
app.use(routes);

// Using error middleware
app.use(errorMiddleware);


const server=app.listen(process.env.PORT, () => {
    console.log(
        `🚀 Arbro assignemnt Server is Running on PORT => ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
    );
});

//Handle Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    });
});