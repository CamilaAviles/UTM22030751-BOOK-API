const db = require("../db.js");

const Book = db.books;

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  try {
    let book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    book.title = title;
    book.author = author;
    book.genre = genre;
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    await book.destroy();
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const patchBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  try {
    let book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Verificar si se proporciona al menos un campo para actualizar
     if (!title && !author && !genre) {
      return res.status(400).json({ error: "At least one field (title, author, genre) must be provided for updating" });
    }
    
    // Actualizar solo los campos que se proporcionan en el cuerpo de la solicitud
    if (title) {
      book.title = title;
    }
    if (author) {
      book.author = author;
    }
    if (genre) {
      book.genre = genre;
    }

    // Guardar los cambios
    await book.save();
    
    // Devolver el libro actualizado
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  patchBook
};
