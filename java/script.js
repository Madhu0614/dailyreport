// Function to set the default date to today
function setDefaultDate() {
    const dateInput = document.getElementById('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    const todayDate = `${year}-${month}-${day}`;
    dateInput.value = todayDate;
}

// Call the function to set the default date when the page loads
setDefaultDate();

// Handle form submission
document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const report = document.getElementById('report').value;

    // Create a new report item
    const reportItem = document.createElement('div');
    reportItem.classList.add('report-item');

    reportItem.innerHTML = `
        <h3>${name} - ${date}</h3>
        <p>${report}</p>
    `;

    // Add the report item to the list
    document.getElementById('reportList').appendChild(reportItem);

    // Clear the form
    document.getElementById('reportForm').reset();

    // Reset the date to today after submission
    setDefaultDate();
});