function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(10, 20, 30, 3, 4, 5));  
console.log(maxOfThree(6, 7, 8)); 
