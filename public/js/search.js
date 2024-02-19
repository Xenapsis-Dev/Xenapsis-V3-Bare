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