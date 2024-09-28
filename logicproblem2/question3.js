function sumArray(arr) {
    let total = 0; 
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; 
    }
    return total;
    
}


const numbers = [11, 12, 13, 14, 15];
const totalSum = sumArray(numbers);
console.log(totalSum); 

