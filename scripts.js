var isMac = /mac/.test(navigator.userAgentData.platform);
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
window.addEventListener("DOMContentLoaded", (event) => {
    var keyboardSwitch = document.getElementById("keyboardSwitch");
    keyboardSwitch.addEventListener("change", function() {
        switchKeyboards(this.checked);
    });
    if(isMac) {
        keyboardSwitch.checked = isMac
        switchKeyboards(isMac);
    }
    keyboardSwitch.addEventListener("click", function() {
        document.activeElement.blur();
    });
    var keyboardReset = document.getElementById("keyboardReset");
    keyboardReset.onclick = function() {resetKeyboard()}
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
function addToHistory() {
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
document.addEventListener('keydown', function(event) {
    addToHistory()
    switch(event.key) {
        case "Backspace":
            changeColors("key_back", true);
            changeColors("mackey_back", true);
            break;
        case "Tab":
            changeColors("key_tab", true);
            changeColors("mackey_tab", true);
            break;
        case "Enter":
            if(event.location == 0) {
                changeColors("key_enter", true);
                changeColors("mackey_enter", true);
            } else {
                changeColors("key_enter2", true);
                changeColors("mackey_enter2", true);
            }
            break;
        case "Shift":
            if(event.location == 1) {
                changeColors("key_shiftLeft", true);
                changeColors("mackey_shiftLeft", true);
            } else {
                changeColors("key_shiftRight", true);
                changeColors("mackey_shiftRight", true);
            }
            break;
        case "Control":
            if(event.location == 1) {
                changeColors("key_controlLeft", true);
                changeColors("mackey_controlLeft", true);
            } else {
                changeColors("key_controlRight", true);
                changeColors("mackey_controlRight", true);
            }
            break;
        case "Alt":
            if(event.location == 1) {
                changeColors("key_altLeft", true);
                changeColors("mackey_altLeft", true);
            } else {
                changeColors("key_altRight", true);
                changeColors("mackey_altRight", true);
            }
            break;
        case "Pause":
            changeColors("key_pause", true);
            changeColors("mackey_pause", true);
            break;
        case "CapsLock":
            document.getElementById("key_caps").style.backgroundColor = "yellow";
            document.getElementById("key_caps").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
            document.getElementById("mackey_caps").style.backgroundColor = "yellow";
            document.getElementById("mackey_caps").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
            break;
        case "Escape":
            changeColors("key_esc", true);
            changeColors("mackey_esc", true);
            break;
        case " ":
            changeColors("key_space", true);
            changeColors("mackey_space", true);
            break;
        case "PageUp":
            changeColors("key_pgup", true);
            changeColors("mackey_pgup", true);
            break;
        case "PageDown":
            changeColors("key_pgdn", true);
            changeColors("mackey_pgdn", true);
            break;
        case "End":
            changeColors("key_end", true);
            changeColors("mackey_end", true);
            break;
        case "Home":
            changeColors("key_home", true);
            changeColors("mackey_home", true);
            break;
        case "ArrowLeft":
            changeColors("key_left", true);
            changeColors("mackey_left", true);
            break;
        case "ArrowUp":
            changeColors("key_up", true);
            changeColors("mackey_up", true);
            break;
        case "ArrowRight":
            changeColors("key_right", true);
            changeColors("mackey_right", true);
            break;
        case "ArrowDown":
            changeColors("key_down", true);
            changeColors("mackey_down", true);
            break;
        case "PrintScreen":
            changeColors("key_print", true);
            changeColors("mackey_print", true);
            break;
        case "Insert":
            changeColors("key_insert", true);
            changeColors("mackey_insert", true);
            break;
        case "Delete":
            changeColors("key_delete", true);
            changeColors("mackey_delete", true);
            break;
        case "0":
            if(event.location == 0) {
                changeColors("key_0", true);
                changeColors("mackey_0", true);
            } else {
                changeColors("key_#0", true);
                changeColors("mackey_#0", true);
            }
            break;
        case "1":
            if(event.location == 0) {
                changeColors("key_1", true);
                changeColors("mackey_1", true);
            } else {
                changeColors("key_#1", true);
                changeColors("mackey_#1", true);
            }
            break;
        case "2":
            if(event.location == 0) {
                changeColors("key_2", true);
                changeColors("mackey_2", true);
            } else {
                changeColors("key_#2", true);
                changeColors("mackey_#2", true);
            }
            break;
        case "3":
            if(event.location == 0) {
                changeColors("key_3", true);
                changeColors("mackey_3", true);
            } else {
                changeColors("key_#3", true);
                changeColors("mackey_#3", true);
            }
            break;
        case "4":
            if(event.location == 0) {
                changeColors("key_4", true);
                changeColors("mackey_4", true);
            } else {
                changeColors("key_#4", true);
                changeColors("mackey_#4", true);
            }
            break;
        case "5":
            if(event.location == 0) {
                changeColors("key_5", true);
                changeColors("mackey_5", true);
            } else {
                changeColors("key_#5", true);
                changeColors("mackey_#5", true);
            }
            break;
        case "6":
            if(event.location == 0) {
                changeColors("key_6", true);
                changeColors("mackey_6", true);
            } else {
                changeColors("key_#6", true);
                changeColors("mackey_#6", true);
            }
            break;
        case "7":
            if(event.location == 0) {
                changeColors("key_7", true);
                changeColors("mackey_7", true);
            } else {
                changeColors("key_#7", true);
                changeColors("mackey_#7", true);
            }
            break;
        case "8":
            if(event.location == 0) {
                changeColors("key_8", true);
                changeColors("mackey_8", true);
            } else {
                changeColors("key_#8", true);
                changeColors("mackey_#8", true);
            }
            break;
        case "9":
            if(event.location == 0) {
                changeColors("key_9", true);
                changeColors("mackey_9", true);
            } else {
                changeColors("key_#9", true);
                changeColors("mackey_#9", true);
            }
            break;
        case "A", "a":
            changeColors("key_a", true);
            changeColors("mackey_a", true);
            break;
        case "B", "b":
            changeColors("key_b", true);
            changeColors("mackey_b", true);
            break;
        case "C", "c":
            changeColors("key_c", true);
            changeColors("mackey_c", true);
            break;
        case "D", "d":
            changeColors("key_d", true);
            changeColors("mackey_d", true);
            break;
        case "E", "e":
            changeColors("key_e", true);
            changeColors("mackey_e", true);
            break;
        case "F", "f":
            changeColors("key_f", true);
            changeColors("mackey_f", true);
            break;
        case "G", "g":
            changeColors("key_g", true);
            changeColors("mackey_g", true);
            break;
        case "H", "h":
            changeColors("key_h", true);
            changeColors("mackey_h", true);
            break;
        case "I", "i":
            changeColors("key_i", true);
            changeColors("mackey_i", true);
            break;
        case "J", "j":
            changeColors("key_j", true);
            changeColors("mackey_j", true);
            break;
        case "K", "k":
            changeColors("key_k", true);
            changeColors("mackey_k", true);
            break;
        case "L", "l":
            changeColors("key_l", true);
            changeColors("mackey_l", true);
            break;
        case "M", "m":
            changeColors("key_m", true);
            changeColors("mackey_m", true);
            break;
        case "N", "n":
            changeColors("key_n", true);
            changeColors("mackey_n", true);
            break;
        case "O", "o":
            changeColors("key_o", true);
            changeColors("mackey_o", true);
            break;
        case "P", "p":
            changeColors("key_p", true);
            changeColors("mackey_p", true);
            break;
        case "Q", "q":
            changeColors("key_q", true);
            changeColors("mackey_q", true);
            break;
        case "R", "r":
            changeColors("key_r", true);
            changeColors("mackey_r", true);
            break;
        case "S", "s":
            changeColors("key_s", true);
            changeColors("mackey_s", true);
            break;
        case "T", "t":
            changeColors("key_t", true);
            changeColors("mackey_t", true);
            break;
        case "U", "u":
            changeColors("key_u", true);
            changeColors("mackey_u", true);
            break;
        case "V", "v":
            changeColors("key_v", true);
            changeColors("mackey_v", true);
            break;
        case "W", "w":
            changeColors("key_w", true);
            changeColors("mackey_w", true);
            break;
        case "X", "x":
            changeColors("key_x", true);
            changeColors("mackey_x", true);
            break;
        case "Y", "y":
            changeColors("key_y", true);
            changeColors("mackey_y", true);
            break;
        case "Z", "z":
            changeColors("key_z", true);
            changeColors("mackey_z", true);
            break;
        case "Meta":
            if(event.location == 1) {
                changeColors("key_winLeft", true);
                changeColors("mackey_winLeft", true);
            } else {
                changeColors("key_winRight", true);
                changeColors("mackey_winRight", true);
            }
            break;
        case "ContextMenu":
            changeColors("key_menu", true);
            changeColors("mackey_menu", true);
            break;
        case "*":
            changeColors("key_*", true);
            changeColors("mackey_*", true);
            break;
        case "+":
            changeColors("key_+", true);
            changeColors("mackey_+", true);
            break;
        case "-":
            if(event.location == 3) {
                changeColors("key_minus", true);
                changeColors("mackey_minus", true);
            } else {
                changeColors("key_-", true);
                changeColors("mackey_-", true);
            }
            break;
        case ".":
            if(event.location == 3) {
                changeColors("key_decimal", true);
                changeColors("mackey_decimal", true);
            } else {
                changeColors("key_.", true);
                changeColors("mackey_.", true);
            }
            break;
        case "/":
            if(event.location == 3) {
                changeColors("key_division", true);
                changeColors("mackey_division", true);
            } else {
                changeColors("key_/", true);
                changeColors("mackey_/", true);
            }
            break;
        case "F1":
            changeColors("key_f1", true);
            changeColors("mackey_f1", true);
            break;
        case "F2":
            changeColors("key_f2", true);
            changeColors("mackey_f2", true);
            break;
        case "F3":
            changeColors("key_f3", true);
            changeColors("mackey_f3", true);
            break;
        case "F4":
            changeColors("key_f4", true);
            changeColors("mackey_f4", true);
            break;
        case "F5":
            changeColors("key_f5", true);
            changeColors("mackey_f5", true);
            break;
        case "F6":
            changeColors("key_f6", true);
            changeColors("mackey_f6", true);
            break;
        case "F7":
            changeColors("key_f7", true);
            changeColors("mackey_f7", true);
            break;
        case "F8":
            changeColors("key_f8", true);
            changeColors("mackey_f8", true);
            break;
        case "F9":
            changeColors("key_f9", true);
            changeColors("mackey_f9", true);
            break;
        case "F10":
            changeColors("key_f10", true);
            changeColors("mackey_f10", true);
            break;
        case "F11":
            changeColors("key_f11", true);
            changeColors("mackey_f11", true);
            break;
        case "F12":
            changeColors("key_f12", true);
            changeColors("mackey_f12", true);
            break;
        case "F13":
            changeColors("key_f13", true);
            break;
        case "F14":
            changeColors("key_f14", true);
            break;
        case "F15":
            changeColors("key_f15", true);
            break;
        case "F16":
            changeColors("key_f16", true);
            break;
        case "F17":
            changeColors("key_f17", true);
            break;
        case "F18":
            changeColors("key_f18", true);
            break;
        case "F19":
            changeColors("key_f19", true);
            break;
        case "Clear":
            changeColors("key_clr", true);
            break;
        case "NumLock":
            changeColors("key_lck", true);
            break;
        case "ScrollLock":
            changeColors("key_scroll", true);
            changeColors("mackey_scroll", true);
            break;
        case ";":
            changeColors("key_;", true);
            changeColors("mackey_;", true);
            break;
        case "=":
            if(event.location == 0) {
                changeColors("key_=", true);
                changeColors("mackey_=", true);
            } else {
                changeColors("mackey_=2", true);
            }
            break;
        case ",":
            changeColors("key_,", true);
            changeColors("mackey_,", true);
            break;
        case "`":
            changeColors("key_~", true);
            changeColors("mackey_~", true);
            break;
        case "[":
            changeColors("key_[", true);
            changeColors("mackey_[", true);
            break;
        case "\\":
            changeColors("key_\\", true);
            changeColors("mackey_\\", true);
            break;
        case "]":
            changeColors("key_]", true);
            changeColors("mackey_]", true);
            break;
        case "'":
            changeColors("key_'", true);
            changeColors("mackey_'", true);
            break;
        default: break;
    }
});
document.addEventListener('keyup', function(event) {
    switch(event.key) {
        case "Backspace":
            changeColors("key_back", false);
            changeColors("mackey_back", false);
            break;
        case "Tab":
            changeColors("key_tab", false);
            changeColors("mackey_tab", false);
            break;
        case "Enter":
            if(event.location == 0) {
                changeColors("key_enter", false);
                changeColors("mackey_enter", false);
            } else {
                changeColors("key_enter2", false);
                changeColors("mackey_enter2", false);
            }
            break;
        case "Shift":
            if(event.location == 1) {
                changeColors("key_shiftLeft", false);
                changeColors("mackey_shiftLeft", false);
            } else {
                changeColors("key_shiftRight", false);
                changeColors("mackey_shiftRight", false);
            }
            break;
        case "Control":
            if(event.location == 1) {
                changeColors("key_controlLeft", false);
                changeColors("mackey_controlLeft", false);
            } else {
                changeColors("key_controlRight", false);
                changeColors("mackey_controlRight", false);
            }
            break;
        case "Alt":
            if(event.location == 1) {
                changeColors("key_altLeft", false);
                changeColors("mackey_altLeft", false);
            } else {
                changeColors("key_altRight", false);
                changeColors("mackey_altRight", false);
            }
            break;
        case "Pause":
            changeColors("key_pause", false);
            changeColors("mackey_pause", false);
            break;
        case "CapsLock":
            changeColors("key_caps", false);
            changeColors("mackey_caps", false);
            keys.unshift(isMac ? "CapsLock-Off" : "CapsLock");
            document.getElementById("history").innerHTML = keys.toString().replaceAll(",", ", ");
            break;
        case "Escape":
            changeColors("key_esc", false);
            changeColors("mackey_esc", false);
            break;
        case " ":
            changeColors("key_space", false);
            changeColors("mackey_space", false);
            break;
        case "PageUp":
            changeColors("key_pgup", false);
            changeColors("mackey_pgup", false);
            break;
        case "PageDown":
            changeColors("key_pgdn", false);
            changeColors("mackey_pgdn", false);
            break;
        case "End":
            changeColors("key_end", false);
            changeColors("mackey_end", false);
            break;
        case "Home":
            changeColors("key_home", false);
            changeColors("mackey_home", false);
            break;
        case "ArrowLeft":
            changeColors("key_left", false);
            changeColors("mackey_left", false);
            break;
        case "ArrowUp":
            changeColors("key_up", false);
            changeColors("mackey_up", false);
            break;
        case "ArrowRight":
            changeColors("key_right", false);
            changeColors("mackey_right", false);
            break;
        case "ArrowDown":
            changeColors("key_down", false);
            changeColors("mackey_down", false);
            break;
        case "PrintScreen":
            changeColors("key_print", false);
            changeColors("mackey_print", false);
            break;
        case "Insert":
            changeColors("key_insert", false);
            changeColors("mackey_insert", false);
            break;
        case "Delete":
            changeColors("key_delete", false);
            changeColors("mackey_delete", false);
            break;
        case "0":
            if(event.location == 0) {
                changeColors("key_0", false);
                changeColors("mackey_0", false);
            } else {
                changeColors("key_#0", false);
                changeColors("mackey_#0", false);
            }
            break;
        case "1":
            if(event.location == 0) {
                changeColors("key_1", false);
                changeColors("mackey_1", false);
            } else {
                changeColors("key_#1", false);
                changeColors("mackey_#1", false);
            }
            break;
        case "2":
            if(event.location == 0) {
                changeColors("key_2", false);
                changeColors("mackey_2", false);
            } else {
                changeColors("key_#2", false);
                changeColors("mackey_#2", false);
            }
            break;
        case "3":
            if(event.location == 0) {
                changeColors("key_3", false);
                changeColors("mackey_3", false);
            } else {
                changeColors("key_#3", false);
                changeColors("mackey_#3", false);
            }
            break;
        case "4":
            if(event.location == 0) {
                changeColors("key_4", false);
                changeColors("mackey_4", false);
            } else {
                changeColors("key_#4", false);
                changeColors("mackey_#4", false);
            }
            break;
        case "5":
            if(event.location == 0) {
                changeColors("key_5", false);
                changeColors("mackey_5", false);
            } else {
                changeColors("key_#5", false);
                changeColors("mackey_#5", false);
            }
            break;
        case "6":
            if(event.location == 0) {
                changeColors("key_6", false);
                changeColors("mackey_6", false);
            } else {
                changeColors("key_#6", false);
                changeColors("mackey_#6", false);
            }
            break;
        case "7":
            if(event.location == 0) {
                changeColors("key_7", false);
                changeColors("mackey_7", false);
            } else {
                changeColors("key_#7", false);
                changeColors("mackey_#7", false);
            }
            break;
        case "8":
            if(event.location == 0) {
                changeColors("key_8", false);
                changeColors("mackey_8", false);
            } else {
                changeColors("key_#8", false);
                changeColors("mackey_#8", false);
            }
            break;
        case "9":
            if(event.location == 0) {
                changeColors("key_9", false);
                changeColors("mackey_9", false);
            } else {
                changeColors("key_#9", false);
                changeColors("mackey_#9", false);
            }
            break;
        case "A", "a":
            changeColors("key_a", false);
            changeColors("mackey_a", false);
            break;
        case "B", "b":
            changeColors("key_b", false);
            changeColors("mackey_b", false);
            break;
        case "C", "c":
            changeColors("key_c", false);
            changeColors("mackey_c", false);
            break;
        case "D", "d":
            changeColors("key_d", false);
            changeColors("mackey_d", false);
            break;
        case "E", "e":
            changeColors("key_e", false);
            changeColors("mackey_e", false);
            break;
        case "F", "f":
            changeColors("key_f", false);
            changeColors("mackey_f", false);
            break;
        case "G", "g":
            changeColors("key_g", false);
            changeColors("mackey_g", false);
            break;
        case "H", "h":
            changeColors("key_h", false);
            changeColors("mackey_h", false);
            break;
        case "I", "i":
            changeColors("key_i", false);
            changeColors("mackey_i", false);
            break;
        case "J", "j":
            changeColors("key_j", false);
            changeColors("mackey_j", false);
            break;
        case "K", "k":
            changeColors("key_k", false);
            changeColors("mackey_k", false);
            break;
        case "L", "l":
            changeColors("key_l", false);
            changeColors("mackey_l", false);
            break;
        case "M", "m":
            changeColors("key_m", false);
            changeColors("mackey_m", false);
            break;
        case "N", "n":
            changeColors("key_n", false);
            changeColors("mackey_n", false);
            break;
        case "O", "o":
            changeColors("key_o", false);
            changeColors("mackey_o", false);
            break;
        case "P", "p":
            changeColors("key_p", false);
            changeColors("mackey_p", false);
            break;
        case "Q", "q":
            changeColors("key_q", false);
            changeColors("mackey_q", false);
            break;
        case "R", "r":
            changeColors("key_r", false);
            changeColors("mackey_r", false);
            break;
        case "S", "s":
            changeColors("key_s", false);
            changeColors("mackey_s", false);
            break;
        case "T", "t":
            changeColors("key_t", false);
            changeColors("mackey_t", false);
            break;
        case "U", "u":
            changeColors("key_u", false);
            changeColors("mackey_u", false);
            break;
        case "V", "v":
            changeColors("key_v", false);
            changeColors("mackey_v", false);
            break;
        case "W", "w":
            changeColors("key_w", false);
            changeColors("mackey_w", false);
            break;
        case "X", "x":
            changeColors("key_x", false);
            changeColors("mackey_x", false);
            break;
        case "Y", "y":
            changeColors("key_y", false);
            changeColors("mackey_y", false);
            break;
        case "Z", "z":
            changeColors("key_z", false);
            changeColors("mackey_z", false);
            break;
        case "Meta":
            if(event.location == 1) {
                changeColors("key_winLeft", false);
                changeColors("mackey_winLeft", false);
            } else {
                changeColors("key_winRight", false);
                changeColors("mackey_winRight", false);
            }
            break;
        case "ContextMenu":
            changeColors("key_menu", false);
            changeColors("mackey_menu", false);
            break;
        case "*":
            changeColors("key_*", false);
            changeColors("mackey_*", false);
            break;
        case "+":
            changeColors("key_+", false);
            changeColors("mackey_+", false);
            break;
        case "-":
            if(event.location == 3) {
                changeColors("key_minus", false);
                changeColors("mackey_minus", false);
            } else {
                changeColors("key_-", false);
                changeColors("mackey_-", false);
            }
            break;
        case ".":
            if(event.location == 3) {
                changeColors("key_decimal", false);
                changeColors("mackey_decimal", false);
            } else {
                changeColors("key_.", false);
                changeColors("mackey_.", false);
            }
            break;
        case "/":
            if(event.location == 3) {
                changeColors("key_division", false);
                changeColors("mackey_division", false);
            } else {
                changeColors("key_/", false);
                changeColors("mackey_/", false);
            }
            break;
        case "F1":
            changeColors("key_f1", false);
            changeColors("mackey_f1", false);
            break;
        case "F2":
            changeColors("key_f2", false);
            changeColors("mackey_f2", false);
            break;
        case "F3":
            changeColors("key_f3", false);
            changeColors("mackey_f3", false);
            break;
        case "F4":
            changeColors("key_f4", false);
            changeColors("mackey_f4", false);
            break;
        case "F5":
            changeColors("key_f5", false);
            changeColors("mackey_f5", false);
            break;
        case "F6":
            changeColors("key_f6", false);
            changeColors("mackey_f6", false);
            break;
        case "F7":
            changeColors("key_f7", false);
            changeColors("mackey_f7", false);
            break;
        case "F8":
            changeColors("key_f8", false);
            changeColors("mackey_f8", false);
            break;
        case "F9":
            changeColors("key_f9", false);
            changeColors("mackey_f9", false);
            break;
        case "F10":
            changeColors("key_f10", false);
            changeColors("mackey_f10", false);
            break;
        case "F11":
            changeColors("key_f11", false);
            changeColors("mackey_f11", false);
            break;
        case "F12":
            changeColors("key_f12", false);
            changeColors("mackey_f12", false);
            break;
        case "F13":
            changeColors("key_f13", false);
            break;
        case "F14":
            changeColors("key_f14", false);
            break;
        case "F15":
            changeColors("key_f15", false);
            break;
        case "F16":
            changeColors("key_f16", false);
            break;
        case "F17":
            changeColors("key_f17", false);
            break;
        case "F18":
            changeColors("key_f18", false);
            break;
        case "F19":
            changeColors("key_f19", false);
            break;
        case "Clear":
            changeColors("key_clr", false);
            break;
        case "NumLock":
            changeColors("key_lck", false);
            break;
        case "ScrollLock":
            changeColors("key_scroll", false);
            changeColors("mackey_scroll", false);
            break;
        case ";":
            changeColors("key_;", false);
            changeColors("mackey_;", false);
            break;
        case "=":
            if(event.location == 0) {
                changeColors("key_=", false);
                changeColors("mackey_=", false);
            } else {
                changeColors("mackey_=2", false);
            }
            break;
        case ",":
            changeColors("key_,", false);
            changeColors("mackey_,", false);
            break;
        case "`":
            changeColors("key_~", false);
            changeColors("mackey_~", false);
            break;
        case "[":
            changeColors("key_[", false);
            changeColors("mackey_[", false);
            break;
        case "\\":
            changeColors("key_\\", false);
            changeColors("mackey_\\", false);
            break;
        case "]":
            changeColors("key_]", false);
            changeColors("mackey_]", false);
            break;
        case "'":
            changeColors("key_'", false);
            changeColors("mackey_'", false);
            break;
        default: break;
    }
});
