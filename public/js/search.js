const search = document.getElementById('searchInput');
const gamelist = document.getElementById('gameList');
search.addEventListener("input", (event) => {
const input = search.value.toLowerCase()
for(const gamebox of gamelist.children) {
  const title = gamebox.querySelector('.title').innerHTML.toLowerCase();
  if (title.includes(input)) {
    gamebox.removeAttribute('class')
    gamebox.classList.add('box')
  } else {
    gamebox.removeAttribute('class')
    gamebox.classList.add('box-closed')
  };
}});

var searchtag = window.location.search;
var urlparam = new URLSearchParams(searchtag);
var tagg = urlparam.get("tag");
console.log(tagg);

for (const gamebox of gamelist.children) {
  let tag = gamebox.querySelector('.tags').innerHTML.toLocaleLowerCase();
  console.log(tag)
  if (tag.includes(tagg)) {
    gamebox.removeAttribute('class')
    gamebox.classList.add('box')
  } else {
    gamebox.removeAttribute('class')
    gamebox.classList.add('box-closed')
  }
}
const searchbytag = document.getElementById('searchTag');

searchbytag.addEventListener("input", (event) => {
  const input = searchbytag.value.toLowerCase()
  for(const gamebox of gamelist.children) {
    let tag = gamebox.querySelector('.tags').innerHTML.toLocaleLowerCase();
    if (tag.includes(input)) {
      gamebox.removeAttribute('class')
      gamebox.classList.add('box')
    } else {
      gamebox.removeAttribute('class')
      gamebox.classList.add('box-closed')
    };
  }});
