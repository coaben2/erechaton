
document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById('dynamic-table');
    let selectedRowIndex = 1; // Initialize with first row
    const rows = table.querySelectorAll('tbody tr');

    function highlightRow() {
        rows.forEach(row => row.classList.remove('selected'));
        rows[selectedRowIndex].classList.add('selected');
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            selectedRowIndex = Math.min(selectedRowIndex + 1, rows.length - 1);
            highlightRow();
        } else if (event.key === 'ArrowUp') {
            selectedRowIndex = Math.max(selectedRowIndex - 1, 0);
            highlightRow();
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            // Handle horizontal navigation if needed
        }
    });

    highlightRow(); // Highlight initial row
});
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
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        // Activer le mode sombre
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        // Activer le mode clair
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
