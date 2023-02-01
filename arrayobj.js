// map()

//var arr=[10,9,3,2,4]
// var cube=arr.map(n=>n**2)
// console.log(cube);

  
// if num >5 map to num+1num <5 map to num-1

// var number=[4,12,5,6,9]   // 5> -1 , 5> +1
// var narray=number.map(n=>5?n+1:n-1)
// console.log(narray);


// var number=[6,3,8,1,9,4]
// var even=number.filter(n=>n%2==0)
// console.log(even);

// var number=[6,3,8,1,9,4]
// var odd=number.filter(n=>n%2!=0)
// console.log(odd);


var number=[42,25,81,35,90]
var maximum=number.reduce((n1,n2)=>n1>n2?n1:n2)       //maximum
console.log(maximum);

var number=[42,25,81,35,90]
var minimum=number.reduce((n1,n2)=>n1<n2?n1:n2)      //minimum
console.log(minimum);
