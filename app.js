// var num1 = 300;
// var num2 = 400;
// // alert(num1 + num2)
// // console.log(num1 + num2)
// var result =(num1 + num2 *100 / 500)
// console.log(result)
// var firstName = "Faiza";
// var lastName = "Naqi Uddin";
// var result = firstName  + " " + lastName;
// console.log(result);
//  document.write("<h1>" +  "It is my first Js Class" + "</h1>");
//  var myName = "Hello World";
//  document.write(myName);
// var _abc = "Syeda Faiza Naqi Uddin"; //_ and $ is a legal special character
// document.write(_abc)


// var num1 = "y64";
// var num2 = 6;
// var result1 = num1 + num2;
// var result2 = num1 - num2;
// var result3 = num1 * num2;
// var result4 = num1 / num2;
// var result5 = num1 % num2;
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
//  var firstNum = +prompt("Enter your first Number");
// //  var secondNum = +prompt("Enter your second Number");
// //  var add = firstNum + secondNum;
// //  var sub = firstNum - secondNum;
// //  var mul = firstNum * secondNum;
// //  var div = firstNum / secondNum;
// //  var mod = firstNum % secondNum;
// //   document.write(
// //     "<table border = 1>"+
// //     "<tr>"+
// //     "<th>"+ "Addition"+"</th>"+
// //     "<tr>"+"<td>"+ add+"</td>"
// //     +"</tr>"+"</tr>"+
// //     "<tr>"+
// //     "<th>"+ "Subtraction"+"</th>"+
// //     "<tr>"+"<td>"+ sub+"</td>"
// //     +"</tr>"+"</tr>"+
// //     "<tr>"+
// //     "<th>"+ "Multiplication"+"</th>"+
// //     "<tr>"+"<td>"+ mul+"</td>"
// //     +"</tr>"+"</tr>"+
// //     "<tr>"+
// //     "<th>"+ "Division"+"</th>"+
// //     "<tr>"+"<td>"+ div+"</td>"
// //     +"</tr>"+"</tr>"+
// //     "<tr>"+
// //     "<th>"+ "Modulo"+"</th>"+
// //     "<tr>"+"<td>"+ mod+"</td>"
// //     +"</tr>"+"</tr>"


// //     + "</table>"
// //   )
//     //  num++ // post increment
//     //  ++num //pre increment
//     //  num-- //post decrement
//     // --num // pre decrement
    
    
    
//     // var a = 2;
//     // var b = 3;
//     // var result = a++
//     // document.write(result)



  
//     // var a = 2;
//     // var b = 3;
//     // var result = a++ + a + ++b
//     // document.write(result)

// // var num1 = +prompt("enter your number");
//     // if(5 == "5"){
//     //     document.write("Yes its True")
//     // }
//     // else{document.write("False")}
    
//     //  var email = "admin";
//     //  var password = "admin";
//     //  if(email == password){
//     //     document.write("login succesful")
//     //  }
//     //  else{document.write("invalid password")}
//     // var email = prompt("Enter your email");
//     // var password = prompt("Enter your password");
//     //   if(email == password){
//     //         document.write("login succesful")
//     //      }
//     //      else{document.write("invalid password")}

//     // var email = prompt("Enter your email");
//     // var password = prompt("Enter your password");
//     //   if(email == "Faiza" & password == "123456"){
//     //         document.write("login succesful")
//     //      }
//     //      else{document.write("invalid password")}

//     // var email = prompt("Enter your email");
//     // var password = prompt("Enter your password");
//     //   if(email == "Faiza" || password == "123456"){
//     //         document.write("login succesful")
//     //      }
//     //      else{document.write("invalid password")}


// var myName = prompt("Enter your Name");
// var num1 = +prompt("Enter your English Marks");
// var num2 = +prompt("Enter your Mathematics Marks");
// var num3 = +prompt("Enter your GK Marks");
// var num4 = +prompt("Enter your Chemistry Marks");
// var num5 = +prompt("Enter your Islamiat Marks");
// var total = num1 + num2 + num3 + num4 + num5;
// var per =  (total/500*100);
// var grade = "";
 
// if(per >= 80 && per < 101){
//    grade = "A+";
// }
// else if(per >=70 && per < 81){
//    grade = "A";
// }
// else if(per >=60 && per < 71){
//    grade = "B";
// }
// else if(per >=50 && per < 61){
//    grade = "C";
// }
// else if(per >=40 && per < 51){
//    grade = "D";
// }
// else if(per >= 101){
//    grade = "Invalid percentage";
// }
// else{
//    grade = "Fail";
// }

// document.write(
//    "<table border =1px > " +
//    "<tr>" + 
//    "<td>" + 
//    "<th>" + "Name" + "</th>"
//    + "</td>" +
//    "<td>" + 
//    "<th>" + "English" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Maths" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "GK" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Chemistry" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Islamiat" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Total" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Percentage" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + "Grade" + "</th>"
//    + "</td>"
//    + "</tr>"+
//    "<tr>" + 
//    "<td>" +
//    "<th>" + myName + "</th>"
//    + "</td>" +
//    "<td>" +
//    "<th>" + num1 + "</th>"
//    + "</td>"+
//    "<td>" +
//    "<th>" + num2 + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + num3 + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + num4 + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + num5 + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + total + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + per.toFixed(2) + "%" + "</th>"
//    + "</td>"+
//    "<td>" + 
//    "<th>" + grade + "</th>"
//    + "</td>"
//    + "</tr>"
//     + "</table>"
// )


// var arr = ["Faiza","Naqi","24"];
// document.write(arr[0] + " " + arr[2]);
// var arr = ["Faiza","Naqi","24","Mern Stack Developer"];
// arr.push("University of Karachi")
// arr.pop()
// arr.unshift("Parveen")
// arr.shift()
// arr.splice(2,1,"good")
// document.write(arr)




    






























































































