import mangoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mangoose.set('strictQuery',true)

    if(isConnected){
        console.log("MongoDB is already Connected");
        return;
    }
    try {
        await mangoose.connect(process.env.MONGODB_URI,{
            dbName : 'share_prompt',
            useNewUrlParser:true,
            useUnifiedTopology: true,
        })
        isConnected =true;
        
        console.log('MongoDB Connected')
    } catch (error){
        console.log(error);
    }
}