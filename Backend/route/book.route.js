const express = require('express');

const { getBooks } =require('../controller/book.controller');

const router=express.Router();

router.get('/', getBooks);

module.exports=router;