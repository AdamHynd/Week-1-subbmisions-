// Activity 5
let num = 54

if (num % 3 ==0 && num % 5 ==0)  {
    console.log ("Fizzbuzz")
}
else if (num % 3 ==0){
    console.log("Fizz")}

else if (num % 5 ==0){
    console.log("Buzz")
}
else{
    console.log ("number cannot be divided ")
}

// Activity 5
for (let i=0; i<6; i++) {
 num = Math.ceil(Math.random()*30)
    
    
    
    
    if (i % 7 ==0){
        console.log(`${i} is divisible by 7`)

    } else{

        console.log(`${i} is not divisible by 7`)

    }
}

// Activity 3
for (let i =9; i >= 0; i--) {
    console.log(i)
}

// Activity 2
let dog = {
    name: "Tilly",
    Type: "Staffie",
    Age: 13,
    colour: "Brindle",
    eating(){
        return `${this.name} is eating `
    },
    drinking(){
        return `${this.name} is drinking `
    }

        }
    


console.log(dog.drinking())
console.log(dog.eating())

// Activity 3
password = ("Pledge")
if(password.length <= 5){
    console.log("Your password is to short")
}
else if (password.length == 6){
    console.log("your password is long enough")
}

// Activity 4
let num_1 = 27
if (num_1 % 3 ==0 || num_1 % 5 == 0){
    console.log(`${num_1} can be divised by 3 or 5`)
}else{
    console.log(`${num_1} cannot be divided `)
}

for (let i = 0; i < 6; i++) {

    let num = 0
    num = Math.ceil(Math.random() * 50)
  
  console.log(num) 
}




// declaration();

// function declaration(){
//     console.log(`Declaration`)
// }