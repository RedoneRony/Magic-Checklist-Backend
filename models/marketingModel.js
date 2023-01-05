import  mongoose  from 'mongoose'

const marketingSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    marketingCheckListTitle:{
        type:String,
        required:true
    },
    marketingCheckList:[{
        type:String,
        required:true
     }],
    webDirectoriesTitle:{
        type:String,
        required:true
    },
    webDirectories :[{
        type:String,
        required:true,
    }],
    contentPlanTitle:{
        type:String,
        required:true
    },
    contentPlan :[{
        type:String,
        required:true,
    }],

 },{
   timestamps:true 
 }
)

const Marketing = mongoose.model('Marketing',marketingSchema);

export default Marketing;