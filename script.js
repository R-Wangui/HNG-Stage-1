// Add an event listener to display the time and day when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Function to update the current time and day
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toLocaleTimeString("en-US", { timeZone: "UTC" });
        const dayOfWeek = now.toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
        // const date = now.toLocaleDateString('en-Us', {})

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    }

    // Call the update time and day function
    updateTimeAndDay();

    // Update the time and day every second
    setInterval(updateTimeAndDay, 1000);
});
