let lastnContact = document.querySelector('#lastnContact');
let nameContact = document.querySelector('#nameContact');
let patronContact = document.querySelector('#patronContact');
let phoneContact = document.querySelector('#phoneContact');
let gender;

function display() {
    if (document.getElementById('maleGender').checked) {
        return gender = 'M';
    } else {
        return gender = 'F';
    }
}

let button = document.getElementById("button_gr");

let birth = document.getElementById('birthDate');

button.addEventListener("click", () => {
    let checkboxes = document.querySelectorAll('input[name="checkHead"]:checked');
    let values = [];

    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    alert("Received an application from: " +
        lastnContact.value + " " +
        nameContact.value[0] + "." +
        patronContact.value[0] + "." +
        ", gender: " + display() +
        ", phone number: " + phoneContact.value +
        ", smart in:" + values +
        ", was born: " + birth.valueAsDate);
});