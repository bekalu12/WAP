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
for (let k of things) {

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
console.log("*************************")
function logger(f){
f();
}
console.log(1 );
setTimeout(function (){ console.log(2) ; }, 1000 );
logger(function (){console.log(3)});
setTimeout(function (){ console.log(4); }, 0 );
console.log(5 );

console.log("1***********************");
x = 1; 
var a = 5; 
var b = 10; 
var c = function(a, b, c) {//8,9,10
   
  console.log(x); //u
  console.log(a); //8
  var f = function(a, b, c) { //8,9,10
    b = a; //b=8
    console.log(b); //8
    b = c; //b=10
    var x = 5; 
  } 
  f(a,b,c); 
  console.log(b); //9
  var x = 11; 
} 
c(8,9,10); 
console.log(b); //10
console.log(x); //1

console.log("2**********************");

x = 1; 
var a = 5; 
var b = 10; 
var c = function(a1, b1, c1) {//8,9,10
  console.log(x); //u
  console.log(a1); //8
  //f(a1,b1,c1); //error
  var f = function(a2, b2, c2) { 
    b2 = a2; 
    console.log(b2); //
    b2 = c2; 
    var x = 5; 
  } 
  
  console.log(b1); 
  var x = 11; 
} 
c(8,9,10); 
console.log(b); 
console.log(x); 

console.log("3*****************");
x = 1; 
var a = 5;
var b = 11; 
var c = function(a, b, c) {//8,9,7
    console.log("x1:"+ x); //1
    console.log("a2: "+ a);//8
    var b=88;
    var f = function() { 
        b = a;//b=8
        console.log("b3: " + b); //
        b = c;
        var a = 3;//
    }
    f();
    console.log("b4: " + b);//
    x = 6; 
} 
c(8, 9, 7); 
console.log("b5: " + b); //
console.log("x6: "+ x);//
//******************** */
var d=function sum(a){
  let s=0;
  for(let i=0;i<a.length;i++){

    s=s+a[i];
    console.log(s);
  }
  for(let i=0;i<a.length;i++){
  if(s!==a[i]){ i++}
  else return true;}
}
d([5,-5,0]);
//********************* */
var b=[-1,-3,4,-5,2];
function absolute(b){
  return b.map(x=>(x<0)?(x*-1):x);
}
var y=absolute(b);
console.log(y);
//*************************** */
var str=["t","th","h_r","h-dd","hdj_rt","nsfhh_67","fdj"];
function filterbylength(str,y){
  return str.filter(a=>a.includes(y));
}
var c=filterbylength(str,"_");
console.log(c);
//********************** */
let i = 5;
 while(i>5){
    alert("Hello");
   }
let x = 5; 
let y = 2;
 let a = 7; 
let b = 3;
 function foo(a, b) {
let x = a + b;
 y = a - b;
 console.log(a+""+b+""+ x+""+ y);
 } 
 console.log(a+""+b+""+ x+""+ y);
 foo(4, 4); 
 console.log(a+""+b+""+ x+""+ y);
(function(){
var x=1;
var y=2;
function foo(){
  function foo1(){
    var y="y";
    console.log("value of x:"+x);
    console.log("value of x:"+y);
    var z=3;
    return function(){return z};
}
var f=foo1();
console.log("value of z:"+f());
var x=3;
console.log("value of y:"+y);
}
foo();
console.log("value of x:"+x);
});

