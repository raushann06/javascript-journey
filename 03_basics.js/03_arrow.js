const user = {
    username: "Raushan",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Raj";
user.welcomeMessage();

//global object in browser is window
