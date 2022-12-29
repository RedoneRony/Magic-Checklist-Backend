import  mongoose  from 'mongoose'


const connectDb = async ()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI,{
        //   useUnifiedTropology:true,
        //   useUrlParser:true,
        //   useCreateIndex:true
      })  
      console.log(`MongoDb Connected ${conn.connection.host}`)
    } catch (error) {
        
        console.log(`Error ${error.message}`)
        process.exit(1)
    }
}

export default connectDb;