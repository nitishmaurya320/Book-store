const Book =require("../model/book.model.js");

const getBooks = async (req, res) => {
    try{
        const books= await Book.find();
        res.status(200).json(books);
    }catch(err){
        res.status(500).json({message: err.message});
    }
    
}

module.exports={
    getBooks
}