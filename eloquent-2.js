// this is where I will put my working code

//Looping a triangle

let result = "";
for (let i = 0; i < 7; i++) {
  console.log(result = result + "#")
}

//FizzBuzz

for (let i = 1; i <= 100; i++) {
    let straight = "";
    let flush = "";
    let fullHouse = "" ;
    if (i %3 == 0)  {
      straight ="Fizz";
    } if (i %5 == 0) {
      flush ="Buzz";
    } if (i %3 == 0 && i %5 == 0) {
      fullHouse = straight + flush;
    }
      
    console.log(fullHouse ||flush ||straight||i);
  }
    
    
    

// Chess Board

let size = 10;
let chess = "";
for (let i = 0; i < size; i++)  {
  for (let x = 0; x < size; x++)  {
    if ((i + x) % 2 == 0) {
      chess += " ";
    } else {
      chess += "#";
    }
  }
  chess += "\n";
}
console.log(chess);
            