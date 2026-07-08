const app = require("./src/app")
require("dotenv").config();
const connectDB = require("./src/db/db");
connectDB();
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})