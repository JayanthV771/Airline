import mongoose from "mongoose";
const airportSchema = new mongoose.Schema({
    airportId: {
        "type": "Number",
        "required": true
    },
    name: { 
        "type":"String",
        "required": true
    },
    city: { 
        "type":"String",
        "required": true
    },
    country: { 
        "type":"String",
        "required": true
    },
    IATA: { 
        "type":"String",
        "required": true
    },
    ICAO: { 
        "type":"String",
        "required": true
    },
    latitude: {
        "type": "Number",
        "required": true
    },
    longitude: {
        "type": "Number",
        "required": true
    },
    altitude: {
        "type": "Number",
        "required": true
    },
    timezone: {
        "type": "Number",
        "required": true
    },
    DST:{ 
        "type":"String",
        "required": true
    },
    tzDatabaseTimezone:{ 
        "type":"String",
        "required": true
    },
    type: { 
        "type":"String",
        "required": true
    },
    source:{ 
        "type":"String",
        "required": true
    },
});

export const Airport = mongoose.model('Airport', airportSchema);