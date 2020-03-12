const PORT = 3000;

// Require libraries
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const path = require("path");

// Require routers
const expensesRouter = require("./routing/expensesRouter.js");
const usersRouter = require("./routing/usersRouter.js");
const analyticsRouter = require("./routing/analyticsRouter.js");

// Initialize express app
const app = express();

// Set up middleware
app.use(parser.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.use(expensesRouter);
app.use(usersRouter);
app.use(analyticsRouter);

app.listen(PORT, () => console.log(`Budget server listening on port ${PORT}!`));
