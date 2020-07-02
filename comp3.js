/* 
13-4=9  1
9-4=5   1
5-4=1   1
1-4=0   0   

*/
function division(dividendo,divisor){
//caso Base
if(divisor>dividendo){
return 0
}

return 1 + division(dividendo-divisor,divisor)
}