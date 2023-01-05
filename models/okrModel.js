import  mongoose  from 'mongoose'

const okrSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    okr1Title:{
        type:String,
        required:true
    },
    okrQ1:[{
        type:String,
        required:true
     }],
     okrYearTitle:{
        type:String,
        required:true
    },
    okrYear:[{
        type:String,
        required:true,
    }]

 },{
   timestamps:true 
 }
)

const Okr = mongoose.model('Okr',okrSchema);

export default Okr;