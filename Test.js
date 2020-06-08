/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(age);
job = 'Teacher';
console.log(job);
var firstName = 'John';
var age = 28;

// Type coercion

console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//console.log(firstName)

var firstName = 'John';
var lastName='Kurian';
console.log(firstName+' '+lastName)
var born = 1976;
var current = 2020;
var age=current-born;
var given=40;
if (age==given){
    console.log(true);
}
else{
    console.log(false);
}
console.log(age);

var Mark_mass=prompt("Enter Marks mass in Kg");
var Mark_height=prompt("Enter Marks height in meter");

var John_mass=prompt("Enter John mass in Kg");
var John_height=prompt("Enter John Height in meter");

var Mark_BMI=Mark_mass/(Mark_height*Mark_height);
var John_BMI=John_mass/(John_height*John_height);

if(Mark_BMI>John_BMI){
    console.log("Mark's BMI higher than John's "+Mark_BMI);
}
else{
    console.log("John's BMI higher than Marks's "+John_BMI)
}
*/
var tipCal=function(bill){
    if(bill<50){
        return bill*0.2;
    }
    else if(bill<200){
        return bill*0.15;
    }
    else{
        return bill*0.1
    }
}

var bill=[124,48,268];
var tip=[tipCal(bill[0]),tipCal(bill[1]),tipCal(bill[2])];
console.log(tip);
var total=[bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]]
console.log(total);

