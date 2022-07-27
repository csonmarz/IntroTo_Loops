var sum
var num
var val
var avg

sum = 0
num = 0
val = window.prompt("2,4")

while (val>-1){
   sum = sum + val
   num = num + 1
   val= window.prompt("9,-1")
}
   
avg = sum/num
console.log(avg)