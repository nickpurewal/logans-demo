body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff8f0;
  color: #333;
  text-align: center;
}
header {
  background: #a52a2a;
  color: white;
  padding: 1.5rem;
}
const menuData = [
  {name: "Sirloin Steak", price: "£22"},
  {name: "Steak Bacon & Cheese Burger", price: "£16"},
  {name: "Lamb Chops", price: "£20"},
  {name: "Loaded Nachos", price: "£9"},
  {name: "Tandoori Mixed Grill", price: "£18"}
];

function renderMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  menuData.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `<h3>${item.name}</h3><p>${item.price}</p>`;
    content.appendChild(div);
  });
}

function renderAbout() {
  document.getElementById("content").innerHTML =
    "<p>Welcome to Logan's Bar & Grill – where Tex-Mex fire meets spice. Great steaks, bold flavours and a relaxed grill-house vibe.</p>";
}

function renderContact() {
  document.getElementById("content").innerHTML =
    "<p>Email: hello@logansdemo.com<br>Phone: 020-000-0000</p>";
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.section === "menu") renderMenu();
    if (btn.dataset.section === "about") renderAbout();
    if (btn.dataset.section === "contact") renderContact();
  });
});

// default
renderMenu();
