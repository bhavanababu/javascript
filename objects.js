// {}
//{property:value}


var student={
    regno:"oztabca011",
    ename:"bhavana",
    course:"BCA",


}
console.log(student.ename);
console.log(student.regno);

student["marks"]=50     //add
console.log(student);

student.marks=44        //update
console.log(student);

console.log("gender" in student);   //gender