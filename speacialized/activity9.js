var currValue
var valuesSum
var numValues
var averageValue

valuesSum = 0
numValues = 0
currValue = window.prompt("10,1,6")

//Get values until 0 (or less)
while  (currValue>0){
   valuesSum = valuesSum + currValue
   numValues = numValues + 1
   currValue = window.prompt("3,0")
}
   
averageValue = (1.0*valuesSum)/numValues
console.log("Average:")
console.log(averageValue)