var nav = ` 
<li class="navlogo"><img class="navimgg" src="/imgs/navicons/favicon.png"><p1><p1>ㅤ</p1></p1><p1 class="navtextt"> Xenapsis</p1></li></a>
<ul class="navbar">
    <a class="navbutton" href="/index.html"><li class="navbarli"> <img id="home" class="navimg" src=""><p1>ㅤ</p1><p1> home</p1></li></a>
    <a class="navbutton" href="/games.html"><li class="navbarli"> <img id="games" class="navimg" src=""><p1>ㅤ</p1><p1> Games</p1></li></a>
    <a class="navbutton" href="/apps.html"><li class="navbarli"> <img id="apps" class="navimg" src=""><p1>ㅤ</p1><p1> apps</p1></li></a>
    <a class="navbutton" href="/proxy.html"><li class="navbarli" > <img id="proxy" class="navimg" src=""><p1>ㅤ</p1><p1 class="navtext"> Proxy</p1></li></a>
    <a class="settingsimg" href="/settings.html"><li class="navbarli"> <img id="settings" class="navimg settings" src=""></li></a>
    <a class="github" href="/social.html"><li class="navbarli"><p1>ㅤ</p1> Github/Discord</li></a>
</ul>`

document.querySelector("#navbar").insertAdjacentHTML("afterbegin", nav);