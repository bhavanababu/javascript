var text="hello hai hello hai hey";                            
var words=text.split(" ")               
var wc={}

for(let w of words)
    if(w in wc){
        wc[w]+=1
  
}
else{
    wc[w]=1
}
console.log(wc);

// word count
//["hello","hai","hello","hai"]
//wc={}
