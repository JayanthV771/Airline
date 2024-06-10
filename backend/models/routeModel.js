import mongoose from "mongoose"; 
const routeSchema = new mongoose.Schema({
    airline:{ 
        "type":"String",
        "request": true
    },
    airlineId:{
        "type": "Number",
        "required": true
    },
    sourceAirport:{ 
        "type":"String",
        "request": true
    },
    sourceAirportId:{
        "type": "Number",
        "required": true
    },
    destinationAirport:{ 
        "type":"String",
        "request": true
    },
    destinationAirportId:{
        "type": "Number",
        "required": true
    },
    codeshare:{ 
        "type":"String",
        "request": true
    },
    stops:{
        "type": "Number",
        "required": true
    },
    equipment: String
});

export const route = mongoose.model('Route', routeSchema);