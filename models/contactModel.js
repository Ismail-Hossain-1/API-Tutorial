
const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
        user_id:{type : Number,required:true,},
        user_name:{ type : String, required :true},
        balance:{type : Number,required :true},},
        {timestamps: true,},
);

const stationsSchema=mongoose.Schema({
    station_id:{type:Number, required: true},
    station_name:{type: String, required: true},
    longitude :{type: Number, required:true},
    latitude : {type: Number, required: true}


});

const trainSchema= mongoose.Schema({
    "train_id": Number, //train's numeric id
    "train_name": String,// # train's name
    "capacity": Number, // seating capacity
    "stops": [ // # list of stops
    {
    "station_id": Number,  //station's id
    "arrival_time": String, // arrives at
    "departure_time": String, // leaves at
    "fare": Number //ticket cost
    }]
   });

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model("Stations", stationsSchema);