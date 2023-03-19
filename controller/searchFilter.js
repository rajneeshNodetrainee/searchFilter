const Movies = require("../models/movies")

const searchFilter = async (req, res)=>{
    const searchField = req.query.title;
    //get everything at a  time
    let {page, title, sort, limit} = req.query;
    page = page || 1;  //Bydefault page is 1
    limit = limit || 6; //Bydefault limit is 6
    
    const sortObject = {};
    if(sort){
        const sortFields = sort.split(',');
        for(const field of sortFields){
            const [key,value] = field.startsWith('-')?[field.slice(1), -1]:[field,1];
            // console.log("key "+key+"value "+value)
            sortObject[key] = value;
        }
    }
    // console.log(page,  title, sort, limit);
    // console.log(sortObject)
    let skipContent = (page-1)*limit;
    let responseData = await Movies.find({title:{$regex: title, $options:'$i'}
}).sort(sortObject).limit(limit).skip(skipContent)
    console.log(responseData)
    res.status(200).send(responseData)
}

module.exports = searchFilter;

