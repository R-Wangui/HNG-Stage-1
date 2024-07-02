// Add an event listener to display the time when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Function to update the current time and day
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    }

    // Initial call to update time and day
    updateTimeAndDay();

    // Update the time and day every second
    setInterval(updateTimeAndDay, 1000);
});
