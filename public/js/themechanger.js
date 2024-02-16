const theme = localStorage.getItem("theme")


function normalaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("normal-accent")
            document.body.classList.add(theme)
            localStorage.setItem("accent", "normal-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("normal-accent")
            localStorage.setItem("accent", "normal-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("normal-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "normal-accent")
        location.reload()
    }

}

function redaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("red-accent")
            document.body.classList.add(theme)
            localStorage.setItem("accent", "red-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("red-accent")
            localStorage.setItem("accent", "red-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("red-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "red-accent")
        location.reload()
    }

}

function blueaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("blue-accent")
            document.body.classList.add(theme)
            localStorage.setItem("accent", "blue-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("blue-accent")
            localStorage.setItem("accent", "blue-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("blue-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "blue-accent")
        location.reload()
    }

}

function yellowaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("yellow-accent")
            document.body.classList.add(theme)
            localStorage.setItem("accent", "yellow-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("yellow-accent")
            localStorage.setItem("accent", "yellow-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("yellow-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "yellow-accent")
        location.reload()
    }

}

function pinkaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("pink-accent")
            document.body.classList.add(theme)
            localStorage.setItem("accent", "pink-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("pink-accent")
            localStorage.setItem("accent", "pink-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("pink-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "pink-accent")
        location.reload()
    }

}

function greenaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("green-accent")
            document.body.classList.add(localStorage.getItem('theme'))
            localStorage.setItem("accent", "green-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("green-accent")
            localStorage.setItem("accent", "green-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("green-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "green-accent")
        location.reload()
    }

}

function blackaccent() {
    if (document.body.classList.item =! null) {
        var current = document.body.getAttribute("class")
        console.log(current)
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add("black-accent")
            document.body.classList.add(localStorage.getItem('theme'))
            localStorage.setItem("accent", "black-accent")
            location.reload()
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add("darktheme")
            document.body.classList.add("black-accent")
            localStorage.setItem("accent", "black-accent")
            location.reload()
        }

    } else {
        document.body.removeAttribute('class');
        document.body.classList.add("black-accent")
        document.body.classList.add("darktheme")
        localStorage.setItem("accent", "black-accent")
        location.reload()
    }

}

function moontheme() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("theme", "Moon-theme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('theme'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("theme", "lighttheme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('theme'))
    }

}

function darktheme() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("theme", "dark-theme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('theme'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("theme", "dark-theme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('theme'))
    }

}

function lighttheme() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("theme", "light-theme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('theme'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("theme", "light-theme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('theme'))
    }

}

function marianatheme() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("theme", "mariana-theme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('theme'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("theme", "mariana-theme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('theme'))
    }

}

function oceantheme() {
    if (localStorage.getItem('accent')) {
        localStorage.setItem("theme", "ocean-theme")
        document.body.removeAttribute('class')
        document.body.classList.add(localStorage.getItem('accent'))
        document.body.classList.add(localStorage.getItem('theme'))
        console.log(localStorage.getItem("mode"))
    } else {
        localStorage.setItem("theme", "ocean-theme")
        document.body.removeAttribute('class')
        document.body.classList.add("normal-accent")
        document.body.classList.add(localStorage.getItem('theme'))
    }

}