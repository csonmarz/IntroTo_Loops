var sum
var val

sum =0
val = window.prompt("2,4")

while (val>-1){
   sum= sum+val
   val= window.prompt("1,-1")
}
   
console.log(sum)