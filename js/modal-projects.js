"use strict";

let projects = 4;

for (let k = 1; k <= projects; k++) {
    // Открытие модального окна
    document.getElementById("open-project-" + k).addEventListener("click", function() {
    document.getElementById("project-" + k).classList.add("open");
    document.getElementById("body").classList.add("locked");
    });

    // Закрытие модального окна
    document.getElementById("close-project-" + k).addEventListener("click", function() {
    document.getElementById("project-" + k).classList.remove("open");
    document.getElementById("body").classList.remove("locked");
    });
}