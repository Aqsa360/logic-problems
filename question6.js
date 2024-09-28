function countVowels(str) {
    
    const lowerStr = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;


    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("Aqsa Yaqoob"));  
console.log(countVowels("java script"));     
