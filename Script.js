var isMac = false;
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
    keyboardSwitch.addEventListener("click", function() {
        document.activeElement.blur();
    });
});

const keys = [];
function addToHistory() {
    let key = "";
    switch(event.code) {
        case "Space": key = "Space"; break;
        case "MetaLeft": key = isMac ? "Cmd-Left" : "Win-Left"; break;
        case "MetaRight": key = isMac ? "Cmd-Right" : "Win-Right"; break;
        case "AltLeft": key = isMac ? "Opt-Left" : "Alt-Left"; break;
        case "AltRight": key = isMac ? "Opt-Right" : "Alt-Right"; break;
        case "Equal": key = isMac ? "Equal" : "="; break;
        case "NumpadEqual": key = isMac ? "Equal-Numpad" : "="; break;
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
    if(event.keyCode == 8) {// backspace
        changeColors("key_back", true);
        changeColors("mackey_back", true);
    }
    else if(event.keyCode == 9) {//tab
        changeColors("key_tab", true);
        changeColors("mackey_tab", true);
    }
    else if(event.code == "Enter") {//enter
        changeColors("key_enter", true);
        changeColors("mackey_enter", true);
    }
    else if(event.code == "NumpadEnter") {//numpad-enter
        changeColors("key_enter2", true);
        changeColors("mackey_enter2", true);
    }
    else if(event.code == "ShiftLeft") {//shift-left
        changeColors("key_shiftLeft", true);
        changeColors("mackey_shiftLeft", true);
    }
    else if(event.code == "ShiftRight") {//shift-right
        changeColors("key_shiftRight", true);
        changeColors("mackey_shiftRight", true);
    }
    else if(event.code == "ControlLeft") {//ctrl-left
        changeColors("key_controlLeft", true);
        changeColors("mackey_controlLeft", true);
    }
    else if(event.code == "ControlRight") {//ctrl-right
        changeColors("key_controlRight", true);
        changeColors("mackey_controlRight", true);
    }
    else if(event.code == "AltLeft") {//alt
        changeColors("key_altLeft", true);
        changeColors("mackey_altLeft", true);
    }
    else if(event.code == "AltRight") {//alt
        changeColors("key_altRight", true);
        changeColors("mackey_altRight", true);
    }
    else if(event.keyCode == 19) {//pause
        changeColors("key_pause", true);
        changeColors("mackey_pause", true);
    }
    else if(event.keyCode == 20) {//caps
        changeColors("key_caps", true);
        changeColors("mackey_caps", true);
    }
    else if(event.keyCode == 27) {//esc
        changeColors("key_esc", true);
        changeColors("mackey_esc", true);
    }
    else if(event.keyCode == 32) {//space
        changeColors("key_space", true);
        changeColors("mackey_space", true);
    }
    else if(event.keyCode == 33) {//pg up
        changeColors("key_pgup", true);
        changeColors("mackey_pgup", true);
    }
    else if(event.keyCode == 34) {//pg dn
        changeColors("key_pgdn", true);
        changeColors("mackey_pgdn", true);
    }
    else if(event.keyCode == 35) {//end
        changeColors("key_end", true);
        changeColors("mackey_end", true);
    }
    else if(event.keyCode == 36) {//home
        changeColors("key_home", true);
        changeColors("mackey_home", true);
    }
    else if(event.keyCode == 37) {//left
        changeColors("key_left", true);
        changeColors("mackey_left", true);
    }
    else if(event.keyCode == 38) {//up
        changeColors("key_up", true);
        changeColors("mackey_up", true);
    }
    else if(event.keyCode == 39) {//right
        changeColors("key_right", true);
        changeColors("mackey_right", true);
    }
    else if(event.keyCode == 40) {//down
        changeColors("key_down", true);
        changeColors("mackey_down", true);
    }
    else if(event.keyCode == 44) {//print
        changeColors("key_print", true);
        changeColors("mackey_print", true);
    }
    else if(event.keyCode == 45) {//insert
        changeColors("key_insert", true);
        changeColors("mackey_insert", true);
    }
    else if(event.keyCode == 46) {//delete
        changeColors("key_delete", true);
        changeColors("mackey_delete", true);
    }
    else if(event.keyCode == 48) {//0
        changeColors("key_0", true);
        changeColors("mackey_0", true);
    }
    else if(event.keyCode == 49) {//1
        changeColors("key_1", true);
        changeColors("mackey_1", true);
    }
    else if(event.keyCode == 50) {//2
        changeColors("key_2", true);
        changeColors("mackey_2", true);
    }
    else if(event.keyCode == 51) {//3
        changeColors("key_3", true);
        changeColors("mackey_3", true);
    }
    else if(event.keyCode == 52) {//4
        changeColors("key_4", true);
        changeColors("mackey_4", true);
    }
    else if(event.keyCode == 53) {//5
        changeColors("key_5", true);
        changeColors("mackey_5", true);
    }
    else if(event.keyCode == 54) {//6
        changeColors("key_6", true);
        changeColors("mackey_6", true);
    }
    else if(event.keyCode == 55) {//7
        changeColors("key_7", true);
        changeColors("mackey_7", true);
    }
    else if(event.keyCode == 56) {//8
        changeColors("key_8", true);
        changeColors("mackey_8", true);
    }
    else if(event.keyCode == 57) {//9
        changeColors("key_9", true);
        changeColors("mackey_9", true);
    }
    else if(event.keyCode == 65) {//a
        changeColors("key_a", true);
        changeColors("mackey_a", true);
    }
    else if(event.keyCode == 66) {//b
        changeColors("key_b", true);
        changeColors("mackey_b", true);
    }
    else if(event.keyCode == 67) {//c
        changeColors("key_c", true);
        changeColors("mackey_c", true);
    }
    else if(event.keyCode == 68) {//d
        changeColors("key_d", true);
        changeColors("mackey_d", true);
    }
    else if(event.keyCode == 69) {//e
        changeColors("key_e", true);
        changeColors("mackey_e", true);
    }
    else if(event.keyCode == 70) {//f
        changeColors("key_f", true);
        changeColors("mackey_f", true);
    }
    else if(event.keyCode == 71) {//g
        changeColors("key_g", true);
        changeColors("mackey_g", true);
    }
    else if(event.keyCode == 72) {//h
        changeColors("key_h", true);
        changeColors("mackey_h", true);
    }
    else if(event.keyCode == 73) {//i
        changeColors("key_i", true);
        changeColors("mackey_i", true);
    }
    else if(event.keyCode == 74) {//j
        changeColors("key_j", true);
        changeColors("mackey_j", true);
    }
    else if(event.keyCode == 75) {//k
        changeColors("key_k", true);
        changeColors("mackey_k", true);
    }
    else if(event.keyCode == 76) {//l
        changeColors("key_l", true);
        changeColors("mackey_l", true);
    }
    else if(event.keyCode == 77) {//m
        changeColors("key_m", true);
        changeColors("mackey_m", true);
    }
    else if(event.keyCode == 78) {//n
        changeColors("key_n", true);
        changeColors("mackey_n", true);
    }
    else if(event.keyCode == 79) {//o
        changeColors("key_o", true);
        changeColors("mackey_o", true);
    }
    else if(event.keyCode == 80) {//p
        changeColors("key_p", true);
        changeColors("mackey_p", true);
    }
    else if(event.keyCode == 81) {//q
        changeColors("key_q", true);
        changeColors("mackey_q", true);
    }
    else if(event.keyCode == 82) {//r
        changeColors("key_r", true);
        changeColors("mackey_r", true);
    }
    else if(event.keyCode == 83) {//s
        changeColors("key_s", true);
        changeColors("mackey_s", true);
    }
    else if(event.keyCode == 84) {//t
        changeColors("key_t", true);
        changeColors("mackey_t", true);
    }
    else if(event.keyCode == 85) {//u
        changeColors("key_u", true);
        changeColors("mackey_u", true);
    }
    else if(event.keyCode == 86) {//v
        changeColors("key_v", true);
        changeColors("mackey_v", true);
    }
    else if(event.keyCode == 87) {//w
        changeColors("key_w", true);
        changeColors("mackey_w", true);
    }
    else if(event.keyCode == 88) {//x
        changeColors("key_x", true);
        changeColors("mackey_x", true);
    }
    else if(event.keyCode == 89) {//y
        changeColors("key_y", true);
        changeColors("mackey_y", true);
    }
    else if(event.keyCode == 90) {//z
        changeColors("key_z", true);
        changeColors("mackey_z", true);
    }
    else if(event.keyCode == 91) {//window-left
        changeColors("key_winLeft", true);
        changeColors("mackey_winLeft", true);
    }
    else if(event.code == "MetaRight") {//window-right
        changeColors("key_winRight", true);
        changeColors("mackey_winRight", true);
    }
    else if(event.code == "ContextMenu") {//context-menu
        changeColors("key_menu", true);
        changeColors("mackey_menu", true);
    }
    else if(event.keyCode == 96) {//numpad-0
        changeColors("key_#0", true);
        changeColors("mackey_#0", true);
    }
    else if(event.keyCode == 97) {//numpad-1
        changeColors("key_#1", true);
        changeColors("mackey_#1", true);
    }
    else if(event.keyCode == 98) {//numpad-2
        changeColors("key_#2", true);
        changeColors("mackey_#2", true);
    }
    else if(event.keyCode == 99) {//numpad-3
        changeColors("key_#3", true);
        changeColors("mackey_#3", true);
    }
    else if(event.keyCode == 100) {//numpad-4
        changeColors("key_#4", true);
        changeColors("mackey_#4", true);
    }
    else if(event.keyCode == 101) {//numpad-5
        changeColors("key_#5", true);
        changeColors("mackey_#5", true);
    }
    else if(event.keyCode == 102) {//numpad-6
        changeColors("key_#6", true);
        changeColors("mackey_#6", true);
    }
    else if(event.keyCode == 103) {//numpad-7
        changeColors("key_#7", true);
        changeColors("mackey_#7", true);
    }
    else if(event.keyCode == 104) {//numpad-8
        changeColors("key_#8", true);
        changeColors("mackey_#8", true);
    }
    else if(event.keyCode == 105) {//numpad-9
        changeColors("key_#9", true);
        changeColors("mackey_#9", true);
    }
    else if(event.keyCode == 106) {//multiplication
        changeColors("key_*", true);
        changeColors("mackey_*", true);
    }
    else if(event.keyCode == 107) {//addition
        changeColors("key_+", true);
        changeColors("mackey_+", true);
    }
    else if(event.keyCode == 109) {//subtraction
        changeColors("key_minus", true);
        changeColors("mackey_minus", true);
    }
    else if(event.keyCode == 110) {//decimal
        changeColors("key_decimal", true);
        changeColors("mackey_decimal", true);
    }
    else if(event.keyCode == 111) {//division
        changeColors("key_division", true);
        changeColors("mackey_division", true);
    }
    else if(event.keyCode == 112) {//f1
        changeColors("key_f1", true);
        changeColors("mackey_f1", true);
    }
    else if(event.keyCode == 113) {//f2
        changeColors("key_f2", true);
        changeColors("mackey_f2", true);
    }
    else if(event.keyCode == 114) {//f3
        changeColors("key_f3", true);
        changeColors("mackey_f3", true);
    }
    else if(event.keyCode == 115) {//f4
        changeColors("key_f4", true);
        changeColors("mackey_f4", true);
    }
    else if(event.keyCode == 116) {//f5
        changeColors("key_f5", true);
        changeColors("mackey_f5", true);
    }
    else if(event.keyCode == 117) {//f6
        changeColors("key_f6", true);
        changeColors("mackey_f6", true);
    }
    else if(event.keyCode == 118) {//f7
        changeColors("key_f7", true);
        changeColors("mackey_f7", true);
    }
    else if(event.keyCode == 119) {//f8
        changeColors("key_f8", true);
        changeColors("mackey_f8", true);
    }
    else if(event.keyCode == 120) {//f9
        changeColors("key_f9", true);
        changeColors("mackey_f9", true);
    }
    else if(event.keyCode == 121) {//f10
        changeColors("key_f10", true);
        changeColors("mackey_f10", true);
    }
    else if(event.keyCode == 122) {//f11
        changeColors("key_f11", true);
        changeColors("mackey_f11", true);
    }
    else if(event.keyCode == 123) {//f12
        changeColors("key_f12", true);
        changeColors("mackey_f12", true);
    }
    else if(event.keyCode == 124) {//f13
        changeColors("key_f13", true);
    }
    else if(event.keyCode == 125) {//f14
        changeColors("key_f14", true);
    }
    else if(event.keyCode == 126) {//f15
        changeColors("key_f15", true);
    }
    else if(event.keyCode == 127) {//f16
        changeColors("key_f16", true);
    }
    else if(event.keyCode == 128) {//f17
        changeColors("key_f17", true);
    }
    else if(event.keyCode == 129) {//f18
        changeColors("key_f18", true);
    }
    else if(event.keyCode == 130) {//f19
        changeColors("key_f19", true);
    }
    else if(event.keyCode == 12) {//num lock & clear
        changeColors("key_lck", true);
        changeColors("key_clr", true);
    }
    else if(event.keyCode == 145) {//scroll lock
        changeColors("key_scroll", true);
        changeColors("mackey_scroll", true);
    }
    else if(event.keyCode == 186) {//;
        changeColors("key_;", true);
        changeColors("mackey_;", true);
    }
    else if(event.code == "Equal") {//=
        changeColors("key_=", true);
        changeColors("mackey_=", true);
    }
    else if(event.code == "NumpadEqual") {//=
        changeColors("mackey_=2", true);
    }
    else if(event.keyCode == 188) {//,
        changeColors("key_,", true);
        changeColors("mackey_,", true);
    }
    else if(event.keyCode == 189) {//-
        changeColors("key_-", true);
        changeColors("mackey_-", true);
    }
    else if(event.keyCode == 190) {//.
        changeColors("key_.", true);
        changeColors("mackey_.", true);
    }
    else if(event.keyCode == 191) {///
        changeColors("key_/", true);
        changeColors("mackey_/", true);
    }
    else if(event.keyCode == 192) {//~
        changeColors("key_~", true);
        changeColors("mackey_~", true);
    }
    else if(event.keyCode == 219) {//[
        changeColors("key_[", true);
        changeColors("mackey_[", true);
    }
    else if(event.keyCode == 220) {//\\
        changeColors("key_\\", true);
        changeColors("mackey_\\", true);
    }
    else if(event.keyCode == 221) {//]
        changeColors("key_]", true);
        changeColors("mackey_]", true);
    }
    else if(event.keyCode == 222) {//'
        changeColors("key_'", true);
        changeColors("mackey_'", true);
    }
});
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 8) {// backspace
        changeColors("key_back", false);
        changeColors("mackey_back", false);
    }
    else if(event.keyCode == 9) {//tab
        changeColors("key_tab", false);
        changeColors("mackey_tab", false);
    }
    else if(event.code == "Enter") {//enter
        changeColors("key_enter", false);
        changeColors("mackey_enter", false);
    }
    else if(event.code == "NumpadEnter") {//numpad-enter
        changeColors("key_enter2", false);
        changeColors("mackey_enter2", false);
    }
    else if(event.code == "ShiftLeft") {//shift-left
        changeColors("key_shiftLeft", false);
        changeColors("mackey_shiftLeft", false);
    }
    else if(event.code == "ShiftRight") {//shift-right
        changeColors("key_shiftRight", false);
        changeColors("mackey_shiftRight", false);
    }
    else if(event.code == "ControlLeft") {//ctrl-left
        changeColors("key_controlLeft", false);
        changeColors("mackey_controlLeft", false);
    }
    else if(event.code == "ControlRight") {//ctrl-right
        changeColors("key_controlRight", false);
        changeColors("mackey_controlRight", false);
    }
    else if(event.code == "AltLeft") {//alt
        changeColors("key_altLeft", false);
        changeColors("mackey_altLeft", false);
    }
    else if(event.code == "AltRight") {//alt
        changeColors("key_altRight", false);
        changeColors("mackey_altRight", false);
    }
    else if(event.keyCode == 19) {//pause
        changeColors("key_pause", false);
        changeColors("mackey_pause", false);
    }
    else if(event.keyCode == 20) {//caps
        changeColors("key_caps", false);
        changeColors("mackey_caps", false);
    }
    else if(event.keyCode == 27) {//esc
        changeColors("key_esc", false);
        changeColors("mackey_esc", false);
    }
    else if(event.keyCode == 32) {//space
        changeColors("key_space", false);
        changeColors("mackey_space", false);
    }
    else if(event.keyCode == 33) {//pg up
        changeColors("key_pgup", false);
        changeColors("mackey_pgup", false);
    }
    else if(event.keyCode == 34) {//pg dn
        changeColors("key_pgdn", false);
        changeColors("mackey_pgdn", false);
    }
    else if(event.keyCode == 35) {//end
        changeColors("key_end", false);
        changeColors("mackey_end", false);
    }
    else if(event.keyCode == 36) {//home
        changeColors("key_home", false);
        changeColors("mackey_home", false);
    }
    else if(event.keyCode == 37) {//left
        changeColors("key_left", false);
        changeColors("mackey_left", false);
    }
    else if(event.keyCode == 38) {//up
        changeColors("key_up", false);
        changeColors("mackey_up", false);
    }
    else if(event.keyCode == 39) {//right
        changeColors("key_right", false);
        changeColors("mackey_right", false);
    }
    else if(event.keyCode == 40) {//down
        changeColors("key_down", false);
        changeColors("mackey_down", false);
    }
    else if(event.keyCode == 44) {//print
        changeColors("key_print", false);
        changeColors("mackey_print", false);
    }
    else if(event.keyCode == 45) {//insert
        changeColors("key_insert", false);
        changeColors("mackey_insert", false);
    }
    else if(event.keyCode == 46) {//delete
        changeColors("key_delete", false);
        changeColors("mackey_delete", false);
    }
    else if(event.keyCode == 48) {//0
        changeColors("key_0", false);
        changeColors("mackey_0", false);
    }
    else if(event.keyCode == 49) {//1
        changeColors("key_1", false);
        changeColors("mackey_1", false);
    }
    else if(event.keyCode == 50) {//2
        changeColors("key_2", false);
        changeColors("mackey_2", false);
    }
    else if(event.keyCode == 51) {//3
        changeColors("key_3", false);
        changeColors("mackey_3", false);
    }
    else if(event.keyCode == 52) {//4
        changeColors("key_4", false);
        changeColors("mackey_4", false);
    }
    else if(event.keyCode == 53) {//5
        changeColors("key_5", false);
        changeColors("mackey_5", false);
    }
    else if(event.keyCode == 54) {//6
        changeColors("key_6", false);
        changeColors("mackey_6", false);
    }
    else if(event.keyCode == 55) {//7
        changeColors("key_7", false);
        changeColors("mackey_7", false);
    }
    else if(event.keyCode == 56) {//8
        changeColors("key_8", false);
        changeColors("mackey_8", false);
    }
    else if(event.keyCode == 57) {//9
        changeColors("key_9", false);
        changeColors("mackey_9", false);
    }
    else if(event.keyCode == 65) {//a
        changeColors("key_a", false);
        changeColors("mackey_a", false);
    }
    else if(event.keyCode == 66) {//b
        changeColors("key_b", false);
        changeColors("mackey_b", false);
    }
    else if(event.keyCode == 67) {//c
        changeColors("key_c", false);
        changeColors("mackey_c", false);
    }
    else if(event.keyCode == 68) {//d
        changeColors("key_d", false);
        changeColors("mackey_d", false);
    }
    else if(event.keyCode == 69) {//e
        changeColors("key_e", false);
        changeColors("mackey_e", false);
    }
    else if(event.keyCode == 70) {//f
        changeColors("key_f", false);
        changeColors("mackey_f", false);
    }
    else if(event.keyCode == 71) {//g
        changeColors("key_g", false);
        changeColors("mackey_g", false);
    }
    else if(event.keyCode == 72) {//h
        changeColors("key_h", false);
        changeColors("mackey_h", false);
    }
    else if(event.keyCode == 73) {//i
        changeColors("key_i", false);
        changeColors("mackey_i", false);
    }
    else if(event.keyCode == 74) {//j
        changeColors("key_j", false);
        changeColors("mackey_j", false);
    }
    else if(event.keyCode == 75) {//k
        changeColors("key_k", false);
        changeColors("mackey_k", false);
    }
    else if(event.keyCode == 76) {//l
        changeColors("key_l", false);
        changeColors("mackey_l", false);
    }
    else if(event.keyCode == 77) {//m
        changeColors("key_m", false);
        changeColors("mackey_m", false);
    }
    else if(event.keyCode == 78) {//n
        changeColors("key_n", false);
        changeColors("mackey_n", false);
    }
    else if(event.keyCode == 79) {//o
        changeColors("key_o", false);
        changeColors("mackey_o", false);
    }
    else if(event.keyCode == 80) {//p
        changeColors("key_p", false);
        changeColors("mackey_p", false);
    }
    else if(event.keyCode == 81) {//q
        changeColors("key_q", false);
        changeColors("mackey_q", false);
    }
    else if(event.keyCode == 82) {//r
        changeColors("key_r", false);
        changeColors("mackey_r", false);
    }
    else if(event.keyCode == 83) {//s
        changeColors("key_s", false);
        changeColors("mackey_s", false);
    }
    else if(event.keyCode == 84) {//t
        changeColors("key_t", false);
        changeColors("mackey_t", false);
    }
    else if(event.keyCode == 85) {//u
        changeColors("key_u", false);
        changeColors("mackey_u", false);
    }
    else if(event.keyCode == 86) {//v
        changeColors("key_v", false);
        changeColors("mackey_v", false);
    }
    else if(event.keyCode == 87) {//w
        changeColors("key_w", false);
        changeColors("mackey_w", false);
    }
    else if(event.keyCode == 88) {//x
        changeColors("key_x", false);
        changeColors("mackey_x", false);
    }
    else if(event.keyCode == 89) {//y
        changeColors("key_y", false);
        changeColors("mackey_y", false);
    }
    else if(event.keyCode == 90) {//z
        changeColors("key_z", false);
        changeColors("mackey_z", false);
    }
    else if(event.keyCode == 91) {//window-left
        changeColors("key_winLeft", false);
        changeColors("mackey_winLeft", false);
    }
    else if(event.code == "MetaRight") {//window-right
        changeColors("key_winRight", false);
        changeColors("mackey_winRight", false);
    }
    else if(event.code == "ContextMenu") {//context-menu
        changeColors("key_menu", false);
        changeColors("mackey_menu", false);
    }
    else if(event.keyCode == 96) {//numpad-0
        changeColors("key_#0", false);
        changeColors("mackey_#0", false);
    }
    else if(event.keyCode == 97) {//numpad-1
        changeColors("key_#1", false);
        changeColors("mackey_#1", false);
    }
    else if(event.keyCode == 98) {//numpad-2
        changeColors("key_#2", false);
        changeColors("mackey_#2", false);
    }
    else if(event.keyCode == 99) {//numpad-3
        changeColors("key_#3", false);
        changeColors("mackey_#3", false);
    }
    else if(event.keyCode == 100) {//numpad-4
        changeColors("key_#4", false);
        changeColors("mackey_#4", false);
    }
    else if(event.keyCode == 101) {//numpad-5
        changeColors("key_#5", false);
        changeColors("mackey_#5", false);
    }
    else if(event.keyCode == 102) {//numpad-6
        changeColors("key_#6", false);
        changeColors("mackey_#6", false);
    }
    else if(event.keyCode == 103) {//numpad-7
        changeColors("key_#7", false);
        changeColors("mackey_#7", false);
    }
    else if(event.keyCode == 104) {//numpad-8
        changeColors("key_#8", false);
        changeColors("mackey_#8", false);
    }
    else if(event.keyCode == 105) {//numpad-9
        changeColors("key_#9", false);
        changeColors("mackey_#9", false);
    }
    else if(event.keyCode == 106) {//multiplication
        changeColors("key_*", false);
        changeColors("mackey_*", false);
    }
    else if(event.keyCode == 107) {//addition
        changeColors("key_+", false);
        changeColors("mackey_+", false);
    }
    else if(event.keyCode == 109) {//subtraction
        changeColors("key_minus", false);
        changeColors("mackey_minus", false);
    }
    else if(event.keyCode == 110) {//decimal
        changeColors("key_decimal", false);
        changeColors("mackey_decimal", false);
    }
    else if(event.keyCode == 111) {//division
        changeColors("key_division", false);
        changeColors("mackey_division", false);
    }
    else if(event.keyCode == 112) {//f1
        changeColors("key_f1", false);
        changeColors("mackey_f1", false);
    }
    else if(event.keyCode == 113) {//f2
        changeColors("key_f2", false);
        changeColors("mackey_f2", false);
    }
    else if(event.keyCode == 114) {//f3
        changeColors("key_f3", false);
        changeColors("mackey_f3", false);
    }
    else if(event.keyCode == 115) {//f4
        changeColors("key_f4", false);
        changeColors("mackey_f4", false);
    }
    else if(event.keyCode == 116) {//f5
        changeColors("key_f5", false);
        changeColors("mackey_f5", false);
    }
    else if(event.keyCode == 117) {//f6
        changeColors("key_f6", false);
        changeColors("mackey_f6", false);
    }
    else if(event.keyCode == 118) {//f7
        changeColors("key_f7", false);
        changeColors("mackey_f7", false);
    }
    else if(event.keyCode == 119) {//f8
        changeColors("key_f8", false);
        changeColors("mackey_f8", false);
    }
    else if(event.keyCode == 120) {//f9
        changeColors("key_f9", false);
        changeColors("mackey_f9", false);
    }
    else if(event.keyCode == 121) {//f10
        changeColors("key_f10", false);
        changeColors("mackey_f10", false);
    }
    else if(event.keyCode == 122) {//f11
        changeColors("key_f11", false);
        changeColors("mackey_f11", false);
    }
    else if(event.keyCode == 123) {//f12
        changeColors("key_f12", false);
        changeColors("mackey_f12", false);
    }
    else if(event.keyCode == 124) {//f13
        changeColors("key_f13", false);
    }
    else if(event.keyCode == 125) {//f14
        changeColors("key_f14", false);
    }
    else if(event.keyCode == 126) {//f15
        changeColors("key_f15", false);
    }
    else if(event.keyCode == 127) {//f16
        changeColors("key_f16", false);
    }
    else if(event.keyCode == 128) {//f17
        changeColors("key_f17", false);
    }
    else if(event.keyCode == 129) {//f18
        changeColors("key_f18", false);
    }
    else if(event.keyCode == 130) {//f19
        changeColors("key_f19", false);
    }
    else if(event.keyCode == 12) {//num lock & clear
        changeColors("key_lck", false);
        changeColors("key_clr", false);
    }
    else if(event.keyCode == 145) {//scroll lock
        changeColors("key_scroll", false);
        changeColors("mackey_scroll", false);
    }
    else if(event.keyCode == 186) {//;
        changeColors("key_;", false);
        changeColors("mackey_;", false);
    }
    else if(event.code == "Equal") {//=
        changeColors("key_=", false);
        changeColors("mackey_=", false);
    }
    else if(event.code == "NumpadEqual") {//=
        changeColors("mackey_=2", false);
    }
    else if(event.keyCode == 188) {//,
        changeColors("key_,", false);
        changeColors("mackey_,", false);
    }
    else if(event.keyCode == 189) {//-
        changeColors("key_-", false);
        changeColors("mackey_-", false);
    }
    else if(event.keyCode == 190) {//.
        changeColors("key_.", false);
        changeColors("mackey_.", false);
    }
    else if(event.keyCode == 191) {///
        changeColors("key_/", false);
        changeColors("mackey_/", false);
    }
    else if(event.keyCode == 192) {//~
        changeColors("key_~", false);
        changeColors("mackey_~", false);
    }
    else if(event.keyCode == 219) {//[
        changeColors("key_[", false);
        changeColors("mackey_[", false);
    }
    else if(event.keyCode == 220) {//\\
        changeColors("key_\\", false);
        changeColors("mackey_\\", false);
    }
    else if(event.keyCode == 221) {//]
        changeColors("key_]", false);
        changeColors("mackey_]", false);
    }
    else if(event.keyCode == 222) {//'
        changeColors("key_'", false);
        changeColors("mackey_'", false);
    }
});
