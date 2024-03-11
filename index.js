const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { getBooks, createBook, updateBook, deleteBook, patchBook } = require("./queries/book.queries");

app.use(bodyParser.json());

app.get("/book", (req, res) => {
  getBooks(req, res);
});

app.post("/book", (req, res) => {
  createBook(req, res);
});

app.put("/book/:id", (req, res) => {
  updateBook(req, res);
});

app.delete("/book/:id", (req, res) => {
  deleteBook(req, res);
});

app.patch("/book/:id", (req, res) => {
  patchBook(req, res);
});

app.listen(port, () => {
  console.log(` app running on port ${port}`);
});
