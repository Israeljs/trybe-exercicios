let header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(90, 178, 105)";

let emergency = document.querySelectorAll(".emergency-tasks div");
for (let i = 0; i < emergency.length; i++) {
    emergency[i].style.backgroundColor = "rgb(243, 157, 131)";
    emergency[i].style.padding = "1px";
};

let noEmergency = document.querySelectorAll(".no-emergency-tasks div");
for (let i = 0; i < noEmergency.length; i++) {
    noEmergency[i].style.backgroundColor = "rgb(249, 219, 94)";
    noEmergency[i].style.padding = "1px";
};

let urgente = document.querySelectorAll(".emergency-tasks div h3");
for (let i = 0; i < urgente.length; i++) {
    urgente[i].style.backgroundColor = "rgb(174, 119, 242)";
};

let noUrgente = document.querySelectorAll(".no-emergency-tasks div h3");
for (let i = 0; i < noUrgente.length; i++) {
    noUrgente[i].style.backgroundColor = "rgb(35, 37, 37)";
};

let footer = document.querySelector("#footer-container");
footer.style.backgroundColor = "rgb(19, 54, 51)";