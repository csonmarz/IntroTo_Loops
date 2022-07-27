var yearsPerGen
var userYear
var curYear
var numAncestors

curYear = 2020
numAncestors = 2
userYear = window.prompt("1600")

while (curYear >= userYear){
   console.log(curYear)
   console.log(":")
   console.log(" ancestors\n to output")
   //Each ancestor had two parents 
   numAncestors = 2 * numAncestors
   //Go back 1 generation
   curYear = curYear - 20
}