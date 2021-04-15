
function nbYear(p0, percent, aug, p) {
    let n=0;
    while(p0<p){
     
       p0+=p0*percent/100+aug;
       n++;
      
    }
  return n;
}
console.log(calcule(100,2 ,50,1200));

function repeatString(string, nbr) {
    var repeatedString = "";
    while (nbr > 0) {
      repeatedString += string;
      nbr--;
    }
    return repeatedString;
  }
  repeatString("abc", 3);
repeatStr = (n, s) => s.repeat(n);



const istringle= (a,b,c)=>{
    if(a>0 && b>0 && c>0)
    {
if (a<b+c && b<a+c && c<a+b){
    return true;}
    else {
return false;
    }
}
else{
    console.log("erreur");
}
    }
istringle(2,5,7);

const mask=(str)=>{
    let res="";
for (let i=0;i<str.lenght-4;i++){
 res += str[i].replace(str[i], "#");
   
}
return res;}

mask("jijijjjjjj");
function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);}
    const maskify = (str) => {
        let sstr="";
        for(let i=0; i<str.length-4; i++)
            sstr+="#";
        for(let i=str.length-4; i<str.length; i++)
            sstr+=str[i];
        return sstr;
    }


    const remove= (tab,tab2)=>{
let tab =[];
tab.forEach((function(element){
    if(tab2.includes(element)){
       return true;
       tab2.slice(element);
    
    }   
})  )}


let a = [12,25,36,1,19];
let b = [58,42,18,45,12];
 
function trouver(tabA, tabB) {
  tabA.forEach(function(element){
   if(tabB.includes(element)){
      return true;
   }
  })
  return false;
}
 
let trouve = a.find(function(nombre) {
  return b.includes(nombre);
})
 
let trouve2 = false;
for (let i = 0; i < a.length; i++) {
  if (b.includes(a[i]) ){
    trouve2 = true;
    break;
  }
}
 
console.log(trouve);
console.log(trouve2);
console.log(trouver(a, b))
var array1 = [1, 2, 3];
var array2 = [2,3,4,5];
console.log(array1.filter(e => array2.includes(e)));

const sortNumbers = (arr) => {
    return arr.sort((a,b)=>b-a);
}
