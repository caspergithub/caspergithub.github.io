var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function changeThemeColor() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var accordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.toggle("dark-mode");
    }

    var panel = document.getElementsByClassName("panel");
    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.toggle("dark-mode");
    }
}
