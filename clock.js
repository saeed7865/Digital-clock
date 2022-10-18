const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function currentTime() {
    const date = new Date();

    let hour = date.getHours(); // Have descriptive variables
    const minute = date.getMinutes().toString().padStart(2, 0);
    const second = date.getSeconds().toString().padStart(2, 0);// look up padStart 

    const midday = hour > 12 ? "PM" : "AM";
    hour = (hour > 12 ? hour - 12 : hour).toString().padStart(2, 0); // shorter and easier to read

    const time = document.getElementById("digital-clock");
    time.textContent = `${hour} : ${minute} : ${second} ${midday}`
}

function currentDate() {
    const date = new Date();

    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    const dateOfMonth = date.getDate()
    const year = date.getFullYear()

    const today = document.getElementById('digital-date');
    today.textContent = `${day}, ${month} ${dateOfMonth} ${year}`;
}

const dateSuffix = (date) => {
    if (date > 3 && date < 21) return 'th';

    switch (date % 10) {
        case 1:
            return `${date}st`;
        case 2:
            return `${date}nd`;
        case 3:
            return `${date}rd`;
        default:
            return `${date}th`;
    }
};


currentTime();
currentDate();
setInterval(currentTime, 1000)
