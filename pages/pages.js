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
        document.body.style.background = "linear-gradient(135deg, #A9A9A9, #808080)";
    } else {
        document.body.style.background = "linear-gradient(135deg, #1e90ff, #ee82ee)";
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    let darkMode = getCookie("darkmode");
    if(darkMode != "none") {
        switchBackground(darkMode);
    }
    console.log(darkMode);
});
