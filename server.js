const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/H3Routes");

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        console.log("server route on production")
    })
} else {
    app.get("/", (req, res) => {
        console.log("not on production")
    })
}

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origins", "*");
    res.setHeader("Access-Control-Allow-Origins", "Origin, X-Requested-With, Content-Type, Accept")
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);


const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
