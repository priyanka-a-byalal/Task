function setReminder() {
    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;
    var activity = document.getElementById("activity").value;

    if (day === "" || time === "" || activity === "") {
        alert("Please select day, time, and activity");
        return;
    }

    var selectedDateTime = new Date(`2023-01-${getDayNumber(day)}T${time}:00`);
    var currentTime = new Date();

    var timeDiff = selectedDateTime - currentTime;
    var minutesDiff = Math.floor(timeDiff / 60000);

    if (minutesDiff <= 0) {
        alert("Invalid time selection. Please choose a future time.");
        return;
    }

    setTimeout(function () {
        document.getElementById("reminderSound").play();
        alert(`It's time to ${activity}!`);
    }, minutesDiff * 60 * 1000);
}

function getDayNumber(day) {
    switch (day.toLowerCase()) {
        case 'sunday':
            return 0;
        case 'monday':
            return 1;
        case 'tuesday':
            return 2;
        case 'wednesday':
            return 3;
        case 'thursday':
            return 4;
        case 'friday':
            return 5;
        case 'saturday':
            return 6;
        default:
            return -1;
    }
}

