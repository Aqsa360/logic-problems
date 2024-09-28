function getGrade(marks) {
    if (marks > 90) {
        return "A";
    } else if (marks >= 80) {
        return "B"; 
    } else if (marks >= 70) {
        return "C"; 
    } else {
        return "F";
    }
}


console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
