function getDayOfWeek(dateSring) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateSring);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

const date = '2024-03-09';
const dayOfWeek = getDayOfWeek(date);
console.log(dayOfWeek);