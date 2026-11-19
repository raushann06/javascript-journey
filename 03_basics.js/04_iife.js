//Immediately Invoked Function Expressions
//global scope ke pollution se problem hoti h to usi pollution ko hatane ke liye iife ka use krte h 


(function coffee(){
    //Named IIFE
    console.log(`DB Connected`);

})();

( (name) => {
    //Unnamed IIFE
    console.log(`DB connected two ${name}`);
})(`Raushan`);