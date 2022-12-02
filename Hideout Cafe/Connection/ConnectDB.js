let mongoose = require('mongoose')

let URI = "mongodb+srv://2222:2222@cluster0.6abjd3o.mongodb.net/test"

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {useUnifiedTopology:true,
            useNewUrlParser: true}
            )
            console.log("Database is Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb

