var desconoff = false
var cononoff = false
var zindex11 = false
var zindex22 = false
function showdesc() {
    
    if (desconoff === false) {
        document.getElementById("desc").style.opacity = "1"
        document.getElementById("desc").style.zIndex = "3"
        desconoff = true
        zindex11 = true
        console.log("on")
    } else if (desconoff === true) {
        document.getElementById("desc").style.opacity = "0"
        document.getElementById("desc").style.zIndex = "1"
        desconoff = false
        zindex11 = false
        console.log("off")
    }
};

function showcon() {
    
    if (cononoff === false) {
        document.getElementById("controlls").style.opacity = "1"
        document.getElementById("controlls").style.zIndex = "3"
        cononoff = true
        console.log("on")
    } else if (cononoff === true) {
        document.getElementById("controlls").style.opacity = "0"
        document.getElementById("controlls").style.zIndex = "1"
        cononoff = false
        console.log("off")
    }
};
