document.addEventListener("DOMContentLoaded", function() {
    var icon = document.querySelector("link[rel='icon']");
    var page = window.location.pathname
    if (page !== "/proxyindex.html") {
        if (page !== "/yourgameisloading.html")
        icon.type = "image.png";
        icon.href = localStorage.getItem("favicon");
        var favicon = localStorage.getItem("favicon");
        var title = localStorage.getItem("title")
        var home = document.getElementById('home')
        var games = document.getElementById('games')
        var apps = document.getElementById('apps')
        var proxy = document.getElementById('proxy')
        var settings = document.getElementById('settings')
    }
    var accent = localStorage.getItem("accent")
    var theme = localStorage.getItem("theme")
    console.log(page);
    console.log(accent);
    console.log(theme);

    if (page !== "/proxyindex.html") {
        if (page !== "/yourgameisloading.html") {
            if (accent) {
                home.src = "/imgs/navicons/" + accent + "-home.png";
                games.src = "/imgs/navicons/" + accent + "-games.png";
                apps.src = "/imgs/navicons/" + accent + "-apps.png";
                proxy.src = "/imgs/navicons/" + accent + "-proxy.png";
                settings.src = "/imgs/navicons/" + accent + "-settings.png";
            } else {
                home.src = "/imgs/navicons/normal-accent-home";
                games.src = "/imgs/navicons/normal-accent-games";
                apps.src = "/imgs/navicons/normal-accent-apps";
                proxy.src = "/imgs/navicons/normal-accent-proxy";
                settings.src = "/imgs/navicons/normal-accent-settings";
                window.location.reload()
            }
            
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
        };
    };
    
    if (accent) {
        console.log(accent);
        console.log(theme);
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add(accent);
            document.body.classList.add(theme);
        } else {
            document.body.removeAttribute('class');
            document.body.classList.add(accent);
            document.body.classList.add('darktheme');
            localStorage.setItem("theme", "darktheme");

        }
    } else {
        if (theme) {
            document.body.removeAttribute('class');
            document.body.classList.add('normal-accent');
            document.body.classList.add(theme);
        } else {
            document.body.removeAttribute('class')
            document.body.classList.add('normal-accent');
            document.body.classList.add("darktheme");
            localStorage.setItem("theme", "darktheme");
            localStorage.setItem("accent", "normal-accent");
        }
    }

    setTimeout(function(){
        console.log(`
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ㅤ
        ██╗░░██╗███████╗███╗░░██╗░█████╗░██████╗░░██████╗██╗░██████╗
        ╚██╗██╔╝██╔════╝████╗░██║██╔══██╗██╔══██╗██╔════╝██║██╔════╝
        ░╚███╔╝░█████╗░░██╔██╗██║███████║██████╔╝╚█████╗░██║╚█████╗░
        ░██╔██╗░██╔══╝░░██║╚████║██╔══██║██╔═══╝░░╚═══██╗██║░╚═══██╗
        ██╔╝╚██╗███████╗██║░╚███║██║░░██║██║░░░░░██████╔╝██║██████╔╝
        ╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░░░░╚═════╝░╚═╝╚═════╝░
        🐳 Have fun gaming during school or even work! 🐳
        (Do not paste anything into here unless you know what it does)`);
    }, 5000);
    let script = document.createElement('script');
    script.src = "https://arc.io/widget.min.js#EuXmrNP6"
    document.getElementsByTagName('head')[0].appendChild(script);
    script.async = true
 
});

let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

var erudaon = false;
function consol() {
    const iframe = $('#frame')[0];
    const windoww = iframe.contentWindow;
    const documentt = iframe.contentDocument;
    if (erudaon === false) {
        const erudaonscript = documentt.createElement('script');
        erudaonscript.src = "//cdn.jsdelivr.net/npm/eruda"
        erudaonscript.onload = function() {
            windoww.eruda.init();
            windoww.eruda.show();
        }
        erudaon = true
        documentt.getElementsByTagName('head')[0].appendChild(erudaonscript)
    } else {
        windoww.eruda.destroy();
        erudaon = false
    }
}
