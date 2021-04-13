


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 8];
const distelement=(set1,set2)=>{
let sum=0
set1.map(s1 =>{
     if(! set2.includes(s1)) sum+=s1})

set2.map(s2=>{

if(!set1.includes(s2)) sum+=s2

})
return sum

}

console.log(distelement(arr1,arr2))
const samelement=(set1,set2)=>{
    let sum=0
    set1.map(s1 =>{
         if(set2.includes(s1)) sum+=s1})
    
    set2.map(s2=>{
    
    if(set1.includes(s2)) sum+=s2
    
    })
    return sum
    
    }
    
    console.log(samelement(arr1,arr2))