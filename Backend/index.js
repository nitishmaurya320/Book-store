const express= require('express');
const mongoose= require('mongoose');

const dotenv= require('dotenv');
const bookRoute= require('./route/book.route');
const userRoute= require('./route/user.route');
dotenv.config();
const cors = require('cors');


const app= express();
app.use(express.json());
app.use(cors());
const PORT= process.env.PORT || 5000;
const    MONGOURI= process.env.MONGOURI;
//connecting to mongodb
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})


app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}` )
})