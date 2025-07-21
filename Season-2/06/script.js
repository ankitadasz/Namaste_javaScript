"use strict"
console.log(this);
function x(){
    console.log(this);
}
x();
window.x();

 //this inside a object
 const student={
    name:"Ankita",
    a:10,
    printName:function(){
        console.log(this.name);
        
    }
 }
 student.printName();
 
 const student2={
    name:"deepika",
 }
 student.printName.call(student2);


 //this inside an arrow function

 const obj={
    a:10,
    x:()=>{
        console.log(this);
        
    }
 }
 obj.x()
  const obj2={
    a:10,
    x:()=>{
        console.log(this);
        
    }
 }
 obj.x()

 ////this inside dom
 