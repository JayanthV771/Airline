import mongoose from "mongoose";
const airlineSchema = new mongoose.Schema({
    airlineId:{
        "type": "Number",
        "required": true
    },
    name:{ 
        "type":"String",
        "required": true
    },
    alias:{ 
        "type":"String",
        "required": true
    },    
    IATA:{ 
        "type":"String",
        "required": true
    },
    ICAO: { 
        "type":"String",
        "required": true
    },
    callsign: { 
        "type":"String",
        "required": true
    },
    country: { 
        "type":"String",
        "required": true
    },
    active: { 
        "type":"String",
        "required": true
    },
});

export const Airline = mongoose.model('Airline', airlineSchema);