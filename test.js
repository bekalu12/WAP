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