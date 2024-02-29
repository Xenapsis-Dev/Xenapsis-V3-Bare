var nav = ` 
<li class="navlogo"><img class="navimgg" src="/imgs/navicons/favicon.png"><p1><p1>ㅤ</p1></p1><p1 class="navtextt"> Xenapsis</p1></li></a>
<ul class="navbar">
    <a class="navbutton" href="/index.html"><li><p1>ㅤ</p1><img id="home" class="navimg" src=""> home</li></a>
    <a class="navbutton" href="/games.html"><li><p1>ㅤ</p1><img id="games" class="navimg" src=""> Games</li></a>
    <a class="navbutton" href="/apps.html"><li><p1>ㅤ</p1><img id="apps" class="navimg" src=""> apps</li></a>
    <a class="navbutton" href="/proxy.html"><li><p1>ㅤ</p1><img id="proxy" class="navimg" src=""> Proxy</li></a>
    <a class="navbutton" href="/settings.html"><li><p1>ㅤ</p1><img id="settings" class="navimg" src=""> Settings</li></a>
</ul>`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", nav)