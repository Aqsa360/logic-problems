function isFirstDateEarlier(date1, date2) {
    return date1 < date2; 
}


const dateA = new Date('2022-11-20');
const dateB = new Date('2024-04-07');

console.log(isFirstDateEarlier(dateA, dateB)); 

