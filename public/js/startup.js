window.onload = function() {
    var icon = document.querySelector("link[rel='icon']");
    var page = window.location.pathname
    if (page !== "/proxyindex.html" || page !== "yourgameisloading.html") {
        icon.type = "image.png";
        icon.href = localStorage.getItem("favicon");
        var favicon = localStorage.getItem("favicon");
        var title = localStorage.getItem("title")
        var home = document.getElementById('home')
        var games = document.getElementById('games')
        var apps = document.getElementById('apps')
        var proxy = document.getElementById('proxy')
        var blog = document.getElementById('blog')
        var settings = document.getElementById('settings')
    }
    var accent = localStorage.getItem("accent")
    var theme = localStorage.getItem("theme")
    console.log(page)
    console.log(accent)
    console.log(theme)

    if (page !== "/proxyindex.html") {
        if (page !== "/yourgameisloading.html") {
            if (favicon) {
                console.log(favicon);
            } else {
                icon.href = "/imgs/favicon.png"
            };
            if (title) {
                console.log(title);
                document.title = title
            } else {
                localStorage.setItem("title", "Xenapsis - Grin");
                document.title = "Xenapsis - Grin"
            };
        
            if (accent) {
                home.src = "/imgs/navicons/" + accent + "-home.png";
                games.src = "/imgs/navicons/" + accent + "-games.png";
                apps.src = "/imgs/navicons/" + accent + "-apps.png";
                proxy.src = "/imgs/navicons/" + accent + "-proxy.png";
                blog.src = "/imgs/navicons/" + accent + "-blog.png";
                settings.src = "/imgs/navicons/" + accent + "-settings.png";
            };
        };
    };
    
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