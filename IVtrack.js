// Personal div having search , dark/light mode , profile

let div4 = document.createElement("div");
div4.classList.add("personal");
document.querySelector(".mainNav").appendChild(div4);

let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "search");
input1.setAttribute("placeholder", "Search");
input1.classList.add("searching");
div4.appendChild(input1);

// dark and light mode
let icon3 = document.createElement("button");
icon3.id = "lghtDrk";
icon3.style.color = "yellow";
icon3.classList.add("lghtDrk-btn");
div4.appendChild(icon3);

let icon4 = document.createElement("i");
icon4.id = "modeIcon";
icon4.classList.add("fas", "fa-sun"); // Default icon (light mode)

icon3.appendChild(icon4);

document.body.classList.add("light-mode");

icon3.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode", !isDark);

  icon4.classList.toggle("fa-sun", !isDark);
  icon4.classList.toggle("fa-moon", isDark);
});

// profile dropdown menu

let icon5 = document.createElement("i");
div4.appendChild(icon5);
icon5.classList.add("fa-solid", "fa-circle-user", "profile");

let dropdown = document.createElement("div");
dropdown.classList.add("dropdown-menu");

let ul = document.createElement("ul");

// ===== Profile Item =====
const profileLi = document.createElement("li");
const profileBtn = document.createElement("button");
profileBtn.textContent = "Profile";
profileBtn.type = "button";
profileBtn.style.border = "none";
profileBtn.style.background = "transparent";
profileBtn.style.color = "inherit";
profileBtn.style.cursor = "pointer";
profileBtn.style.width = "100%";

profileBtn.addEventListener("click", () => {
  window.location.href = "profile.html";
});

profileLi.appendChild(profileBtn);
ul.appendChild(profileLi);

// ===== Account Settings Item =====
const settingsLi = document.createElement("li");
const settingsBtn = document.createElement("button");
settingsBtn.textContent = "Account settings";
settingsBtn.type = "button";
settingsBtn.style.border = "none";
settingsBtn.style.background = "transparent";
settingsBtn.style.color = "inherit";
settingsBtn.style.cursor = "pointer";
settingsBtn.style.width = "100%";

settingsBtn.addEventListener("click", () => {
  window.location.href = "settings.html";
});

settingsLi.appendChild(settingsBtn);
ul.appendChild(settingsLi);

// ===== Notifications Item =====
const notificationsLi = document.createElement("li");
const notificationsBtn = document.createElement("button");
notificationsBtn.textContent = "Notifications";
notificationsBtn.type = "button";
notificationsBtn.style.border = "none";
notificationsBtn.style.background = "transparent";
notificationsBtn.style.color = "inherit";
notificationsBtn.style.cursor = "pointer";
notificationsBtn.style.width = "100%";

notificationsBtn.addEventListener("click", () => {
  let overlay = document.createElement("div");
    overlay.classList.add("overlaynotifi");

    let div1 = document.createElement("div");
    overlay.appendChild(div1);
    div1.classList.add("notifiPop");

    let span1 = document.createElement("p");
    span1.textContent = "Notification Center"
    span1.classList.add("subhead8");
    div1.appendChild(span1);
    div1.appendChild(document.createElement("br"));

    let span2 = document.createElement("p");
    span2.classList.add("subhead9");
    span2.textContent = "No New Notifications";
    div1.appendChild(span2);
    div1.appendChild(document.createElement("br"));

    let icon16 = document.createElement("i");
    icon16.classList.add("fa-solid" , "fa-bell");
    span2.appendChild(icon16);

    let icon17 = document.createElement("button");
    div1.appendChild(icon17);
    icon17.textContent = "Close";
    icon17.classList.add("hide");

    icon17.addEventListener("click" , function(){
           div1.style.display = "none";
           overlay.style.display = "none";
    });

    document.querySelector("body").appendChild(overlay);
});

notificationsLi.appendChild(notificationsBtn);
ul.appendChild(notificationsLi);

const signOutItem = document.createElement("li");
signOutItem.classList.add("sign-out");

const signOutButton = document.createElement("button");
signOutButton.textContent = "Sign out";
signOutButton.style.border = "none";
signOutButton.style.background = "transparent";
signOutButton.style.color = "inherit";
signOutButton.style.cursor = "pointer";

signOutButton.addEventListener("click", () => {
  alert("Signing out...");
  window.location.href = "landing.html";
});

signOutItem.appendChild(signOutButton);
ul.appendChild(signOutItem);

dropdown.appendChild(ul);

// Append dropdown to body
document.querySelector("body").appendChild(dropdown);

icon5.addEventListener("click", (e) => {
  e.stopPropagation();
  let isVisible = dropdown.style.display === "block";
  dropdown.style.display = isVisible ? "none" : "block";
  let rect = icon5.getBoundingClientRect();
  dropdown.style.top = `${rect.bottom + window.scrollY}px`;
  dropdown.style.right = `${window.innerWidth - rect.right}px`;
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

let view1 = document.querySelector(".view1");
view1.addEventListener("click" , function(){
      window.location.href = "viewDetails1.html";
});
let view2 = document.querySelector(".view2");
view2.addEventListener("click" , function(){
      window.location.href = "viewDetails2.html";
});
let view3 = document.querySelector(".view3");
view3.addEventListener("click" , function(){
      window.location.href = "viewdetails3.html";
});
let view4 = document.querySelector(".view4");
view4.addEventListener("click" , function(){
      window.location.href = "viewDetails4.html";
});
let view5 = document.querySelector(".view5");
view5.addEventListener("click" , function(){
      window.location.href = "viewDetails5.html";
});