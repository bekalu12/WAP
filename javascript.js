
//alert("hello, world!");
// console.log(sum(1, 2));
// console.log(max3(1, 2,5));
// console.log(isvowel("r"));
// console.log(reverse("bekalu"));
// console.log(filterbylength(["bekalu","geg","dhrhrhs"],2));
// console.log(computesqure([1,2,3,4]));
// console.log(lengthmax(["sdasg","dfhhrr","err"]));
// console.log(multiply([1,2,3,4]));
// console.log(secondlargest([1,2,3,4,9,7,0]));
// fib(5,9,4);


 //document.getElementById("demo").innerHTML = sum(1, 2);
// document.getElementById("demo").innerHTML=max3(1,2,5);
// document.getElementById("demo").innerHTML=isvowel("r");
// document.getElementById("demo").innerHTML=reverse("bekalu");
// document.getElementById("demo").innerHTML=lengthmax(["sdasg","dfhhrr","err"]);
"use strict";
elem = document.getElementById("demo").innerHTML = test(); // Find an element 
var y;
function test(){
   y=7;
   var x = 5;
    return x+"" +y;
}


function sum(a, b) {
    return a + b;
}
function max(c,d){
    if(c>d){
        return c;
    }
    else{
        return d;
    }
}
function max3(a,b,c){
    //return (max(a,b)>c)?max(a,b):c;
    return max(max(a, b), c);
}
function isvowel(p){
    if(p=="a"||p=="e"||p=="i"||p=="o"||p=="u"){
        return true;
    }
        else{
             return false;
        }
}
function reverse(str){
    let s="";
    for(let i=str.length-1;i>=0;i--){
        s=s+str[i];
    }
    return s;
}
function lengthmax(str){
    let max=str[0].length;
    for( let i=0;i<str.length;i++){
        if(str[i].length>max)
        max=str[i].length;
    }
    return max;
}
function filterbylength(str,y){
   return str.filter(a=>a.length>y);
}
function computesqure(str){
    return str.map(a=>a*a).reduce((a,b)=>a+b);
}
function multiply(a){
    return a.reduce((a,b)=>a*b);
}
function secondlargest(a){
    let f=a[0];
    let s=a[0];
    for(let i=0;i<a.length;i++){
        if(s<a[i]){
            if(f<a[i]){
                s=f;
                f=a[i];
            }
            else
                s=a[i];
        }
        if (s==f && s!=a[i]) 
            s=a[i];
    }
    if(s!=f)
    return s;
}
function fib(x, y, n){
    console.log(x);
    console.log(y);
    n = n - 2;
    while(n > 0) {
        let temp = x + y;
        x = y;
        y = temp;
        console.log(y);
        n--;
    }
}

