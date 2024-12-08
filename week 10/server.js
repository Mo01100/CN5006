var express = require("express");
let Books = require('./schema');
let mongodbConnected = require('./MongoDBConnect');
const cors = require('cors');

var app = express();
app.use(express.json());  

app.get('/', function(req, res) {
   res.json("Hi welcome to my uel website");
});

app.get('/about', function(req, res) {
   res.send("mongodb express React and mongoose app, React runs in another application");
   Books.countDocuments().exec()
       .then(count => {
           console.log("Total documents Count before addition:", count);
           res.send(`Total books count: ${count}`);
       })
       .catch(err => {
           console.error(err);
           res.status(500).send('Error counting documents');
       });
});

app.get('/allbooks', function(req, res) {
   Books.find()
       .then((allBooks) => {
           res.json(allBooks);
       })
       .catch(err => {
           res.status(500).json({ error: err.message });
       });
});

app.post('/addbooks', function(req, res) {
   console.log("Request Body:", req.body);
   let newbook = new Books(req.body);
   console.log("newbook->", newbook);
   newbook.save()
       .then(() => {
           res.status(200).json({'books': 'book added successfully'});
       })
       .catch(err => {
           console.error(err);
           res.status(400).send('Adding new book failed');
       });
});

app.post('/updatebook/:id', async function(req, res) {
   let id = req.params.id;
   let updatedbook = req.body; 
   console.log("Updating book id:", id, "newbook->", updatedbook);
   try {
       const result = await Books.findByIdAndUpdate(id, updatedbook, { new: true });
       if (result) {
           res.status(200).json({'books': 'book updated successfully'});
       } else {
           res.status(404).send('Book not found');
       }
   } catch (err) {
       console.error(err);
       res.status(500).send('Error updating book');
   }
});

app.post('/deleteBook/:id', function(req, res) {
   let id = req.params.id;
   console.log("Deleting book with id:", id);
   Books.findByIdAndDelete(id)
       .then(() => {
           res.status(200).send('Book Deleted');
       })
       .catch(err => {
           console.error(err);
           res.status(500).send('Error deleting book');
       });
});

app.listen(5003, function() {
   console.log("Server is running on port 5003");
});

