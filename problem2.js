// Problem 2 : Given a character in lower case print the upper case character
let char = "h" ;
let  capital = ["A","B","C","D","E","F","G","H","K","L","M","N","O","OP","Q","R","S","T","U","V","W","X","Y","Z"];

let small = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

for(let i = 0 ; i<=small.length-1 ; i++){
 if(char==small[i]){
   char=capital[i];
   break;
   
 }
 
}
 console.log(char)