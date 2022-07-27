var numA
var numB

numA = window.prompt("16")
numB = window.prompt("40")

//Euclid's algorithim
while (numA!= numB){
   if (numB > numA){
    numB = numB - numA
   }
      
   else {

   }
      numA = numA - numB
 
console.log(" GCD is: ")
console.log(numA)
}