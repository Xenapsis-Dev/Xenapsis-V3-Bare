window.onload = function() {

    var accent = localStorage.getItem("accent")
    var theme = localStorage.getItem("theme")
    
    if (accent) {
        console.log(accent)
        console.log(theme)
        if (theme) {
            document.body.removeAttribute('class')
            document.body.classList.add(accent)
            document.body.classList.add(theme)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add(accent)
            document.body.classList.add('darktheme')
            localStorage.setItem("theme", "darktheme")

        }
    } else {
        if (theme) {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add(theme)
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent')
            document.body.classList.add("darktheme")
            localStorage.setItem("theme", "darktheme")
            localStorage.setItem("accent", "normal-accent")
        }
    }

 
 }