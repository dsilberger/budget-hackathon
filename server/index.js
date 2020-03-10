const PORT = 3000;

// Require libraries
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");

// Require routers
const expensesRouter = require("./routing/expensesRouter.js");
const usersRouter = require("./routing/usersRouter.js");

// Initialize express app
const app = express();

// Set up middleware
app.use(parser.json());
app.use(morgan("dev"));

// app.use(expensesRouter);
// app.use(usersRouter);

app.listen(PORT, () => console.log(`Budget server listening on port ${PORT}!`));
