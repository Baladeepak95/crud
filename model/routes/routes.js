const express = require ('express');
const bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.json()); 
const users = require('../user');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/event', (req, res) => {

    const data = {
        Rollno:req.body.Rollno,
        Eventname: req.body.Eventname,
        Eventtype: req.body.Eventtype,
        Collegename: req.body.Collegename,
        Phoneno: req.body.Phoneno,
       }
    
    var myData = new users(data);
    myData.save();
    res.send(req.body);
})

app.delete('/event/:id', (req,res) => {

    var id = req.params.id; 

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    } 
    users.findByIdAndDelete(id, (users) => {
        if(!users) {
            return res.status(404).send();
            console.log("Deleted Successfully");
        }
        res.send(users);
    });
}); 

app.put('/event/:id', (req, res) => {
    var id = req.params.id; 
    var body = _.pick(req.body, ['Collegename']);
 
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    } 
    if(_.isUndefined(body.Collegename)) {
        res.send("College name is required.");
    } 
    else if(_.isNumber(body.Collegename)){
        res.send("College name must be string.");
    }
    else {
        body.completedAt = new Date().getTime(); 
    } 
    users.findByIdAndUpdate(id, {$set: body}, (users) => { 
        if(!users) {
            return res.status(404).send();
        }
        res.send(users);
    });

});  
app.get('/event', (req, res) => {
    //var display = {};
    users.find({}, (err, users) => {
        //users[user._id] = user;
        res.send(users);
    });
    // res.send(users);
})
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});