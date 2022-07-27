var celciusValue
var fahrenheitValue
var userChoice


userChoice = window.prompt("1,1,1,1")
celciusValue = 0.0

while (userChoice == 1){
   fahrenheitValue= (celciusValue * 9.0/5.0) + 32.0
   console.log(celciusValue)
   console.log(" C is ")
   console.log(fahrenheitValue)
   console.log("F\n")
   celciusValue = celciusValue + 5
   userChoice = window.prompt("1,1,1,1,0")
}
   
   
console.log(" Goodbye. ")