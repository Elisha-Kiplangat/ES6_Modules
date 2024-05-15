// Async : makes a function to return a promise
// Await : makes async function to wait for a promise

const application = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        const accept = true;

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

    async function response(){
    const applicationResult = await application();
        console.log(applicationResult);
    
    const assessmentResult = await assessment();
        console.log(assessmentResult);

    const interviewResult = await interview();
        console.log(interviewResult);
        console.log("Thanks for your time");

}

response();


