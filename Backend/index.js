const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
console.log('working');

app.get('/doctor',function(req , res){
    const ELEMENT_DATA = [
        {address: "21, 3rd cross",
        appointmentDate: "Fri Feb 26 2021 ",
        dName: "Rajan",
        dob: "Tue Jul 12 1983  ",
        experience: "5 Years",
        gender: "Male",
        id: "2",
        mailId: "Rajan24@gmail.com",
        number: "9876213422",
        qualification: "MBBS",
        specialist: "Neuro"},
        {address: "21, 3rd cross",
        appointmentDate: "Fri Feb 26 2021 ",
        dName: "Rajan",
        dob: "Tue Jul 12 1983  ",
        experience: "5 Years",
        gender: "Male",
        id: "2",
        mailId: "Rajan24@gmail.com",
        number: "9876213422",
        qualification: "MBBS",
        specialist: "Neuro"},
        {address: "21, 3rd cross",
        appointmentDate: "Fri Feb 26 2021 ",
        dName: "Rajan",
        dob: "Tue Jul 12 1983  ",
        experience: "5 Years",
        gender: "Male",
        id: "2",
        mailId: "Rajan24@gmail.com",
        number: "9876213422",
        qualification: "MBBS",
        specialist: "Neuro"},
      ];
      

     res.send (ELEMENT_DATA)
 }
 )
app.get('/doctor/:id',function(req , res){
   const id = req.params.id
   const doctor = {address: "21, 3rd cross",
   appointmentDate: "Fri Feb 26 2021 ",
   dName: "Rajan",
   dob: "Tue Jul 12 1983  ",
   experience: "5 Years",
   gender: "Male",
   id: "2",
   mailId: "Rajan24@gmail.com",
   number: "9876213422",
   qualification: "MBBS",
   specialist: "Neuro"}
    res.send (doctor)
}
)

app.get('/doctor/add/:id',function(req , res){
    const id = req.params.id
     res.send ("the doctor added ..." + id)
 }
 )

 app.get('/doctor/update/:id',function(req , res){
    const id = req.params.id
     res.send ("the doctor updated ..." + id)
 }
 )

 app.get('/doctor/delete/:id',function(req , res){
    const id = req.params.id
     res.send ("the doctor deleted ..." + id)
 }
 )

 app.get('/nurse',function(req , res){
    const ELEMENT_DATA = [
        {id: "3",
        nName: "Varsha",
        dob: "14-04-1992",
        gender: "female",
        qualification: "B.Sc_Nursing",
        experience: "6 Years",
        appointmentDate: "02-03-2021",
        address: "4, Murugan Kovil St.,Kottar",
        number: "8440034190",
        mailId: "varsha14@gmail.com"},
        {id: "3",
        nnNnName: "Varsha",
        dob: "14-04-1992",
        gender: "female",
        qualification: "B.Sc_Nursing",
        experience: "6 Years",
        appointmentDate: "02-03-2021",
        address: "4, Murugan Kovil St.,Kottar",
        number: "8440034190",
        mailId: "varsha14@gmail.com"}
            ];
      

     res.send (ELEMENT_DATA)
 }
 )

 app.get('/nurse/:id',function(req , res){
    const id = req.params.id
    const nurse = {id: "3",
    nName: "Varsha",
    dob: "14-04-1992",
    gender: "female",
    qualification: "B.Sc_Nursing",
    experience: "6 Years",
    appointmentDate: "02-03-2021",
    address: "4, Murugan Kovil St.,Kottar",
    number: "8440034190",
    mailId: "varsha14@gmail.com"}
     res.send (nurse)
 }
 )
 
 app.get('/nurse/add/:id',function(req , res){
     const id = req.params.id
      res.send ("the nurse added ..." + id)
  }
  )
 
  app.get('/nurse/update/:id',function(req , res){
     const id = req.params.id
      res.send ("the nurse updated ..." + id)
  }
  )
 
  app.get('/nurse/delete/:id',function(req , res){
     const id = req.params.id
      res.send ("the nurse deleted ..." + id)
  }
  )

  app.get('/patient',function(req , res){
    const ELEMENT_DATA = [
        {address: "35, 4th Cross St.",
      bGroup: "A-",
      contactNo: "9842555768",
      covidTesting: "positive",
      date: "Fri Feb 19 2021",
      dob: "Thu Jun 24 1982", 
      fName: "Muthu",
      gender: "male",
      hospitalName: "Ganga Hospital",
      id: "25",
      pName: "Siva",
      wardNo: "3"},
      {address: "35, 4th Cross St.",
      bGroup: "A-",
      contactNo: "9842555768",
      covidTesting: "positive",
      date: "Fri Feb 19 2021",
      dob: "Thu Jun 24 1982", 
      fName: "Muthu",
      gender: "male",
      hospitalName: "Ganga Hospital",
      id: "25",
      pName: "Siva",
      wardNo: "3"},
      {address: "35, 4th Cross St.",
      bGroup: "A-",
      contactNo: "9842555768",
      covidTesting: "positive",
      date: "Fri Feb 19 2021",
      dob: "Thu Jun 24 1982", 
      fName: "Muthu",
      gender: "male",
      hospitalName: "Ganga Hospital",
      id: "25",
      pName: "Siva",
      wardNo: "3"}
      ];
      

     res.send (ELEMENT_DATA)
 }
 )

  app.get('/patient/:id',function(req , res){
    const id = req.params.id
    const patient = {address: "35, 4th Cross St.",
    bGroup: "A-",
    contactNo: "9842555768",
    covidTesting: "positive",
    date: "Fri Feb 19 2021",
    dob: "Thu Jun 24 1982", 
    fName: "Muthu",
    gender: "male",
    hospitalName: "Ganga Hospital",
    id: "25",
    pName: "Siva",
    wardNo: "3"}
     res.send (patient)
 }
 )
 
 app.get('/patient/add/:id',function(req , res){
     const id = req.params.id
      res.send ("the patient added ..." + id)
  }
  )
 
  app.get('/patient/update/:id',function(req , res){
     const id = req.params.id
      res.send ("the patient updated ..." + id)
  }
  )
 
  app.get('/patient/delete/:id',function(req , res){
     const id = req.params.id
      res.send ("the patient deleted ..." + id)
  }
  )

app.listen(9000, function(req,res){
    console.log('Running...')
});