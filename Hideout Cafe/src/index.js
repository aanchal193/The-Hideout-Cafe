let express = require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()
let ConnectDB = require("../connection/ConnectDB")
// let saveDoc = require("../Module/model")
// saveDoc()

app.set("view engine", "hbs")

hbs.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
  });
hbs.registerHelper('from', function (arr, start,limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(start, limit);
});

app.use(express.static(path.join(__dirname, "../Public")));
let regex = /\w/
app.get("/", (req, res) => {
    res.render("Home")
})

app.get("/Contact_Us", (req, res) => {
    res.render("Contact_Us")
})
app.get("/Gallery", (req, res) => {
    res.render("Gallery")
})
app.get("/Home", (req, res) => {
    res.render("Home")
})
app.get("/Login", (req, res) => {
    res.render("Login")
})
app.get("/Menu", (req, res) => {
    res.render("Menu")
})
app.get("/Review", (req, res) => {
    res.render("Review")
})
app.get("/Shop2", (req, res) => {
    res.render("Shop2")
})
app.get("/This_Is_Us", (req, res) => {
    res.render("This_Is_Us")
})
app.get("/Reservation", (req, res) => {
    res.render("Reservation")
})
app.get(regex, (req, res) => {
    res.render("error")
})
app.set("views", path.join(__dirname, "../Templates/views"))
hbs.registerPartials(path.join(__dirname, "../Templates/partials"))

ConnectDB()


app.listen("3000", () => {
    console.log("Server is Connected")
})

