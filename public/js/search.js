const search = document.getElementById('searchInput');
const gamelist = document.getElementById('gameList');
search.addEventListener("input", (event) => {
const input = search.value.toLowerCase()
for(const gamebox of gameBoxes) {
  const title = gamebox.querySelector('.title').innerHTML.toLowerCase();
  if (title.includes(input)) {
    gamebox.style.display = "block";
  } else {
    gamebox.style.display = "none";
  };
}});