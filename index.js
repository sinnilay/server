const express = require('express')
const cors = require('cors')
const xlsx = require('xlsx');
const app = express();
const workbook = xlsx.readFile('new.xlsx');
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
const studentErno = '0223CS211029';

// Find student by name
const student = data.find(student => student.Rollno === studentErno);

if (!student) {
    console.log("Student not found.");
} else {
    // console.log(data);
    // console.log(`Semester: ${student.Sem}`);
    // console.log(`CS601: ${student.CS601}`);
    // console.log(`CS601: ${student.CS602}`);
    // console.log(`CS601: ${student.CS603}`);
    // console.log(`CS601: ${student.CS604}`);
    // console.log(`VIEW PAPPER: ${student.ML}`);
}
// console.log(data);
app.use(cors());
app.get('/', (req,res)=>{
   res.json({
    message:"WELCOME TO THE STUD DATA",
    SUCESS:"true"
   })    
  })
app.get('/apifetchdata', (req,res)=>{

  setTimeout(()=>res.send(data),3000)
    
})

app.listen(4200,()=>{
    console.log("SERVER IS UP U CAN ACESS THE DATA");
})
