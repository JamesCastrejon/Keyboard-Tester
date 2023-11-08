const keys = [];
document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (key === " ") {
        key = "Space"
    }
    keys.unshift(key);
    let result = keys.toString();
    document.getElementById("history").innerHTML = result.replaceAll(",", ", ");
    if(event.keyCode == 8) {// backspace
        document.getElementById("key_back").style.backgroundColor = "Gold";
        document.getElementById("key_back").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 9) {//tab
        document.getElementById("key_tab").style.backgroundColor = "Gold";
        document.getElementById("key_tab").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "Enter") {//enter
        document.getElementById("key_enter").style.backgroundColor = "Gold";
        document.getElementById("key_enter").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "NumpadEnter") {//numpad-enter
        document.getElementById("key_enter2").style.backgroundColor = "Gold";
        document.getElementById("key_enter2").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "ShiftLeft") {//shift-left
        document.getElementById("key_shiftLeft").style.backgroundColor = "Gold";
        document.getElementById("key_shiftLeft").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "ShiftRight") {//shift-right
        document.getElementById("key_shiftRight").style.backgroundColor = "Gold";
        document.getElementById("key_shiftRight").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "ControlLeft") {//ctrl-left
        document.getElementById("key_controlLeft").style.backgroundColor = "Gold";
        document.getElementById("key_controlLeft").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "ControlRight") {//ctrl-right
        document.getElementById("key_controlRight").style.backgroundColor = "Gold";
        document.getElementById("key_controlRight").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "AltLeft") {//alt
        document.getElementById("key_altLeft").style.backgroundColor = "Gold";
        document.getElementById("key_altLeft").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "AltRight") {//alt
        document.getElementById("key_altRight").style.backgroundColor = "Gold";
        document.getElementById("key_altRight").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 19) {//pause
        document.getElementById("key_pause").style.backgroundColor = "Gold";
        document.getElementById("key_pause").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 20) {//caps
        document.getElementById("key_caps").style.backgroundColor = "Orange";
        document.getElementById("key_caps").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 27) {//esc
        document.getElementById("key_esc").style.backgroundColor = "Gold";
        document.getElementById("key_esc").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 32) {//space
        document.getElementById("key_space").style.backgroundColor = "Gold";
        document.getElementById("key_space").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 33) {//pg up
        document.getElementById("key_pgup").style.backgroundColor = "Gold";
        document.getElementById("key_pgup").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 34) {//pg dn
        document.getElementById("key_pgdn").style.backgroundColor = "Gold";
        document.getElementById("key_pgdn").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 35) {//end
        document.getElementById("key_end").style.backgroundColor = "Gold";
        document.getElementById("key_end").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 36) {//home
        document.getElementById("key_home").style.backgroundColor = "Gold";
        document.getElementById("key_home").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 37) {//left
        document.getElementById("key_left").style.backgroundColor = "Gold";
        document.getElementById("key_left").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 38) {//up
        document.getElementById("key_up").style.backgroundColor = "Gold";
        document.getElementById("key_up").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 39) {//right
        document.getElementById("key_right").style.backgroundColor = "Gold";
        document.getElementById("key_right").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 40) {//down
        document.getElementById("key_down").style.backgroundColor = "Gold";
        document.getElementById("key_down").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 44) {//print
        document.getElementById("key_print").style.backgroundColor = "Gold";
        document.getElementById("key_print").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 45) {//insert
        document.getElementById("key_insert").style.backgroundColor = "Gold";
        document.getElementById("key_insert").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 46) {//delete
        document.getElementById("key_delete").style.backgroundColor = "Gold";
        document.getElementById("key_delete").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 48) {//0
        document.getElementById("key_0").style.backgroundColor = "Gold";
        document.getElementById("key_0").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 49) {//1
        document.getElementById("key_1").style.backgroundColor = "Gold";
        document.getElementById("key_1").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 50) {//2
        document.getElementById("key_2").style.backgroundColor = "Gold";
        document.getElementById("key_2").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 51) {//3
        document.getElementById("key_3").style.backgroundColor = "Gold";
        document.getElementById("key_3").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 52) {//4
        document.getElementById("key_4").style.backgroundColor = "Gold";
        document.getElementById("key_4").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 53) {//5
        document.getElementById("key_5").style.backgroundColor = "Gold";
        document.getElementById("key_5").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 54) {//6
        document.getElementById("key_6").style.backgroundColor = "Gold";
        document.getElementById("key_6").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 55) {//7
        document.getElementById("key_7").style.backgroundColor = "Gold";
        document.getElementById("key_7").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 56) {//8
        document.getElementById("key_8").style.backgroundColor = "Gold";
        document.getElementById("key_8").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 57) {//9
        document.getElementById("key_9").style.backgroundColor = "Gold";
        document.getElementById("key_9").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 65) {//a
        document.getElementById("key_a").style.backgroundColor = "Gold";
        document.getElementById("key_a").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 66) {//b
        document.getElementById("key_b").style.backgroundColor = "Gold";
        document.getElementById("key_b").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 67) {//c
        document.getElementById("key_c").style.backgroundColor = "Gold";
        document.getElementById("key_c").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 68) {//d
        document.getElementById("key_d").style.backgroundColor = "Gold";
        document.getElementById("key_d").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 69) {//e
        document.getElementById("key_e").style.backgroundColor = "Gold";
        document.getElementById("key_e").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 70) {//f
        document.getElementById("key_f").style.backgroundColor = "Gold";
        document.getElementById("key_f").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 71) {//g
        document.getElementById("key_g").style.backgroundColor = "Gold";
        document.getElementById("key_g").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 72) {//h
        document.getElementById("key_h").style.backgroundColor = "Gold";
        document.getElementById("key_h").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 73) {//i
        document.getElementById("key_i").style.backgroundColor = "Gold";
        document.getElementById("key_i").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 74) {//j
        document.getElementById("key_j").style.backgroundColor = "Gold";
        document.getElementById("key_j").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 75) {//k
        document.getElementById("key_k").style.backgroundColor = "Gold";
        document.getElementById("key_k").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 76) {//l
        document.getElementById("key_l").style.backgroundColor = "Gold";
        document.getElementById("key_l").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 77) {//m
        document.getElementById("key_m").style.backgroundColor = "Gold";
        document.getElementById("key_m").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 78) {//n
        document.getElementById("key_n").style.backgroundColor = "Gold";
        document.getElementById("key_n").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 79) {//o
        document.getElementById("key_o").style.backgroundColor = "Gold";
        document.getElementById("key_o").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 80) {//p
        document.getElementById("key_p").style.backgroundColor = "Gold";
        document.getElementById("key_p").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 81) {//q
        document.getElementById("key_q").style.backgroundColor = "Gold";
        document.getElementById("key_q").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 82) {//r
        document.getElementById("key_r").style.backgroundColor = "Gold";
        document.getElementById("key_r").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 83) {//s
        document.getElementById("key_s").style.backgroundColor = "Gold";
        document.getElementById("key_s").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 84) {//t
        document.getElementById("key_t").style.backgroundColor = "Gold";
        document.getElementById("key_t").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 85) {//u
        document.getElementById("key_u").style.backgroundColor = "Gold";
        document.getElementById("key_u").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 86) {//v
        document.getElementById("key_v").style.backgroundColor = "Gold";
        document.getElementById("key_v").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 87) {//w
        document.getElementById("key_w").style.backgroundColor = "Gold";
        document.getElementById("key_w").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 88) {//x
        document.getElementById("key_x").style.backgroundColor = "Gold";
        document.getElementById("key_x").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 89) {//y
        document.getElementById("key_y").style.backgroundColor = "Gold";
        document.getElementById("key_y").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 90) {//z
        document.getElementById("key_z").style.backgroundColor = "Gold";
        document.getElementById("key_z").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 91) {//window-left
        document.getElementById("key_winLeft").style.backgroundColor = "Gold";
        document.getElementById("key_winLeft").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "MetaRight") {//window-right
        document.getElementById("key_winRight").style.backgroundColor = "Gold";
        document.getElementById("key_winRight").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.code == "ContextMenu") {//context-menu
        document.getElementById("key_menu").style.backgroundColor = "Gold";
        document.getElementById("key_menu").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 96) {//numpad-0
        document.getElementById("key_#0").style.backgroundColor = "Gold";
        document.getElementById("key_#0").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 97) {//numpad-1
        document.getElementById("key_#1").style.backgroundColor = "Gold";
        document.getElementById("key_#1").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 98) {//numpad-2
        document.getElementById("key_#2").style.backgroundColor = "Gold";
        document.getElementById("key_#2").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 99) {//numpad-3
        document.getElementById("key_#3").style.backgroundColor = "Gold";
        document.getElementById("key_#3").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 100) {//numpad-4
        document.getElementById("key_#4").style.backgroundColor = "Gold";
        document.getElementById("key_#4").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 101) {//numpad-5
        document.getElementById("key_#5").style.backgroundColor = "Gold";
        document.getElementById("key_#5").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 102) {//numpad-6
        document.getElementById("key_#6").style.backgroundColor = "Gold";
        document.getElementById("key_#6").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 103) {//numpad-7
        document.getElementById("key_#7").style.backgroundColor = "Gold";
        document.getElementById("key_#7").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 104) {//numpad-8
        document.getElementById("key_#8").style.backgroundColor = "Gold";
        document.getElementById("key_#8").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 105) {//numpad-9
        document.getElementById("key_#9").style.backgroundColor = "Gold";
        document.getElementById("key_#9").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 106) {//multiplication
        document.getElementById("key_*").style.backgroundColor = "Gold";
        document.getElementById("key_*").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 107) {//addition
        document.getElementById("key_+").style.backgroundColor = "Gold";
        document.getElementById("key_+").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 109) {//subtraction
        document.getElementById("key_minus").style.backgroundColor = "Gold";
        document.getElementById("key_minus").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 110) {//decimal
        document.getElementById("key_decimal").style.backgroundColor = "Gold";
        document.getElementById("key_decimal").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 111) {//division
        document.getElementById("key_division").style.backgroundColor = "Gold";
        document.getElementById("key_division").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 112) {//f1
        document.getElementById("key_f1").style.backgroundColor = "Gold";
        document.getElementById("key_f1").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 113) {//f2
        document.getElementById("key_f2").style.backgroundColor = "Gold";
        document.getElementById("key_f2").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 114) {//f3
        document.getElementById("key_f3").style.backgroundColor = "Gold";
        document.getElementById("key_f3").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 115) {//f4
        document.getElementById("key_f4").style.backgroundColor = "Gold";
        document.getElementById("key_f4").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 116) {//f5
        document.getElementById("key_f5").style.backgroundColor = "Gold";
        document.getElementById("key_f5").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 117) {//f6
        document.getElementById("key_f6").style.backgroundColor = "Gold";
        document.getElementById("key_f6").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 118) {//f7
        document.getElementById("key_f7").style.backgroundColor = "Gold";
        document.getElementById("key_f7").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 119) {//f8
        document.getElementById("key_f8").style.backgroundColor = "Gold";
        document.getElementById("key_f8").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 120) {//f9
        document.getElementById("key_f9").style.backgroundColor = "Gold";
        document.getElementById("key_f9").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 121) {//f10
        document.getElementById("key_f10").style.backgroundColor = "Gold";
        document.getElementById("key_f10").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 122) {//f11
        document.getElementById("key_f11").style.backgroundColor = "Gold";
        document.getElementById("key_f11").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 123) {//f12
        document.getElementById("key_f12").style.backgroundColor = "Gold";
        document.getElementById("key_f12").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 12) {//num lock
        document.getElementById("key_lck").style.backgroundColor = "Gold";
        document.getElementById("key_lck").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 145) {//scroll lock
        document.getElementById("key_scroll").style.backgroundColor = "Gold";
        document.getElementById("key_scroll").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 186) {//;
        document.getElementById("key_;").style.backgroundColor = "Gold";
        document.getElementById("key_;").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 187) {//=
        document.getElementById("key_=").style.backgroundColor = "Gold";
        document.getElementById("key_=").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 188) {//,
        document.getElementById("key_,").style.backgroundColor = "Gold";
        document.getElementById("key_,").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 189) {//-
        document.getElementById("key_-").style.backgroundColor = "Gold";
        document.getElementById("key_-").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 190) {//.
        document.getElementById("key_.").style.backgroundColor = "Gold";
        document.getElementById("key_.").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 191) {///
        document.getElementById("key_/").style.backgroundColor = "Gold";
        document.getElementById("key_/").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 192) {//~
        document.getElementById("key_~").style.backgroundColor = "Gold";
        document.getElementById("key_~").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 219) {//[
        document.getElementById("key_[").style.backgroundColor = "Gold";
        document.getElementById("key_[").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 220) {//\\
        document.getElementById("key_\\").style.backgroundColor = "Gold";
        document.getElementById("key_\\").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 221) {//]
        document.getElementById("key_]").style.backgroundColor = "Gold";
        document.getElementById("key_]").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
    else if(event.keyCode == 222) {//'
        document.getElementById("key_'").style.backgroundColor = "Gold";
        document.getElementById("key_'").style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
    }
});
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 8) {// backspace
        document.getElementById("key_back").style.backgroundColor = "LightGreen";
        document.getElementById("key_back").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 9) {//tab
        document.getElementById("key_tab").style.backgroundColor = "LightGreen";
        document.getElementById("key_tab").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "Enter") {//enter
        document.getElementById("key_enter").style.backgroundColor = "LightGreen";
        document.getElementById("key_enter").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "NumpadEnter") {//numpad-enter
        document.getElementById("key_enter2").style.backgroundColor = "LightGreen";
        document.getElementById("key_enter2").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "ShiftLeft") {//shift-left
        document.getElementById("key_shiftLeft").style.backgroundColor = "LightGreen";
        document.getElementById("key_shiftLeft").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "ShiftRight") {//shift-right
        document.getElementById("key_shiftRight").style.backgroundColor = "LightGreen";
        document.getElementById("key_shiftRight").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "ControlLeft") {//ctrl-left
        document.getElementById("key_controlLeft").style.backgroundColor = "LightGreen";
        document.getElementById("key_controlLeft").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "ControlRight") {//ctrl-right
        document.getElementById("key_controlRight").style.backgroundColor = "LightGreen";
        document.getElementById("key_controlRight").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "AltLeft") {//alt
        document.getElementById("key_altLeft").style.backgroundColor = "LightGreen";
        document.getElementById("key_altLeft").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "AltRight") {//alt
        document.getElementById("key_altRight").style.backgroundColor = "LightGreen";
        document.getElementById("key_altRight").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 19) {//pause
        document.getElementById("key_pause").style.backgroundColor = "LightGreen";
        document.getElementById("key_pause").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 20) {//caps
        document.getElementById("key_caps").style.backgroundColor = "LightGreen";
        document.getElementById("key_caps").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 27) {//esc
        document.getElementById("key_esc").style.backgroundColor = "LightGreen";
        document.getElementById("key_esc").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 32) {//space
        document.getElementById("key_space").style.backgroundColor = "LightGreen";
        document.getElementById("key_space").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 33) {//pg up
        document.getElementById("key_pgup").style.backgroundColor = "LightGreen";
        document.getElementById("key_pgup").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 34) {//pg dn
        document.getElementById("key_pgdn").style.backgroundColor = "LightGreen";
        document.getElementById("key_pgdn").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 35) {//end
        document.getElementById("key_end").style.backgroundColor = "LightGreen";
        document.getElementById("key_end").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 36) {//home
        document.getElementById("key_home").style.backgroundColor = "LightGreen";
        document.getElementById("key_home").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 37) {//left
        document.getElementById("key_left").style.backgroundColor = "LightGreen";
        document.getElementById("key_left").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 38) {//up
        document.getElementById("key_up").style.backgroundColor = "LightGreen";
        document.getElementById("key_up").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 39) {//right
        document.getElementById("key_right").style.backgroundColor = "LightGreen";
        document.getElementById("key_right").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 40) {//down
        document.getElementById("key_down").style.backgroundColor = "LightGreen";
        document.getElementById("key_down").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 44) {//print
        document.getElementById("key_print").style.backgroundColor = "LightGreen";
        document.getElementById("key_print").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 45) {//insert
        document.getElementById("key_insert").style.backgroundColor = "LightGreen";
        document.getElementById("key_insert").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 46) {//delete
        document.getElementById("key_delete").style.backgroundColor = "LightGreen";
        document.getElementById("key_delete").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 48) {//0
        document.getElementById("key_0").style.backgroundColor = "LightGreen";
        document.getElementById("key_0").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 49) {//1
        document.getElementById("key_1").style.backgroundColor = "LightGreen";
        document.getElementById("key_1").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 50) {//2
        document.getElementById("key_2").style.backgroundColor = "LightGreen";
        document.getElementById("key_2").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 51) {//3
        document.getElementById("key_3").style.backgroundColor = "LightGreen";
        document.getElementById("key_3").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 52) {//4
        document.getElementById("key_4").style.backgroundColor = "LightGreen";
        document.getElementById("key_4").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 53) {//5
        document.getElementById("key_5").style.backgroundColor = "LightGreen";
        document.getElementById("key_5").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 54) {//6
        document.getElementById("key_6").style.backgroundColor = "LightGreen";
        document.getElementById("key_6").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 55) {//7
        document.getElementById("key_7").style.backgroundColor = "LightGreen";
        document.getElementById("key_7").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 56) {//8
        document.getElementById("key_8").style.backgroundColor = "LightGreen";
        document.getElementById("key_8").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 57) {//9
        document.getElementById("key_9").style.backgroundColor = "LightGreen";
        document.getElementById("key_9").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 65) {//a
        document.getElementById("key_a").style.backgroundColor = "LightGreen";
        document.getElementById("key_a").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 66) {//b
        document.getElementById("key_b").style.backgroundColor = "LightGreen";
        document.getElementById("key_b").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 67) {//c
        document.getElementById("key_c").style.backgroundColor = "LightGreen";
        document.getElementById("key_c").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 68) {//d
        document.getElementById("key_d").style.backgroundColor = "LightGreen";
        document.getElementById("key_d").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 69) {//e
        document.getElementById("key_e").style.backgroundColor = "LightGreen";
        document.getElementById("key_e").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 70) {//f
        document.getElementById("key_f").style.backgroundColor = "LightGreen";
        document.getElementById("key_f").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 71) {//g
        document.getElementById("key_g").style.backgroundColor = "LightGreen";
        document.getElementById("key_g").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 72) {//h
        document.getElementById("key_h").style.backgroundColor = "LightGreen";
        document.getElementById("key_h").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 73) {//i
        document.getElementById("key_i").style.backgroundColor = "LightGreen";
        document.getElementById("key_i").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 74) {//j
        document.getElementById("key_j").style.backgroundColor = "LightGreen";
        document.getElementById("key_j").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 75) {//k
        document.getElementById("key_k").style.backgroundColor = "LightGreen";
        document.getElementById("key_k").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 76) {//l
        document.getElementById("key_l").style.backgroundColor = "LightGreen";
        document.getElementById("key_l").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 77) {//m
        document.getElementById("key_m").style.backgroundColor = "LightGreen";
        document.getElementById("key_m").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 78) {//n
        document.getElementById("key_n").style.backgroundColor = "LightGreen";
        document.getElementById("key_n").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 79) {//o
        document.getElementById("key_o").style.backgroundColor = "LightGreen";
        document.getElementById("key_o").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 80) {//p
        document.getElementById("key_p").style.backgroundColor = "LightGreen";
        document.getElementById("key_p").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 81) {//q
        document.getElementById("key_q").style.backgroundColor = "LightGreen";
        document.getElementById("key_q").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 82) {//r
        document.getElementById("key_r").style.backgroundColor = "LightGreen";
        document.getElementById("key_r").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 83) {//s
        document.getElementById("key_s").style.backgroundColor = "LightGreen";
        document.getElementById("key_s").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 84) {//t
        document.getElementById("key_t").style.backgroundColor = "LightGreen";
        document.getElementById("key_t").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 85) {//u
        document.getElementById("key_u").style.backgroundColor = "LightGreen";
        document.getElementById("key_u").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 86) {//v
        document.getElementById("key_v").style.backgroundColor = "LightGreen";
        document.getElementById("key_v").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 87) {//w
        document.getElementById("key_w").style.backgroundColor = "LightGreen";
        document.getElementById("key_w").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 88) {//x
        document.getElementById("key_x").style.backgroundColor = "LightGreen";
        document.getElementById("key_x").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 89) {//y
        document.getElementById("key_y").style.backgroundColor = "LightGreen";
        document.getElementById("key_y").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 90) {//z
        document.getElementById("key_z").style.backgroundColor = "LightGreen";
        document.getElementById("key_z").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 91) {//window-left
        document.getElementById("key_winLeft").style.backgroundColor = "LightGreen";
        document.getElementById("key_winLeft").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "MetaRight") {//window-right
        document.getElementById("key_winRight").style.backgroundColor = "LightGreen";
        document.getElementById("key_winRight").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.code == "ContextMenu") {//context-menu
        document.getElementById("key_menu").style.backgroundColor = "LightGreen";
        document.getElementById("key_menu").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 96) {//numpad-0
        document.getElementById("key_#0").style.backgroundColor = "LightGreen";
        document.getElementById("key_#0").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 97) {//numpad-1
        document.getElementById("key_#1").style.backgroundColor = "LightGreen";
        document.getElementById("key_#1").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 98) {//numpad-2
        document.getElementById("key_#2").style.backgroundColor = "LightGreen";
        document.getElementById("key_#2").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 99) {//numpad-3
        document.getElementById("key_#3").style.backgroundColor = "LightGreen";
        document.getElementById("key_#3").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 100) {//numpad-4
        document.getElementById("key_#4").style.backgroundColor = "LightGreen";
        document.getElementById("key_#4").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 101) {//numpad-5
        document.getElementById("key_#5").style.backgroundColor = "LightGreen";
        document.getElementById("key_#5").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 102) {//numpad-6
        document.getElementById("key_#6").style.backgroundColor = "LightGreen";
        document.getElementById("key_#6").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 103) {//numpad-7
        document.getElementById("key_#7").style.backgroundColor = "LightGreen";
        document.getElementById("key_#7").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 104) {//numpad-8
        document.getElementById("key_#8").style.backgroundColor = "LightGreen";
        document.getElementById("key_#8").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 105) {//numpad-9
        document.getElementById("key_#9").style.backgroundColor = "LightGreen";
        document.getElementById("key_#9").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 106) {//multiplication
        document.getElementById("key_*").style.backgroundColor = "LightGreen";
        document.getElementById("key_*").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 107) {//addition
        document.getElementById("key_+").style.backgroundColor = "LightGreen";
        document.getElementById("key_+").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 109) {//subtraction
        document.getElementById("key_minus").style.backgroundColor = "LightGreen";
        document.getElementById("key_minus").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 110) {//decimal
        document.getElementById("key_decimal").style.backgroundColor = "LightGreen";
        document.getElementById("key_decimal").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 111) {//division
        document.getElementById("key_division").style.backgroundColor = "LightGreen";
        document.getElementById("key_division").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 112) {//f1
        document.getElementById("key_f1").style.backgroundColor = "LightGreen";
        document.getElementById("key_f1").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 113) {//f2
        document.getElementById("key_f2").style.backgroundColor = "LightGreen";
        document.getElementById("key_f2").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 114) {//f3
        document.getElementById("key_f3").style.backgroundColor = "LightGreen";
        document.getElementById("key_f3").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 115) {//f4
        document.getElementById("key_f4").style.backgroundColor = "LightGreen";
        document.getElementById("key_f4").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 116) {//f5
        document.getElementById("key_f5").style.backgroundColor = "LightGreen";
        document.getElementById("key_f5").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 117) {//f6
        document.getElementById("key_f6").style.backgroundColor = "LightGreen";
        document.getElementById("key_f6").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 118) {//f7
        document.getElementById("key_f7").style.backgroundColor = "LightGreen";
        document.getElementById("key_f7").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 119) {//f8
        document.getElementById("key_f8").style.backgroundColor = "LightGreen";
        document.getElementById("key_f8").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 120) {//f9
        document.getElementById("key_f9").style.backgroundColor = "LightGreen";
        document.getElementById("key_f9").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 121) {//f10
        document.getElementById("key_f10").style.backgroundColor = "LightGreen";
        document.getElementById("key_f10").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 122) {//f11
        document.getElementById("key_f11").style.backgroundColor = "LightGreen";
        document.getElementById("key_f11").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 123) {//f12
        document.getElementById("key_f12").style.backgroundColor = "LightGreen";
        document.getElementById("key_f12").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 12) {//num lock
        document.getElementById("key_lck").style.backgroundColor = "LightGreen";
        document.getElementById("key_lck").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 145) {//scroll lock
        document.getElementById("key_scroll").style.backgroundColor = "LightGreen";
        document.getElementById("key_scroll").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 186) {//;
        document.getElementById("key_;").style.backgroundColor = "LightGreen";
        document.getElementById("key_;").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 187) {//=
        document.getElementById("key_=").style.backgroundColor = "LightGreen";
        document.getElementById("key_=").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 188) {//,
        document.getElementById("key_,").style.backgroundColor = "LightGreen";
        document.getElementById("key_,").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 189) {//-
        document.getElementById("key_-").style.backgroundColor = "LightGreen";
        document.getElementById("key_-").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 190) {//.
        document.getElementById("key_.").style.backgroundColor = "LightGreen";
        document.getElementById("key_.").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 191) {///
        document.getElementById("key_/").style.backgroundColor = "LightGreen";
        document.getElementById("key_/").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 192) {//~
        document.getElementById("key_~").style.backgroundColor = "LightGreen";
        document.getElementById("key_~").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 219) {//[
        document.getElementById("key_[").style.backgroundColor = "LightGreen";
        document.getElementById("key_[").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 220) {//\\
        document.getElementById("key_\\").style.backgroundColor = "LightGreen";
        document.getElementById("key_\\").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 221) {//]
        document.getElementById("key_]").style.backgroundColor = "LightGreen";
        document.getElementById("key_]").style.boxShadow = "0px 0px 5px #474343";
    }
    else if(event.keyCode == 222) {//'
        document.getElementById("key_'").style.backgroundColor = "LightGreen";
        document.getElementById("key_'").style.boxShadow = "0px 0px 5px #474343";
    }
});
