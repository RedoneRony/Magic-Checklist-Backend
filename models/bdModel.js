import  mongoose  from 'mongoose'

const bdSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    bdCheckList:[{
        type:String,
        required:true
     }],
    salesActivity:[{
        type:String,
        required:true,
    }],
    marketPlace:[{
        type:String,
        required:true,
    }],

 },{
   timestamps:true 
 }
)

const Bd = mongoose.model('Bd',bdSchema);

export default Bd;