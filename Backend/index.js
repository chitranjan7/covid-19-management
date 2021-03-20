const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let mongoose = require('mongoose');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
console.log('working');

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

const doctorSchema = mongoose.model('doctor', {
    address: { type: String },
    appointmentDate: { type: String },
    dName: { type: String },
    dob: { type: String },
    experience: { type: String },
    gender: { type: String },
    id: { type: String },
    mailId: { type: String },
    number: { type: String },
    qualification: { type: String },
    specialist: { type: String }
})

const nurseSchema = mongoose.model('nurse', {
  id: { type: String },
  nName: { type: String },
  dob: { type: String },
  gender: { type: String },
  qualification: { type: String },
  experience: { type: String },
  appointmentDate: { type: String },
  address: { type: String },
  number: { type: String },
  mailId: { type: String }
})

const patientSchema = mongoose.model('patient', {
  address: { type: String },
  bGroup: { type: String },
  contactNo: { type: String },
  covidTesting: { type: Boolean },
  date: { type: String },
  dob: { type: String }, 
  fName: { type: String },
  gender: { type: String },
  hospitalName: { type: String },
  id: { type: String },
  pName: { type: String },
  wardNo: { type: String },
  homeQuarantine: { type: Boolean },
  deceased: { type: Boolean }
})

app.get('/doctor',function(req , res){
  doctorSchema.find({}, function (err, docs) { 
    if (err){ 
        console.log(err); 
        res.send (err)
    } 
    else{ 
        console.log("First function call : ", docs); 
        res.send (docs)
    } 
    });
 }
 )
app.get('/doctor/:id',function(req , res){
   const id = req.params.id
   doctorSchema.find({ id: id}, function (err, docs) { 
    if (err){ 
        console.log(err); 
        res.send (err)
    } 
    else{ 
        console.log("First function call : ", docs); 
        res.send (docs.length ? docs[0] : {})
    } 
    }); 
    
}
)

//add condition
app.post('/doctor/add/:id',function(req , res){
  const id = req.params.id
  var doctor = new doctorSchema(req.body)
  doctor.save(function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(result)
      res.send(result);
    }
  })
}
)

app.post('/doctor/update/:id', function (req, res) {
  const id = req.params.id
  doctorSchema.findOneAndUpdate({ id: id },
    req.body, null, function (err, docs) {
      if (err) {
        console.log(err)
        res.send(err)
      }
      else {
        console.log("Original Doc : ", docs);
        res.send(docs)
      }
    })
}
)

app.get('/doctor/delete/:id', function (req, res) {
  const id = req.params.id
  doctorSchema.deleteOne({ id: id }).then(function () {
    console.log("Data deleted"); // Success 
    res.send(true)
  }).catch(function (error) {
    console.log(error); // Failure 
    res.send(error)
  });
  
}
)

 app.get('/nurse',function(req , res){
  nurseSchema.find({}, function (err, docs) { 
    if (err){ 
        console.log(err); 
        res.send (err)
    } 
    else{ 
        console.log("First function call : ", docs); 
        res.send (docs)
    } 
    });
 }
 )

 app.get('/nurse/:id',function(req , res){
   const id = req.params.id
   nurseSchema.find({ id: id }, function (err, docs) {
     if (err) {
       console.log(err);
       res.send(err)
     }
     else {
       console.log("First function call : ", docs);
       res.send(docs.length ? docs[0] : {})
     }
   });
 }
 )

app.post('/nurse/add/:id', function (req, res) {
  const id = req.params.id
  var nurse = new nurseSchema(req.body)
  nurse.save(function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(result)
      res.send(result);
    }
  })
}
)

  app.post('/nurse/update/:id',function(req , res){
    const id = req.params.id
    nurseSchema.findOneAndUpdate({ id: id },
      req.body, null, function (err, docs) {
        if (err) {
          console.log(err)
          res.send(err)
        }
        else {
          console.log("Original Doc : ", docs);
          res.send(docs)
        }
      })
  }
  )
 
  app.get('/nurse/delete/:id',function(req , res){
    const id = req.params.id
    nurseSchema.deleteOne({ id: id }).then(function () {
      console.log("Data deleted"); // Success 
      res.send(true)
    }).catch(function (error) {
      console.log(error); // Failure 
      res.send(error)
    });
  }
  )

  app.get('/patient',function(req , res){
    patientSchema.find({}, function (err, docs) { 
      if (err){ 
          console.log(err); 
          res.send (err)
      } 
      else{ 
          console.log("First function call : ", docs); 
          res.send (docs)
      } 
      });
 }
 )

  app.get('/patient/:id',function(req , res){
    const id = req.params.id
   patientSchema.find({ id: id }, function (err, docs) {
     if (err) {
       console.log(err);
       res.send(err)
     }
     else {
       console.log("First function call : ", docs);
       res.send(docs.length ? docs[0] : {})
     }
   });
 }
 )
 
 app.post('/patient/add/:id',function(req , res){
  const id = req.params.id
  var patient = new patientSchema(req.body)
  patient.save(function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(result)
      res.send(result);
    }
  })
  }
  )
 
  app.post('/patient/update/:id',function(req , res){
    const id = req.params.id
    patientSchema.findOneAndUpdate({ id: id },
      req.body, null, function (err, docs) {
        if (err) {
          console.log(err)
          res.send(err)
        }
        else {
          console.log("Original Doc : ", docs);
          res.send(docs)
        }
      })
  }
  )
 
  app.get('/patient/delete/:id',function(req , res){
    const id = req.params.id
    patientSchema.deleteOne({ id: id }).then(function () {
      console.log("Data deleted"); // Success 
      res.send(true)
    }).catch(function (error) {
      console.log(error); // Failure 
      res.send(error)
    });
  }
  )

app.post('/reports', function (req, res) {
  var filter = {
    ...req.body.admit && {date: req.body.admit},
    ...req.body.homeQuarantine && {homeQuarantine: req.body.homeQuarantine},
    ...req.body.deceased && {deceased: req.body.deceased},
    $or: [
      { covidTesting: req.body.positive },
      { covidTesting: !req.body.negative }
    ]
  }
  console.log('filter',filter);
  patientSchema.find(filter, function (err, docs) {
    if (err) {
      console.log(err);
      res.send(err)
    }
    else {
      // console.log("First function call : ", docs);
      res.send(docs)
    }
  });
}
)

app.listen(9000, function(req,res){
    console.log('Running...')
});