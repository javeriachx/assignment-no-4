let switchTheme = document.getElementById("toggleTheme");
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  switchTheme.innerText = "Switch to Light Theme";
} else {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  switchTheme.innerText = "Switch to Dark Theme";
}


switchTheme.addEventListener('click', function() {
  if (document.body.style.backgroundColor === 'black') {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    switchTheme.innerText = 'Switch to Dark Theme';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    switchTheme.innerText = 'Switch to Light Theme';
    localStorage.setItem('theme', 'dark');
  }
});