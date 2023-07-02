//your JS code here. If required.
   document.addEventListener("DOMContentLoaded", function() {
      function updateDateTime() {
        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString();
        document.getElementById("timer").textContent = formattedDateTime;
      }

      // Update the date and time immediately
      updateDateTime();

      // Update the date and time every second
      setInterval(updateDateTime, 1000);
    });