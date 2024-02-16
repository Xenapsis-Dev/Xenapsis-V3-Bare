var nav = ` 
<ul class="navbar">
    <li class="navlogo"><img class="navimgg" src="/imgs/navicons/favicon.png"><p1><p1>ㅤ</p1></p1><p1 class="navtextt"> Xenapsis</p1></li></a>
    <a class="navbutton" href="/index.html"><li><p1>ㅤ</p1><img id="home" class="navimg" src="/imgs/navicons/normal-accent-home.png"> home</li></a>
    <a class="navbutton" href="/games.html"><li><p1>ㅤ</p1><img id="games" class="navimg" src="/imgs/navicons/normal-accent-games.png"> Games</li></a>
    <a class="navbutton" href="/apps.html"><li><p1>ㅤ</p1><img id="apps" class="navimg" src="/imgs/navicons/normal-accent-apps.png"> apps</li></a>
    <a class="navbutton" href="/proxy.html"><li><p1>ㅤ</p1><img id="proxy" class="navimg" src="/imgs/navicons/normal-accent-proxy.png"> Proxy</li></a>
    <a class="navbutton" href="/blogs.html"><li><p1>ㅤ</p1><img id="blog" class="navimg"  src="/imgs/navicons/normal-accent-blog.png"> Blog</li></a>
    <a class="navbutton" href="/settings.html"><li><p1>ㅤ</p1><img id="settings" class="navimg" src="/imgs/navicons/normal-accent-settings.png"> Settings</li></a>
</ul>`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", nav)