// nested if else
// guessing a number






let winingnumber = 13
let userguess = prompt("guess the number")
// for get a pop of guess a number in browser we use prompt("....")
if(userguess === winingnumber){
    console.log("your have guessed right number")
}
else{
    if(userguess< winingnumber)
    {
        console.log("too low !!!")
    }
    else{
        console.log("too high")
    }
}