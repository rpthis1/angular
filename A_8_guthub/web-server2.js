var express = require("express"),
  app     = express(),
  port    = parseInt(process.env.PORT, 10) || 8091;

var db = require("mongojs").connect("54.201.72.223:27017/local", ["notes"]);
var ObjectId = require('mongodb').ObjectID;

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var recipes_map = {
  '1': {
    "id": "1",
    "title": "Cookies",
    "description": "Delicious, crisp on the outside, chewy on the outside, oozing with chocolatey goodness cookies. The best kind",
    "ingredients": [
      {
        "amount": "1",
        "amountUnits": "packet",
        "ingredientName": "Chips Ahoy"
      }
    ],
    "instructions": "1. Go buy a packet of Chips Ahoy\n2. Heat it up in an oven\n3. Enjoy warm cookies\n4. Learn how to bake cookies from somewhere else"
  },
  '2': {
    id: 2,
    'title': 'Recipe 2',
    'description': 'Description 2',
    'instructions': 'Instruction 2',
    ingredients: [
      {amount: 13, amountUnits: 'pounds', ingredientName: 'Awesomeness'}
    ]
  }
};


app.get('/recipes', function(req, res) {
    db.notes.find({}, function(err, notes) {
        if( err || !notes)
        {
            console.log("no notes");
        }
        else
        {
            res.send(notes);
        }
    });
});

app.get('/recipes/:_id', function(req, res) {

    console.log("PRE : " + req.params._id);


    if( req.params._id != "undefined" )
    {
        console.log("inn : " + req.params._id);
   db.notes.find({ '_id': ObjectId(req.params._id) }, function(err, notes) {
        if( err || !notes)
       {
           console.log("no notes");
       }
       else
       {
            res.send(notes[0]);
        }
   });

    }

});

app.post('/recipes', function(req, res) {
  var recipe = req.body;

    db.notes.insert(req.body , function(err, notes) {
        if( err || !notes)
        {
            console.log("no notes");
        }
        else
        {
            res.send(notes[0]);
        }
    });

    recipe._id = "3343a";

  res.send(recipe);
});

app.post('/recipes/:_id', function(req, res) {
  var oldNote  = req.body;
  var note = {};
  note = req.body;

  delete  note._id;
    if( req.params._id != "undefined" )
    {

        db.notes.update({ '_id': ObjectId(req.params._id) } , note , function(err, notes) {
            if( err || !notes)
            {
                console.log("no notes");
            }
            else
            {
                res.send(notes[0]);
            }
        });

    }

          oldNote._id = req.params._id
          res.send(oldNote);
});

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');
