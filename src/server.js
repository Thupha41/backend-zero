const express = require("express");
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai bao route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
