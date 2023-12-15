function setCookie(name, value) {
    document.cookie = name + "=" + (value || "") + ";";
}
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
    setCookie("darkmode", checked);
}

var isMac = (navigator.appVersion.indexOf("Mac") != -1)
function showWindows() {
    document.getElementById("keyboardWindows").style.display = "";
    document.getElementById("keyboardMacs").style.display = "none";
}
function showMacs() {
    document.getElementById("keyboardWindows").style.display = "none";
    document.getElementById("keyboardMacs").style.display = "flex";
}
function switchKeyboards(checked) {
    checked ? showMacs() : showWindows();
    isMac = checked;
    keys.length = 0;
    document.getElementById("history").innerHTML = keys.toString();
}

function checkButtons(event, keyDown) {
    if (keyDown) {
        addToHistory(event);
    }
    switch(event.key) {
        case "Backspace":
            changeColors("key_back", keyDown);
            changeColors("mackey_back", keyDown);
            break;
        case "Tab":
            changeColors("key_tab", keyDown);
            changeColors("mackey_tab", keyDown);
            break;
        case "Enter":
            if(event.location == 0) {
                changeColors("key_enter", keyDown);
                changeColors("mackey_enter", keyDown);
            } else {
                changeColors("key_enter2", keyDown);
                changeColors("mackey_enter2", keyDown);
            }
            break;
        case "Shift":
            if(event.location == 1) {
                changeColors("key_shiftLeft", keyDown);
                changeColors("mackey_shiftLeft", keyDown);
            } else {
                changeColors("key_shiftRight", keyDown);
                changeColors("mackey_shiftRight", keyDown);
            }
            break;
        case "Control":
            if(event.location == 1) {
                changeColors("key_controlLeft", keyDown);
                changeColors("mackey_controlLeft", keyDown);
            } else {
                changeColors("key_controlRight", keyDown);
                changeColors("mackey_controlRight", keyDown);
            }
            break;
        case "Alt":
            if(event.location == 1) {
                changeColors("key_altLeft", keyDown);
                changeColors("mackey_altLeft", keyDown);
            } else {
                changeColors("key_altRight", keyDown);
                changeColors("mackey_altRight", keyDown);
            }
            break;
        case "Pause":
            changeColors("key_pause", keyDown);
            changeColors("mackey_pause", keyDown);
            break;
        case "CapsLock":
            if(keyDown) {
                document.getElementById("key_caps").style.backgroundColor = "yellow";
                document.getElementById("key_caps").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
                document.getElementById("mackey_caps").style.backgroundColor = "yellow";
                document.getElementById("mackey_caps").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
            } else {
                changeColors("key_caps", false);
                changeColors("mackey_caps", false);
                keys.unshift(isMac ? "CapsLock-Off" : "CapsLock");
                document.getElementById("history").innerHTML = keys.toString().replaceAll(",", ", ");
            }
            break;
        case "Escape":
            changeColors("key_esc", keyDown);
            changeColors("mackey_esc", keyDown);
            break;
        case " ":
            changeColors("key_space", keyDown);
            changeColors("mackey_space", keyDown);
            break;
        case "PageUp":
            changeColors("key_pgup", keyDown);
            changeColors("mackey_pgup", keyDown);
            break;
        case "PageDown":
            changeColors("key_pgdn", keyDown);
            changeColors("mackey_pgdn", keyDown);
            break;
        case "End":
            changeColors("key_end", keyDown);
            changeColors("mackey_end", keyDown);
            break;
        case "Home":
            changeColors("key_home", keyDown);
            changeColors("mackey_home", keyDown);
            break;
        case "ArrowLeft":
            changeColors("key_left", keyDown);
            changeColors("mackey_left", keyDown);
            break;
        case "ArrowUp":
            changeColors("key_up", keyDown);
            changeColors("mackey_up", keyDown);
            break;
        case "ArrowRight":
            changeColors("key_right", keyDown);
            changeColors("mackey_right", keyDown);
            break;
        case "ArrowDown":
            changeColors("key_down", keyDown);
            changeColors("mackey_down", keyDown);
            break;
        case "PrintScreen":
            changeColors("key_print", keyDown);
            keys.unshift("PrintScreen");
            document.getElementById("history").innerHTML = keys.toString().replaceAll(",", ", ");
            break;
        case "Insert":
            changeColors("key_insert", keyDown);
            changeColors("mackey_insert", keyDown);
            break;
        case "Delete":
            changeColors("key_delete", keyDown);
            changeColors("mackey_delete", keyDown);
            break;
        case "0":
            if(event.location == 0) {
                changeColors("key_0", keyDown);
                changeColors("mackey_0", keyDown);
            } else {
                changeColors("key_#0", keyDown);
                changeColors("mackey_#0", keyDown);
            }
            break;
        case "1":
            if(event.location == 0) {
                changeColors("key_1", keyDown);
                changeColors("mackey_1", keyDown);
            } else {
                changeColors("key_#1", keyDown);
                changeColors("mackey_#1", keyDown);
            }
            break;
        case "2":
            if(event.location == 0) {
                changeColors("key_2", keyDown);
                changeColors("mackey_2", keyDown);
            } else {
                changeColors("key_#2", keyDown);
                changeColors("mackey_#2", keyDown);
            }
            break;
        case "3":
            if(event.location == 0) {
                changeColors("key_3", keyDown);
                changeColors("mackey_3", keyDown);
            } else {
                changeColors("key_#3", keyDown);
                changeColors("mackey_#3", keyDown);
            }
            break;
        case "4":
            if(event.location == 0) {
                changeColors("key_4", keyDown);
                changeColors("mackey_4", keyDown);
            } else {
                changeColors("key_#4", keyDown);
                changeColors("mackey_#4", keyDown);
            }
            break;
        case "5":
            if(event.location == 0) {
                changeColors("key_5", keyDown);
                changeColors("mackey_5", keyDown);
            } else {
                changeColors("key_#5", keyDown);
                changeColors("mackey_#5", keyDown);
            }
            break;
        case "6":
            if(event.location == 0) {
                changeColors("key_6", keyDown);
                changeColors("mackey_6", keyDown);
            } else {
                changeColors("key_#6", keyDown);
                changeColors("mackey_#6", keyDown);
            }
            break;
        case "7":
            if(event.location == 0) {
                changeColors("key_7", keyDown);
                changeColors("mackey_7", keyDown);
            } else {
                changeColors("key_#7", keyDown);
                changeColors("mackey_#7", keyDown);
            }
            break;
        case "8":
            if(event.location == 0) {
                changeColors("key_8", keyDown);
                changeColors("mackey_8", keyDown);
            } else {
                changeColors("key_#8", keyDown);
                changeColors("mackey_#8", keyDown);
            }
            break;
        case "9":
            if(event.location == 0) {
                changeColors("key_9", keyDown);
                changeColors("mackey_9", keyDown);
            } else {
                changeColors("key_#9", keyDown);
                changeColors("mackey_#9", keyDown);
            }
            break;
        case "A": case "a":
            changeColors("key_a", keyDown);
            changeColors("mackey_a", keyDown);
            break;
        case "B": case "b":
            changeColors("key_b", keyDown);
            changeColors("mackey_b", keyDown);
            break;
        case "C": case "c":
            changeColors("key_c", keyDown);
            changeColors("mackey_c", keyDown);
            break;
        case "D": case "d":
            changeColors("key_d", keyDown);
            changeColors("mackey_d", keyDown);
            break;
        case "E": case "e":
            changeColors("key_e", keyDown);
            changeColors("mackey_e", keyDown);
            break;
        case "F": case "f":
            changeColors("key_f", keyDown);
            changeColors("mackey_f", keyDown);
            break;
        case "G": case "g":
            changeColors("key_g", keyDown);
            changeColors("mackey_g", keyDown);
            break;
        case "H": case "h":
            changeColors("key_h", keyDown);
            changeColors("mackey_h", keyDown);
            break;
        case "I": case "i":
            changeColors("key_i", keyDown);
            changeColors("mackey_i", keyDown);
            break;
        case "J": case "j":
            changeColors("key_j", keyDown);
            changeColors("mackey_j", keyDown);
            break;
        case "K": case "k":
            changeColors("key_k", keyDown);
            changeColors("mackey_k", keyDown);
            break;
        case "L": case "l":
            changeColors("key_l", keyDown);
            changeColors("mackey_l", keyDown);
            break;
        case "M": case "m":
            changeColors("key_m", keyDown);
            changeColors("mackey_m", keyDown);
            break;
        case "N": case "n":
            changeColors("key_n", keyDown);
            changeColors("mackey_n", keyDown);
            break;
        case "O": case "o":
            changeColors("key_o", keyDown);
            changeColors("mackey_o", keyDown);
            break;
        case "P": case "p":
            changeColors("key_p", keyDown);
            changeColors("mackey_p", keyDown);
            break;
        case "Q": case "q":
            changeColors("key_q", keyDown);
            changeColors("mackey_q", keyDown);
            break;
        case "R": case "r":
            changeColors("key_r", keyDown);
            changeColors("mackey_r", keyDown);
            break;
        case "S": case "s":
            changeColors("key_s", keyDown);
            changeColors("mackey_s", keyDown);
            break;
        case "T": case "t":
            changeColors("key_t", keyDown);
            changeColors("mackey_t", keyDown);
            break;
        case "U": case "u":
            changeColors("key_u", keyDown);
            changeColors("mackey_u", keyDown);
            break;
        case "V": case "v":
            changeColors("key_v", keyDown);
            changeColors("mackey_v", keyDown);
            break;
        case "W": case "w":
            changeColors("key_w", keyDown);
            changeColors("mackey_w", keyDown);
            break;
        case "X": case "x":
            changeColors("key_x", keyDown);
            changeColors("mackey_x", keyDown);
            break;
        case "Y": case "y":
            changeColors("key_y", keyDown);
            changeColors("mackey_y", keyDown);
            break;
        case "Z": case "z":
            changeColors("key_z", keyDown);
            changeColors("mackey_z", keyDown);
            break;
        case "Meta":
            if(event.location == 1) {
                changeColors("key_winLeft", keyDown);
                changeColors("mackey_winLeft", keyDown);
            } else {
                changeColors("key_winRight", keyDown);
                changeColors("mackey_winRight", keyDown);
            }
            break;
        case "ContextMenu":
            changeColors("key_menu", keyDown);
            changeColors("mackey_menu", keyDown);
            break;
        case "*":
            changeColors("key_*", keyDown);
            changeColors("mackey_*", keyDown);
            break;
        case "+":
            changeColors("key_+", keyDown);
            changeColors("mackey_+", keyDown);
            break;
        case "-":
            if(event.location == 3) {
                changeColors("key_minus", keyDown);
                changeColors("mackey_minus", keyDown);
            } else {
                changeColors("key_-", keyDown);
                changeColors("mackey_-", keyDown);
            }
            break;
        case ".":
            if(event.location == 3) {
                changeColors("key_decimal", keyDown);
                changeColors("mackey_decimal", keyDown);
            } else {
                changeColors("key_.", keyDown);
                changeColors("mackey_.", keyDown);
            }
            break;
        case "/":
            if(event.location == 3) {
                changeColors("key_division", keyDown);
                changeColors("mackey_division", keyDown);
            } else {
                changeColors("key_/", keyDown);
                changeColors("mackey_/", keyDown);
            }
            break;
        case "F1":
            changeColors("key_f1", keyDown);
            changeColors("mackey_f1", keyDown);
            break;
        case "F2":
            changeColors("key_f2", keyDown);
            changeColors("mackey_f2", keyDown);
            break;
        case "F3":
            changeColors("key_f3", keyDown);
            changeColors("mackey_f3", keyDown);
            break;
        case "F4":
            changeColors("key_f4", keyDown);
            changeColors("mackey_f4", keyDown);
            break;
        case "F5":
            changeColors("key_f5", keyDown);
            changeColors("mackey_f5", keyDown);
            break;
        case "F6":
            changeColors("key_f6", keyDown);
            changeColors("mackey_f6", keyDown);
            break;
        case "F7":
            changeColors("key_f7", keyDown);
            changeColors("mackey_f7", keyDown);
            break;
        case "F8":
            changeColors("key_f8", keyDown);
            changeColors("mackey_f8", keyDown);
            break;
        case "F9":
            changeColors("key_f9", keyDown);
            changeColors("mackey_f9", keyDown);
            break;
        case "F10":
            changeColors("key_f10", keyDown);
            changeColors("mackey_f10", keyDown);
            break;
        case "F11":
            changeColors("key_f11", keyDown);
            changeColors("mackey_f11", keyDown);
            break;
        case "F12":
            changeColors("key_f12", keyDown);
            changeColors("mackey_f12", keyDown);
            break;
        case "F13":
            changeColors("key_f13", keyDown);
            break;
        case "F14":
            changeColors("key_f14", keyDown);
            break;
        case "F15":
            changeColors("key_f15", keyDown);
            break;
        case "F16":
            changeColors("key_f16", keyDown);
            break;
        case "F17":
            changeColors("key_f17", keyDown);
            break;
        case "F18":
            changeColors("key_f18", keyDown);
            break;
        case "F19":
            changeColors("key_f19", keyDown);
            break;
        case "Clear":
            changeColors("key_clr", keyDown);
            break;
        case "NumLock":
            changeColors("key_lck", keyDown);
            break;
        case "ScrollLock":
            changeColors("key_scroll", keyDown);
            changeColors("mackey_scroll", keyDown);
            break;
        case ";":
            changeColors("key_;", keyDown);
            changeColors("mackey_;", keyDown);
            break;
        case "=":
            if(event.location == 0) {
                changeColors("key_=", keyDown);
                changeColors("mackey_=", keyDown);
            } else {
                changeColors("mackey_=2", keyDown);
            }
            break;
        case ",":
            changeColors("key_,", keyDown);
            changeColors("mackey_,", keyDown);
            break;
        case "`":
            changeColors("key_~", keyDown);
            changeColors("mackey_~", keyDown);
            break;
        case "[":
            changeColors("key_[", keyDown);
            changeColors("mackey_[", keyDown);
            break;
        case "\\":
            changeColors("key_\\", keyDown);
            changeColors("mackey_\\", keyDown);
            break;
        case "]":
            changeColors("key_]", keyDown);
            changeColors("mackey_]", keyDown);
            break;
        case "'":
            changeColors("key_'", keyDown);
            changeColors("mackey_'", keyDown);
            break;
        default: break;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    var backgroundSwitch = document.getElementById("backgroundSwitch");
    backgroundSwitch.addEventListener("change", function() {
        switchBackground(this.checked);
    });
    var keyboardSwitch = document.getElementById("keyboardSwitch");
    keyboardSwitch.addEventListener("change", function() {
        switchKeyboards(this.checked);
    });
    let darkMode = getCookie("darkmode");
    if(darkMode != "none") {
        switchBackground(darkMode);
        backgroundSwitch.checked = darkMode;
    }
    if(isMac) {
        keyboardSwitch.checked = isMac
        switchKeyboards(isMac);
    }
    keyboardSwitch.addEventListener("click", function() {
        document.activeElement.blur();
    });
    var keyboardReset = document.getElementById("keyboardReset");
    keyboardReset.onclick = function() {resetKeyboard()}
    
    document.addEventListener('keydown', function(event) {
        checkButtons(event, true);
    });
    document.addEventListener('keyup', function(event) {
        checkButtons(event, false);
    });
});

function resetKeyboard() {
    keys.length = 0;
    document.getElementById("history").innerHTML = keys.toString();
    
    const btns = document.getElementsByTagName('button');
    for (const btn of btns) {
        if(btn.id != "key_fn" && btn.id != "key_eject") {
            btn.style.backgroundColor = "White";
        }
    }
}

const keys = [];
function addToHistory(event) {
    let key = "";
    switch(event.key) {
        case " ": key = "Space"; break;
        case "Meta":
            if(event.location == 1) {
                key = isMac ? "Cmd-Left" : "Win-Left";
            } else {
                key = isMac ? "Cmd-Right" : "Win-Right";
            }
            break;
        case "Alt":
            if(event.location == 1) {
                key = isMac ? "Opt-Left" : "Alt-Left";
            } else {
                key = isMac ? "Opt-Right" : "Alt-Right";
            }
            break;
        case "=":
            if(event.location == 0) {
                key = isMac ? "Equal" : "=";
            } else {
                key = isMac ? "Equal-Numpad" : "=";
            }
            break;
        case "CapsLock": key = isMac ? "CapsLock-On" : "CapsLock"; break;
        default: key = event.key;
    }
    keys.unshift(key);
    let result = keys.toString();
    document.getElementById("history").innerHTML = result.replaceAll(",", ", ");
}

function changeColors(id, keyDown) {
    event.preventDefault()
    switch(keyDown) {
        case true:
            document.getElementById(id).style.backgroundColor = "Gold";
            document.getElementById(id).style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
            break;
        case false:
            document.getElementById(id).style.backgroundColor = "LightGreen";
            document.getElementById(id).style.boxShadow = "0px 0px 5px #474343";
            break;
    }
}
