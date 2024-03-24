var nav = ` 
<li class="navlogo"><img class="navimgg" src="/imgs/navicons/favicon.png"><p1><p1>ㅤ</p1></p1><p1 class="navtextt"> Xenapsis</p1></li></a>
<ul class="navbar">
    <a class="navbutton" href="/index.html"><li> <img id="home" class="navimg" src=""><p1>ㅤ</p1><p1> home</p1></li></a>
    <a class="navbutton" href="/games.html"><li> <img id="games" class="navimg" src=""><p1>ㅤ</p1><p1> Games</p1></li></a>
    <a class="navbutton" href="/apps.html"><li> <img id="apps" class="navimg" src=""><p1>ㅤ</p1><p1> apps</p1></li></a>
    <a class="navbutton" href="/proxy.html"><li> <img id="proxy" class="navimg" src=""><p1>ㅤ</p1><p1 class="navtext"> Proxy</p1></li></a>
    <a class="settingsimg" href="/settings.html"><li> <img id="settings" class="navimg settings" src=""></li></a>
    <a class="github" href="https://github.com/Xenapsis-dev/Xenapsis-V3-Bare"><li><p1>ㅤ</p1> Github</li></a>
</ul>`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", nav);