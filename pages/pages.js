function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "none";
}

function switchBackground(checked) {
    if(checked) {
        document.body.style.background = "linear-gradient(270deg, #696969, #A9A9A9, #808080)";
    } else {
        document.body.style.background = "linear-gradient(270deg, #00FA9A, #1e90ff, #ee82ee, #FF4500)";
    }
    document.body.style.backgroundSize = "600% 600%";
}

window.addEventListener("DOMContentLoaded", (event) => {
    let darkMode = getCookie("darkmode");
    if(darkMode != "none") {
        switchBackground(darkMode);
    }
    console.log(darkMode);
});
