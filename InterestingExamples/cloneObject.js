
var user={
    name:"Vasya",
    age:25
};

var clone={};
for(var key in user){
    clone[key]=user[key];
}

console.log(clone.name);