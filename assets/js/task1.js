//Объект
/*
let user1 = {
    name: "Mobutu Se seseko",
    age: 66,
    isMale: true,
    email:"none",
    status: "dead",
    job: "Dictator of Zaire",
    languages: ['kg', 'eng', 'fr']};

//delete user.email;
console.log(user1.name);
console.log(user1['name']);

user1.name = "Mobuto";
console.log(user1);

user1.address = 'Rabat,Morocco';
console.log(user1);
*/

let user2 = {
    fname: 'firstname2',
    sname: 'surname2',
    age: 20,
    isMale: true,
    email: 'user2@gmail.com',
    fullname: function(){
        return this.fname + '' + this.sname;
    },
};

let user3 = user2;

let userCard = {
    userName: 'John Smith',
    cardNumber: '1849483443545',
    cvv: 123,
    IBAN: 'UA93843984938989898594385894',
    dataCardM: '01/20',
};

let cat = {
    name: 'Barsik',
    age: 2,
    countLegs: 4,
    countHead: 1,
};
console.log(cat.name);