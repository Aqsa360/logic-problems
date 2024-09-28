function removeDuplicates(arr) {
   
    const uniqueSet = new Set(arr);
    
    
    return Array.from(uniqueSet);
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));  
console.log(removeDuplicates(['a', 'b', 'a', 'c'])); 
