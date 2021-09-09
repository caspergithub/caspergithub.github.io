let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function changeThemeColor() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let accordion = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].classList.toggle("accordion-dark-mode");
    }

    let panel = document.getElementsByClassName("panel");
    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.toggle("panel-dark-mode");
    }

    let footer = document.footer;
    footer.classList.toggle("dark-mode");
}
