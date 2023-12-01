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
        document.body.style.background = "linear-gradient(270deg, #696969, #A9A9A9, #808080)";
    } else {
        document.body.style.background = "linear-gradient(270deg, #00FA9A, #1e90ff, #ee82ee, #FF4500)";
    }
    document.body.style.backgroundSize = "600% 600%";
    setCookie("darkmode", checked);
}

function resetKeyboard() {
    const btns = document.getElementsByTagName('button');
    for (const btn of btns) {
        btn.style.backgroundColor = "White";
        btn.disabled = false;
    }
}

var tries = 6;
var word = "hangman";
let words = ["ability","able","above","abrasive","absent","abstract","absurd","abyss","academy","accelerate","accent","accept","acceptable","accident","accountable","accuse","ache","achieve","acid","acquire","act","activate","actual","addition","adhesive","adjust","admiration","admire","admit","adore","adult","advance","advantage","adventure","advice","aesthetic","affection","affeliate","affirm","affliction","afloat","after","afternoon","again","age","aggression","aggressive","agile","agility","agree","ahead","airplane","aisle","alarm","alert","algorithm","alien","alive","alley","allowance","alloy","allways","ally","alone","alpha","alphabet","alternate","amaze","amazement","ambient","ambition","amplify","anable","angel","angle","angry","animal","animation","ankle","annoy","anonymous","anyone","anything","anywhere","apartment","apex","apocalypse","apology","apparent","appearance","apple","apply","approach","apreciate","aprove","arcade","archive","arctic","argument","ark","arm","armor","army","aroma","arrest","arrogant","arrow","artist","artistic","ask","aspire","assemble","assertive","assistant","assume","assumption","astronomy","atempt","athlete","athletic","atom","atomic","attachment","attend","attendance","attention","attractive","audience","audio","augment","aura","authority","automatic","available","average","aviation","avoid","await","awake","award","away","awkward","awry","axe","axis","backward","balance","banana","bass","before","below","blink","blue","body","boring","break","breakfast","brother","bubble","bubbly","button","calendar","candy","child","children","close","clothes","collection","comfortable","compete","competitive","courage","cousin","cozy","date","dawn","day","dead","different","difficult","dinner","down","dress","early","earn","ears","earth","east","eastward","easy","eat","eclipse","econmy","edge","editor","educate","education","educator","effect","effective","efficient","eject","elapse","elect","electric","elegant","elemental","elevate","elite","elope","elusive","embarass","emblem","emerge","emote","emotion","employee","empower","empty","emu","encounter","encourage","end","endear","endorse","endpoint","endure","enemy","energy","enforce","engage","engine","enjoy","enlight","enlist","enormous","enter","entertain","entitle","entourage","entry","envelope","environment","epilogue","episode","equip","erase","eraser","erode","erosion","error","erupt","essay","essential","estreme","ethnic","eueka","evacuate","evaluate","evaporate","evasive","eve","even","evening","every","everybody","everyday","everyone","evidence","evoke","exceed","exclusive","execustive","exercise","exist","exit","exite","expand","expect","expensive","experiment","explain","explode","explore","explosion","expose","express","exquisite","extend","extension","external","extinct","eye","eyebrow","eyesight","eyesore","eyewear","family","fast","father","fiery","film","fire","fizz","flexible","fluffy","food","formal","forward","frequent","grass","green","guilty","guitar","hand","happy","hard","head","health","high","hour","house","how","ice","icicle","ideal","identity","idle","igloo","ignite","ignorance","ignore","illness","illuminate","illusion","illustrate","image","imaginable","imaginary","imagine","imitate","imitation","immaculate","immigrant","immorality","immortal","impact","impeccable","impervious","imply","importance","important","impossible","impress","impression","impressive","improve","impulse","incendiary","inception","inch","incident","include","income","increase","incredible","indecent","indeed","indefinite","indicate","indigenous","indigo","individual","indoors","induce","industrial","inevitable","infant","infect","infiltrate","infinite","infirmary","inflate","influence","inform","infrequent","ingredient","inhale","initial","initiate","inject","injury","ink","innocent","innovate","insane","inside","insight","insomnia","inspect","inspire","inssue","instant","instinct","institute","instructor","instrument","insurance","integral","intense","intent","interest","interstate","intervene","interview","intimidate","intolerant","intuition","intuitive","invalidate","invention","invest","invincible","invisible","invitation","invite","involve","inward","iron","irrational","irrelevant","irritation","island","isolate","itch","itchy","item","justice","lake","lanky","letter","lips","logical","love","low","lowercase","lucid","lunch","math","middle","midnight","minute","mix","month","morning","mother","mouth","movie","music","musician","musicnotes","nephew","never","niece","night","noise","normal","north","northward","nose","nosy","note","number","oak","oasis","obedience","obey","object","obligate","obligatory","obnoxious","observe","obsessive","obsidian","obsolete","obstacle","obstruct","obtain","occasion","occasional","occupation","occurrence","ocean","oceanfront","odd","odor","odyssey","offer","office","officer","official","offset","omit","omnipotent","omniscient","once","online","onshore","opacity","opaque","open","opera","operate","operation","operator","opponent","oppose","opposite","oppression","optic","optical","optimal","optimism","optimist","optimize","optimum","option","optional","orange","orbit","ordeal","order","ordinary","organ","organism","organize","origami","origin","original","orthodox","ounce","outdoors","outer","outgoing","output","outrageous","outside","outspoken","outward","outwit","oven","overboard","overcome","overdue","overgrowth","overnight","overseas","overshadow","overweight","ownership","oxygen","ozone","pants","parent","patience","peace","piano","plant","pleasant","poor","possible","punish","purpose","question","quiet","quility","rational","recess","red","relevant","reliable","rhythym","right","risk","risky","river","sane","second","senrise","shade","shadow","shirt","shoes","short","shorts","show","sing","singer","sister","sleep","slow","socks","someone","something","somewhere","sound","south","southward","special","speed","spirit","strong","sunset","supplu","tall","tangible","thing","time","tolerate","ubiquitous","ugly","ulterior","ultimate","ultimatum","unaware","unchanged","uncle","under","undercover","underdog","underneath","undersea","underside","understood","underwear","underweight","unicorn","unicycle","uniform","unify","unique","universal","universe","university","unknown","unstated","untitled","unusual","update","upgrade","uppercase","upscale","upward","urgency","utensil","utility","utopian","validate","valuable","vehicle","volunter","vote","vulnerable","water","weak","wealth","week","weekday","weekend","west","westward","what","when","where","why","worthy","write","wrong","year","yellow","yolk"]
function nextWord() {
    document.getElementById("hangmanStatus").innerHTML = "---";
    resetKeyboard()
    tries = 6;
    document.getElementById("hangmanImage").src = "../images/stickman-6.png";
    const random = Math.floor(Math.random() * words.length);
    word = words[random];
    let displayedWord = document.getElementById("word");
    displayedWord.innerHTML = "";
    for(let l = 0; l < word.length; l++) {
        displayedWord.innerHTML += "_ ";
    }
}

function checkButtons(key, keyDown) {
    switch(key) {
        case "A": case "a":
            changeColors("key_a", keyDown);
            break;
        case "B": case "b":
            changeColors("key_b", keyDown);
            break;
        case "C": case "c":
            changeColors("key_c", keyDown);
            break;
        case "D": case "d":
            changeColors("key_d", keyDown);
            break;
        case "E": case "e":
            changeColors("key_e", keyDown);
            break;
        case "F": case "f":
            changeColors("key_f", keyDown);
            break;
        case "G": case "g":
            changeColors("key_g", keyDown);
            break;
        case "H": case "h":
            changeColors("key_h", keyDown);
            break;
        case "I": case "i":
            changeColors("key_i", keyDown);
            break;
        case "J": case "j":
            changeColors("key_j", keyDown);
            break;
        case "K": case "k":
            changeColors("key_k", keyDown);
            break;
        case "L": case "l":
            changeColors("key_l", keyDown);
            break;
        case "M": case "m":
            changeColors("key_m", keyDown);
            break;
        case "N": case "n":
            changeColors("key_n", keyDown);
            break;
        case "O": case "o":
            changeColors("key_o", keyDown);
            break;
        case "P": case "p":
            changeColors("key_p", keyDown);
            break;
        case "Q": case "q":
            changeColors("key_q", keyDown);
            break;
        case "R": case "r":
            changeColors("key_r", keyDown);
            break;
        case "S": case "s":
            changeColors("key_s", keyDown);
            break;
        case "T": case "t":
            changeColors("key_t", keyDown);
            break;
        case "U": case "u":
            changeColors("key_u", keyDown);
            break;
        case "V": case "v":
            changeColors("key_v", keyDown);
            break;
        case "W": case "w":
            changeColors("key_w", keyDown);
            break;
        case "X": case "x":
            changeColors("key_x", keyDown);
            break;
        case "Y": case "y":
            changeColors("key_y", keyDown);
            break;
        case "Z": case "z":
            changeColors("key_z", keyDown);
            break;
        default: break;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    var backgroundSwitch = document.getElementById("backgroundSwitch");
    backgroundSwitch.addEventListener("change", function() {
        switchBackground(this.checked);
    });
    let darkMode = getCookie("darkmode");
    if(darkMode != "none") {
        switchBackground(darkMode);
        backgroundSwitch.checked = darkMode;
    }
    
    nextWord();
    var wordNext = document.getElementById("wordNext");
    wordNext.onclick = function() {nextWord()}
    
    const btns = document.getElementsByTagName('button');
    for (const btn of btns) {
        btn.addEventListener('click', function(event) {
            console.log(event.target.id);
            checkButtons(event.target.id.replace("key_", ""), false);
        });
    }
});

function changeColors(id, keyDown) {
    let key = document.getElementById(id);
    if(tries > 0 && !key.disabled) {
        switch(keyDown) {
            case true:
                key.style.backgroundColor = "Gold";
                key.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0)";
                break;
            case false:
                var displayedWord = document.getElementById("word");
                var temp = "";
                if(word.includes(key.innerHTML)) {
                    key.style.backgroundColor = "LightGreen";
                    for(let l = 0; l < word.length; l++) {
                        if(word[l] == key.innerHTML) {
                            displayedWord.innerHTML = displayedWord.innerHTML.substring(0, l * 2) + key.innerHTML + displayedWord.innerHTML.substring(l * 2 + 1);
                        }
                    }
                    let final = displayedWord.innerHTML.replaceAll(" ", "");
                    if(final == word) {
                        var status = document.getElementById("hangmanStatus");
                        status.innerHTML = "Game Won!";
                        tries = 0;
                    }
                } else {
                    key.style.backgroundColor = "LightCoral";
                    tries--;
                    document.getElementById("hangmanImage").src = "../images/stickman-" + tries + ".png";
                    if(tries == 0) {
                        var status = document.getElementById("hangmanStatus");
                        status.innerHTML = "Game Lost!<br>Word: " + word;
                    }
                }
                key.style.boxShadow = "0px 0px 5px #474343";
                key.disabled = true;
                break;
        }
    }
}

document.addEventListener('keydown', function(event) {
    checkButtons(event.key, true);
});
document.addEventListener('keyup', function(event) {
    checkButtons(event.key, false);
});
