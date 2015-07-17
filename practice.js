//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {name: "Dale",
  age: 55, }
alert(me.name)




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {band: "Bad Finger",
  food: "stea", person: "Gina", book: "The Eiger Sanction", movie: "The Princess Bride", holiday: "Christmas"}


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Corvette";
favoriteThings.brand = "Alienware";



//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = '50 Shades of Gray';





//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

var backPack = {};
var item = "firstPocket";
backPack.[item] = "chapstick";

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

backPack.color = "black";

//After you do the above, alert your entire backPack object.

alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);



//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

 var me = {name: "Dale", age: "55", height: "5 foot 8 inches", gender: "Male", married: "married", eyeColor: "Hazel", hairColor: "blonde" }
console.log(me);


//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

for(var key in me){
    alert(me[key])
}




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {stairwaytoheaven: "5:25", smokeOnTheWater: "3:25", iAmTheWalrus: "2:54", blueHawaii: "2:35", blueEyes: "4:54"}


//Now, loop through your album object alerting every song title individually.

for(var key in album){
    alert(key);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {alabama: 250000, arkansas: 150000, california: 550000, utah: 245000, nevada: 320000}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

for(var key in states){
    if(states[key] > 30000){
        alert(key);
    }
}



//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for(var key in user){
    if(!user[key]){
        delete user[key];
    }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Dale Bagley';
user.pwHash = 'asdlkfjwe';
user.username = 'dbagley23';



//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = 'Tyler S. McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';


//Now call the sayName method that's on the user object which will alert the users email

user.sayName();


//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {}


/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function(){
    alert("Hello");
}

methodCollection.logHello = function(){
    console.log('hello');
}
//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

var person = {};
    function makePerson(name, birthday, ssn){
        person.name = name;
        person.birthday = birthday;
        person.ssn = ssn;
        return person;
    }
makePerson("Dale Bagley", "8/3/1959", "555-555-5555");

//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

var cc = {};
function makeCard(name, number, zipCode, vCode){
    cc.name = name;
    cc.number = number;
    cc.zipCode = zipCode;
    cc.vCode = vCode;
    return cc;
}
makeCard("Dale Bagley", '355452455223', '80443', '2552');
  
//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/
var boundCard = {}
function bindCard(person, cc){
    boundCard.name = cc.name;
    boundCard.birthday = person.birthday;
    boundCard.ssn = person.ssn;
    boundCard.number = cc.number;
    boundCard.zipCode = cc.zipCode;
    boundCard.vCode = cc.vCode;
    return boundCard
}


var allUsers = {
    userId1: {
        name: 'bob',

    }
}

var allUsers = [
    {name: 'bob'},
    {name: 'sally'}

]


/* new problem to start class */
var makeArray = function(){
    var functions = [];
    for(var i = 0; i < 10; i++){
        functions.push(function(x){
            console.log(x);
        });
    }
    return functions;
}
var funcArr = makeArray();
console.log(funcArr);

function showArrayMembers(){
    for(i = 0; i < funcArr.length; i++){
        console.log(funcArr[i]);
    }
}

funcArr.forEach(function(x, i){
    x(i);
});

/* all that a callback function is is an argument that is passed into another function*/

var foo = function(x) {
    console.log(x);
}

var bar = function(cb) {
    cb("hello World");
}

bar(foo);

/* Callback function*/

var forEach = function(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
};

forEach([1, 2, 3], function(input){
    console.log(input);
});

/* another way to do it*/

var nums = [1, 2, 3];

var logger = function(input) {
    console.log(input);
};

forEach(nums, logger);

/* shows asynchronos */
console.log('hi');
setTimeout(function(){
    console.log('sup');
}, 500);

console.log('there');

http://www.underscorejs.org

