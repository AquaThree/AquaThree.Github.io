this.onLoad();

function onLoad() {
}

function openButtonAnim(name) {
    if (document.getElementById(name).style.transform != "scale3d(1, 1, 1)") {
        document.getElementById(name).style.transform = "scale3d(1, 1, 1)";
    }
}

function closeButtonAnim(name) {
    if (document.getElementById(name).style.transform != "scale3d(0, 1, 1)") {
        document.getElementById(name).style.transform = "scale3d(0, 1, 1)";
    }
}

function clickGoLearnMoreButton() {
    window.scrollTo({
        top: document.getElementById("header").scrollHeight + document.getElementById("banner").scrollHeight,
        behavior: "smooth"
    });
}

function clickOpenPopupButton(index) {
    var popup = document.getElementById("popup").children[index];
    if(index == 0) {
        if(window.screen.width >= 400) {
           popup.style.width = "400px";
        } else {
            popup.style.width = window.screen.width + "px";
        }
        popup.style.height = "225px";
    } else if (index == 1) {
        if(window.screen.width >= 350) {
           popup.style.width = "350px";
        } else {
            popup.style.width = window.screen.width + "px";
        }
        popup.style.height = "150px";
    }
    popup.style.display = "flex";
    document.getElementById("popup").style.display = "flex";
}

function clickClosePopupButton(index) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup").children[index].style.display = "none";
}