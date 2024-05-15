// callbacks function is a function that is passed to another function as an argument


const details = () => {
    function myFunction5(name, age, address, CallBack){
        console.log(`Hello ${name}, you are ${age} years old from ${address}`)
    CallBack();
}


const myfunction1 = () =>{
        console.log("You are a Kenyan")
    }

myFunction5(`Programmer`, 20 , `300100 Nairobi` ,myfunction1);

myFunction5(`Bro`, 18 , `120398 Nairobi` ,myfunction1);

}
details();