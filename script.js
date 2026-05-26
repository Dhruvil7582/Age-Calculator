let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");

var today = new Date();
currDate.innerText = `Today's Date: ${today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;

CalcAge.addEventListener("click", () => {
    if (!dateOfBirth.value) {
        displayAge.classList.add("visible");
        Age.innerHTML = "Please select a valid date first.";
        return;
    }

    var birthDate = new Date(dateOfBirth.value);
    
    if (birthDate > today) {
        displayAge.classList.add("visible");
        Age.innerHTML = "The birth date cannot be in the future.";
        return;
    }

    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    displayAge.classList.add("visible");
    Age.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
});
