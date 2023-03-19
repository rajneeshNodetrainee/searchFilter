const Movies = require("../models/movies");

const getAllMovies =async (req, res)=>{
    try{
        // const movies = await Movies.find();
        let {page, limit} = req.query;
        page = page ||1;
        limit = limit||20;
        //  page = page||1;
        // limit = limit||10;
        let skip = (page-1)*limit;

        const movies = await Movies.find()
        .skip(skip).limit(limit)
        res.send(movies)
        // console.log(movies)
    }catch(e){
        console.log(e)
    }
    
}
module.exports = getAllMovies;
