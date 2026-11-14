//const instauser = new Object() // singleton object
const instauser = {}//non-singleton object

instauser.id = "raushann06";
instauser.name = "Raushan";
instauser.isLoggedIn = true;

//console.log(instauser);

const regularUser = {
    email: "raj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raushan",
            lastname: "Raj"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

//syntax const obj4 = Object.assign(target, source)
//console.log(target);

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
console.log(instauser);

console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));//key value pairs mein krke array aata h 

console.log(instauser.hasOwnProperty('isLoggedIn'));//check whether the property is present in the object or not
console.log(instauser.hasOwnProperty('isLogged'));
