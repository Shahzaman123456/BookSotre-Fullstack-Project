import Book from "../model/book.model.js";

// GET all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);  // ✅ res is now from Express
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
