var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var harry = new Cat({
  name: "harry",
  age: 20,
  temperament: "grouchy"
});

harry.save(function(err, cat) {
  if (err) {
    console.log("SOMETHING WENT WRONG!");
  } else {
    console.log("WE JUST SAVED A CAT TO THE DB:");
    console.log(cat);
  }
});
