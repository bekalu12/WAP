var x= 5;
function foo(){
  console.log(this.x);
}
foo();
const obj ={x:10,bar:function() { console.log(this.x);}};
obj.bar();

const bar2 = obj.bar;
bar2();

obj.foo = foo;
obj.foo();
// function sum(a,b){
//   console.log(a+b);
// }
// sum();
function sum( x,y , ...more){
var total = x + y;
//if(more.length > 0 ){
for(let i=0 ; i <more.length ; i ++) {
total += more[i ];
}
//}
console.log(total);
}
sum(4,3 ); // 8
sum(4, 4, 4 ,9);


var thing = { a: 97 , ' b': 98 , ' c': 99,j:"p"};
for (let k in thing ){
console.log(k +', '+ thing[k]);
}
var things=[2,4,5,6,9]
for (let k of things.entries()) {

console.log( k);
}
console.log(4/"2"*"2.5");
function Emp(name,age){
  this.name=name;
  this.age=age;
  this.city="city";
}
const emp1=new Emp("bekalu",45);
emp1.city="fhd";
console.log(emp1);

var person={
    first:'diobe',
    last:'de',
    greet:function(){ return 'hi'+ this.first ; }//use this in functions
};
console.log(person.first);
var jim= Object.create( person);
console.log(jim);
console.log(person);
console.log(jim.greet());
var c=Object.keys(jim);
for(var key in jim){
  console.log(key);
}
console.log(c);
console.log(jim['first']); // Default Inheritance
console.log(jim);
console.log(jim.hasOwnProperty('first')); // false
jim.first='jim';
console.log(jim.hasOwnProperty ('first')); // true
console.log(jim); // {first: 'Jim'} No last & greet()
console.log(jim.greet() ); // Hi Jim]
delete jim.first;
console.log(jim);
