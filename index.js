let num=Math.random();
num=Number.parseInt(num*100);
let guess;
for(let i=1;i<=2;i++)
  {
    guess=prompt("Guess the number");
guess=Number.parseInt(guess);
  
if(guess==num)
{
console.log ("You guessed the right number");
  
}
else if(guess>num)
{
console.log ("You guessed the number greater than the random number");

}
else
{
console.log ("You guessed a smaller number");

}
  }

console.log ("No more guesses");
    console.log("The number was " +num);
