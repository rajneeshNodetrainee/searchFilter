const mongoose = require("mongoose")

//create a schema
const moviesSchema = new mongoose.Schema({
    
})

// const moviesSchema = new mongoose.Schema({
//     plot: {
//         type: String
//     },
//     genres:{
//         type:Array
//     },
//     runtime:{
//         type:Number
//     },
//     cast:{type:Array},
//     num_mflix_comments:{type:Number},
//     title:{type:String},
//     fullplot :{type:String},
//     countries:{type:Array},
//     released_date:{type:Date},
//     directors:{type:Array},
//     rated:{type:String},
//     awards:{type:Object},
//     lastupdated:{type:String},
//     year:{type:Number},
//     imdb:{type:Object},
//     type:{type:String},
//     tomatoes:{type:Object},
//     poster:{type:String},
//     languages:{type:Array},
//     writers:{type:Array}
// })


//create a model
//movies represents a collection in database. therefore it will connect to movies collection in sample_mflix
const Movies = new mongoose.model("movies", moviesSchema)  

module.exports= Movies;