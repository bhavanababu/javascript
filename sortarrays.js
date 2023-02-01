// arrays
// define []
// can store diiferent type of data
// size dyamic
// duplicates allowed


var scores=[1023,55,355,6,55]
//           0   1  2  3  4                
// for(let i=0;i<5;i++) {i=0,1,2,3,4
// console.log(score[i]);
// })

// * for(let score of scores){
//     console.log(score);
// }

scores.sort((n1,n2)=>n1<n2?-1:1)  //ascending
//scores.sort((n1,n2)=>n1-n2) n1<n2                                // client side - window object
console.log(scores);                                               // server side - global object

scores.sort((n1,n2)=>n1>n2?-1:1) //descending
//scores.sort((n1,n2)=>n2-n1) 
console.log(scores);




