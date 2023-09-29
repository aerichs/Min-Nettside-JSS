var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var hjemRouter = require("./routes/hjem");
var ommegRouter = require("./routes/ommeg");
var utstyrRouter = require("./routes/utstyr");
var favorittfiskRouter = require("./routes/favorittfisk");
var bilderRouter = require("./routes/bilder");
var videoRouter = require("./routes/video");
var kontaktmegRouter = require("./routes/kontaktmeg");
var footerRouter = require("./routes/footer");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + "/node_modules/jquery/dist"));
app.use(express.static(__dirname + "/node_modules/typed.js/lib"));
app.use(express.static(__dirname + "/node_modules/bootstrap-icons"));
//app.use(express.static(__dirname + "/node_modules/bootstrap-toggle"));
//app.use("/toastify", express.static(__dirname + "/node_modules/toastify/dist"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/hjem", hjemRouter);
app.use("/ommeg", ommegRouter);
app.use("/utstyr", utstyrRouter);
app.use("/favorittfisk", favorittfiskRouter);
app.use("/bilder", bilderRouter);
app.use("/video", videoRouter);
app.use("/kontaktmeg", kontaktmegRouter);
app.use("/footer", footerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
