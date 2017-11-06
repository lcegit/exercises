// JS Exercises #1
var arr = []

arr = [1,2,3]

arr[1]

typeof(123/12)
= number

"things in quotes" # string
undefined  = it does not exist


myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

for (let i = 0; i < myArray.length; i++ ) {
  emptyArray.push(myArray[i]);
}

// JS Exercises #2
var person = {
  name: "Lisa",
  lastName: "Eriksson",
  details : {
    "favorite color": "green",
  }
}

person.name

// Function that returns first and last name

var inputName = ("Lisa") => {
  return "Lisa" + "Eriksson";
}

//
var inputName = ("Lis") => {
  name: "Lisa",
  lastName: "Eriksson",
  return name + ' ' + lastName;
}

// Function that returns first and last name

function Person(first, last) {  // create "constructor"
    this.first = first; // public variables -- reference current object
    this.last = last;

//    var privateFn = function(first, last){  // private function
//    }

    this.setName = function(first, last){ // public function
        this.first = first;
        this.last = last;
    }

}

Person.prototype.fullName = function() { // extend prototype
    return this.first + ' ' + this.last; // even at runtime!
}

lisa = new Person('Lisa', 'Eriksson');

lisa.fullName()

// JS # 3

// .this is a reference to the object itself, similar to .self in Ruby
