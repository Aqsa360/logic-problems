function sumArray(arr) {
    let sum = 0;


    if (arr.length === 0) {
        return sum; 
    } else {
       
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
    }
    
    return sum;
}


console.log(sumArray([1, 2, 3, 4]));  

