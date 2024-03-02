document.addEventListener("DOMContentLoaded", function () {
    const dateTimeParagraph = document.getElementById("date-time-info");

    const currentDate = new Date();

    const day = currentDate.toLocaleString('default', { weekday: 'long' });
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Add leading zero if single digit
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const dateTimeInfo = `${day}, ${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
    dateTimeParagraph.textContent = dateTimeInfo;
});