import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/test";

mongoose.connect(url);

const connetion = mongoose.connection;

connetion.once('open', ()=>{
    console.log('BD conectada');
})
