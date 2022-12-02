const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // date: {type:date,default:Date.now},
    name: { type: String, required: true },
    repeat: Boolean
})

let User = new mongoose.model("User",schema)

// saveDoc=()=>{
//     let u1 =  new User({
//         username:"namanviber",
//         email:"namanviber@gmail.com",
//         password:"Naman@2003",
//         name:"Naman Jain",
//         repeat:false
//     })
//     let u2 =  new User({
//         username:"aryamansital",
//         email:"aryamansital@gmail.com",
//         password:"aryaman@2603",
//         name:"Aryaman Sital",
//         repeat:false
//     })
//     let u3 =  new User({
//         username:"vivaansahai",
//         email:"vivaansahai@gmail.com",
//         password:"vivaan@2801",
//         name:"Vivaan Sahai",
//         repeat:false
//     })
//     u1.save()
//     u2.save()
//     u3.save()
// }

// module.exports = saveDoc
