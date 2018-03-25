// this is where I will put my working code

//Looping a triangle

let result = "";                                   // declare empty variable, to hold results of the for loop.
for (let i = 0; i < 7; i++) {                      // for loop to iterate 8 times
  console.log(result = result + "#")               // prints loop results and adds a # each time
}

//FizzBuzz

for (let i = 1; i <= 100; i++) {                   // loop to iterate 100 times
    let straight = "";                             // declare empty variable to be assigned "Fizz" for all divisible by 3
    let flush = "";                                // declare empty variable to be assigned "Buzz" for all divisible by 5
    let fullHouse = "" ;                           // declare empty variable to be assigned straight+flush for all divisible by 3+5
    if (i %3 == 0)  {                              // if the loops "i" variable is divisible by 3
      straight ="Fizz";                            // This variable gets the value Fizz
    } if (i %5 == 0) {                             // if the loops "i" variable is divisible by 3
      flush ="Buzz";                               // This variable gets the value Buzz
    } if (i %3 == 0 && i %5 == 0) {                // if the loops "i" variable is divisible by 3+5
      fullHouse = straight + flush;                // This variable gets the value of both straight+flush
    }
      
    console.log(fullHouse ||flush ||straight||i);  // prints 1-100  with "Fizz"for all / 3, "Buzz" for all / 5 and "FizzBuzz" for all / by both
  }
    
    
    

// Chess Board

let size = 8;                        // declares variable "size" with value of "10"
let chess = "";                      // declares variable "chess" but with no value
for (let i = 0; i < size; i++)  {    // loops by value of variable "size"                                             (second hand on clock)
  for (let x = 0; x < size; x++)  {  // loops by value of variable "size" and iterates once every full outer loop on  (minute hand on clock)
    if ((i + x) % 2 == 0) {          // if loop "i" is even
      chess += " ";                  // variable "chess" gets a space
    } else {                         // if loop "i" is not even 
      chess += "#";                  // variable "chess" gets a #
    }
  }
  chess += "\n";                     // if loop "x" reaches value of "size", variable "chess" gets a new line
}
console.log(chess);                  // prints value of chess (as an equally wide/tall chequers board)
            