window.onload = function() {
    var icon = document.querySelector("link[rel='icon']");
    icon.type = "image.png";
    icon.href = localStorage.getItem("favicon");
    var favicon = localStorage.getItem("favicon");
    var title = localStorage.getItem("title")
    var accent = localStorage.getItem("accent")
    var theme = localStorage.getItem("theme")
    var home = document.getElementById('home')
    var games = document.getElementById('games')
    var apps = document.getElementById('apps')
    var proxy = document.getElementById('proxy')
    var blog = document.getElementById('blog')
    var settings = document.getElementById('settings')
    console.log(accent)
    console.log(theme)

    if (favicon) {
     console.log(favicon);
    } else {
        icon.href = "/imgs/favicon.png"
    }
    if (title) {
     console.log(title);
     document.title = title
    } else {
        localStorage.setItem("title", "Xenapsis - Grin");
        document.title = "Xenapsis - Grin"
    }

    if (accent) {
        home.src = "/imgs/navicons/" + accent + "-home.png";
        games.src = "/imgs/navicons/" + accent + "-games.png";
        apps.src = "/imgs/navicons/" + accent + "-apps.png";
        proxy.src = "/imgs/navicons/" + accent + "-proxy.png";
        blog.src = "/imgs/navicons/" + accent + "-blog.png";
        settings.src = "/imgs/navicons/" + accent + "-settings.png";
    }
    
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