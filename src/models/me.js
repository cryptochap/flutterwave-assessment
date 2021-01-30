const mongoose = require("mongoose")

const meSchema = new mongoose.Schema(
    {
       message: {
           String,
           
       },
       status :{
           String,
       },
       data: {
           name:{
               String,
              
           },
           github:{
            String,
            
        },
        email:{
            String,
            
        },
        mobile:{
            Number,
            
        },
        twitter:{
            String
        },

       }
    }
)

module.exports = mongoose.model("me", meSchema)