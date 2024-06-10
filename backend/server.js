import express, { response } from "express"
import {PORT, mongoURI} from "./config.js"
import Mongoose  from "mongoose"
import cors from "cors"
import { Airport } from "./models/airportsModel.js"
import { Airline } from "./models/airlinesModel.js"
import { route } from "./models/routeModel.js"

const app = express()
app.use(express.json)

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("connected successfully")
});

app.use(cors)

app.get('/airports', async (request, response) => {
    try {
        const Airports = await Airport.find();
        return response.status(200).json({
        "data": Airports,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  app.get('/Routes', async (request, response) => {
    try {
        const Route = await route.find({});
        return response.status(200).json({
        "data": route,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  app.get('/airline', async (request, response) => {
    try {
        const airline = await Airline.find({});
        return response.status(200).json({
        data: airline,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

Mongoose
    .connect (mongoURI)
    .then(() => {
        console.log("connected ")
        app.listen(PORT, () => {console.log(`connected to port: ${PORT}`)})
    })
