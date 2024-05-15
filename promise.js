// promise an asymchronous action y=that may complete at the same point in the future and produce a value
// object that manage asynchronous operations
// states => pending, resolve, reject

const promise = new Promise((resolve) => {
    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File not loaded")
    }
});

promise.then((value) => {
    console.log(value)
})


// promise chaining

const application = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const accept = false;

        if (accept){
            resolve("Application accepted")
        }
        else{
            reject("Applicatioln NOT successful")
        }

    }, 1500)
    })
}

const assessment = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            const accept = true;

            if (accept){
                resolve("You passed the assessment");
            }else{
               reject("You DID NOT pass the assessment") ;
            }
        }, 1500);

    });
}

const interview = () => {
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
   
        
        const accept = true;

        if (accept){
            resolve("You passed!");
        }else {
            reject("You failed");
        }
    }, 1500);
    });
}

application() .then((result) => {
    console.log(result);
    return(assessment());
})
.then((result) => {
    console.log(result);
    return(interview());
})
.then((result) => {
    console.log(result);
    console.log("Thanks for your time");
})

.catch((error) => {
    console.log(error)
});