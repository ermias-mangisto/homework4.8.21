// var numOne=Number(prompt("number"));
// var numTWO=Number(prompt("number"));
// console.log(numOne,numTWO)
// if(numOne+numTWO>=13){
//     console.log("bar-mitzva");
// }
// else if(numOne+numTWO==12){
//     console.log("bat-mitzva");
// }
// else{
//     console.log("kid");
// }
// ....................................

// var counter=0;
// while(counter<100){
//     console.log(100);
//     counter++
// }

// ............................................


// var num=Number(prompt("number"));
// var counter=0;
// while(counter<num){
//     console.log("no");
//     counter++
// }

// .........................................

// for(var i=0;i<1000;i++){
//     console.log("javascript is not JAVA")
// }

// ..................................

// var firstName=prompt("name");
// var num=Number(prompt("number"));
// for(var i=0;i<num;i++){
//     console.log(`${firstName}`);
// }

// ..............................................

// var fullName=prompt("name");
// var age=Number(prompt("age"));
// var email=prompt("email");
// var num=Number(prompt("number"))
// console.log(`${fullName} ${age} ${email}`);
// if(age>18){
// for(var i=0;i<num;i++){
//     console.log(`${fullName} ${age} ${email}`);
// }
// }

// ................................................

// var num=Number(prompt("number"))
// for(var i=0;i<num;i++){
//     var fullName=prompt("name")
//     if(fullName=="ermi"){
//         console.log(`hi boss ${fullName}`)
//     }
//     else{
//         console.log("no entry");
//     }
// }

// .......................................

// var num=Number(prompt("number"));
// var numOne=Number(prompt("number"));
// for(var i=0;i<num;i++){
//     for(var j=0;j<numOne;j++){
//         console.log(`${i}*${j}=${j*i}`);
//     }
// }

// ......................................

// var numbers=[1,2,3,4,5];
// console.log(numbers);

// ...................................................

// var names=["avi","matan","lior","dan","ron"];
// for(var i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// .......................................................


// var numbers=[12,34,56,78,90,23,45,67];
// for(var i=0;i<numbers.length;i++){
// if(numbers[i]%2==0){
//     console.log(numbers[i])
// }
// }

// ................................................................

// var numbers=[]
// for(var i=0;i<5;i++){
//     var userInput=Number(prompt("number"))
//     numbers[i]=userInput
// }
// console.log(numbers);

// ...................................................

// var numbers=[]
// for(var i=0;i<7;i++){
//     var userInput=Number(prompt("number"))
//     numbers[i]=userInput
//     if(numbers[i]%2 !=0){
//         console.log(numbers[i])
//     }
// }

// .............................................................

// var stuff=["avi",23,"god",45,23,"war"]
// for(var i=0;i<stuff.length;i++){
//     if(stuff[i]*0!=0){
//         stuff[i]="not a number"
//     }
// }
// console.log(stuff);

// ...............................................................

// var numbers=[]
// var i=0
// while( i<10) {
//    var userNumber=Number(prompt("put an even number"))
//     if(userNumber%2==0){
//         numbers[i]=userNumber
//         i++
//     }
   

// }
// console.log(numbers);

// ................................................................

// var height=Number(prompt("height"))
// var width=Number(prompt("width"))
// console.log(height*2 + width*2)
// console.log(height*width)
// .............................................


// var num=Number(prompt("number"));
// var numOne=Number(prompt("number"));
// var numTwo=Number(prompt("number"));
// if(num > numOne && numOne > numTwo){
//     console.log("downward order");
// }
// else if(num < numOne && numOne < numTwo){
//     console.log("upward order");
// }
// else{
//     console.log("no order");
// }

// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

var num = Number(prompt("enter a number"));
while(num>0){
var mod=num%10
num=(num/10)-(mod/10)
console.log(mod)

}