
var user={
    name:"Vasya",
    age:25
};

var clone={};
for(var key in user){
    clone[key]=user[key];
}

console.log(clone.name);

var time = {
    year: 2345,
    month: 11,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
  }
  
  console.log(time); // (*)
  time.microsecond++; // (**)
  
  console.log(time);
  time.microsecond++;
  
  console.log(time);
  time.microsecond++;