function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); 
