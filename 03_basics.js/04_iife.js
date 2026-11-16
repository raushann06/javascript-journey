//Immediately Invoked Function Expressions

(function coffee(){
    //Named IIFE
    console.log(`DB Connected`);

})();

( (name) => {
    //Unnamed IIFE
    console.log(`DB connected two ${name}`);
})(`Raushan`);