let btns = document.querySelectorAll(".apply");

btns.forEach
(btn1 => {
    btn1.addEventListener("click", function () {
        this.innerHTML = '<i class="fa-solid fa-check" style="font-size: 10px; margin-right: 5px;"></i>Applied';
        this.classList.add("applied");
        this.disabled = true;
    });
});


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

let jobs = document.querySelector(".findjob");
jobs.addEventListener("click", function () {
  window.location.href = "jobs.html";
});

// Job title filter

document.addEventListener("DOMContentLoaded", function() {
  let icon7 = document.querySelector(".openjobtitle");
  icon7.addEventListener("click", function() {

   icon7.style.display = "none";

    let div5 = document.createElement("div");
    document.querySelector(".filter2").appendChild(div5);
    div5.style.textAlign = "left";

    let input7 = document.createElement("input");
input7.setAttribute("type", "checkbox");
input7.setAttribute("id", "adminCheckbox"); 
div5.appendChild(input7);

let label7 = document.createElement("label");
label7.setAttribute("for", "adminCheckbox");
label7.textContent = "Administrator";
div5.appendChild(label7);
div5.appendChild(document.createElement("br"));


let input8 = document.createElement("input");
input8.setAttribute("type", "checkbox");
input8.setAttribute("id", "artsCheckbox");
div5.appendChild(input8);

let label8 = document.createElement("label");
label8.setAttribute("for", "artsCheckbox");
label8.textContent = "Arts & Design";
div5.appendChild(label8);
div5.appendChild(document.createElement("br"));

let input9 = document.createElement("input");
input9.setAttribute("type", "checkbox");
input9.setAttribute("id", "businessCheckbox");
div5.appendChild(input9);

let label9 = document.createElement("label");
label9.setAttribute("for", "businessCheckbox");
label9.textContent = "Business";
div5.appendChild(label9);
div5.appendChild(document.createElement("br"));

let input10 = document.createElement("input");
input10.setAttribute("type", "checkbox");
input10.setAttribute("id", "consultingCheckbox");
div5.appendChild(input10);

let label10 = document.createElement("label");
label10.setAttribute("for", "consultingCheckbox");
label10.textContent = "Consulting";
div5.appendChild(label10);
div5.appendChild(document.createElement("br"));

let input11 = document.createElement("input");
input11.setAttribute("type", "checkbox");
input11.setAttribute("id", "customerCheckbox");
div5.appendChild(input11);

let label11 = document.createElement("label");
label11.setAttribute("for", "customerCheckbox");
label11.textContent = "Customer Services & Support";
div5.appendChild(label11);
div5.appendChild(document.createElement("br"));

let input12 = document.createElement("input");
input12.setAttribute("type", "checkbox");
input12.setAttribute("id", "educationCheckbox");
div5.appendChild(input12);

let label12 = document.createElement("label");
label12.setAttribute("for", "educationCheckbox");
label12.textContent = "Education";
div5.appendChild(label12);
div5.appendChild(document.createElement("br"));

let input13 = document.createElement("input");
input13.setAttribute("type", "checkbox");
input13.setAttribute("id", "engineeringCheckbox");
div5.appendChild(input13);

let label13 = document.createElement("label");
label13.setAttribute("for", "engineeringCheckbox");
label13.textContent = "Engineering";
div5.appendChild(label13);
div5.appendChild(document.createElement("br"));

let input14 = document.createElement("input");
input14.setAttribute("type", "checkbox");
input14.setAttribute("id", "financeCheckbox");
div5.appendChild(input14);

let label14 = document.createElement("label");
label14.setAttribute("for", "financeCheckbox");
label14.textContent = "Finance & Accounting";
div5.appendChild(label14);
div5.appendChild(document.createElement("br"));

let input15 = document.createElement("input");
input15.setAttribute("type", "checkbox");
input15.setAttribute("id", "healthcareCheckbox");
div5.appendChild(input15);

let label15 = document.createElement("label");
label15.setAttribute("for", "healthcareCheckbox");
label15.textContent = "Healthcare";
div5.appendChild(label15);
div5.appendChild(document.createElement("br"));

let input16 = document.createElement("input");
input16.setAttribute("type", "checkbox");
input16.setAttribute("id", "hrCheckbox");
div5.appendChild(input16);

let label16 = document.createElement("label");
label16.setAttribute("for", "hrCheckbox");
label16.textContent = "Human Resources";
div5.appendChild(label16);
div5.appendChild(document.createElement("br"));

let input17 = document.createElement("input");
input17.setAttribute("type", "checkbox");
input17.setAttribute("id", "itCheckbox");
div5.appendChild(input17);

let label17 = document.createElement("label");
label17.setAttribute("for", "itCheckbox");
label17.textContent = "Information Technology";
div5.appendChild(label17);
div5.appendChild(document.createElement("br"));

let input18 = document.createElement("input");
input18.setAttribute("type", "checkbox");
input18.setAttribute("id", "legalCheckbox");
div5.appendChild(input18);

let label18 = document.createElement("label");
label18.setAttribute("for", "legalCheckbox");
label18.textContent = "Legal";
div5.appendChild(label18);
div5.appendChild(document.createElement("br"));

let input19 = document.createElement("input");
input19.setAttribute("type", "checkbox");
input19.setAttribute("id", "marketingCheckbox");
div5.appendChild(input19);

let label19 = document.createElement("label");
label19.setAttribute("for", "marketingCheckbox");
label19.textContent = "Marketing";
div5.appendChild(label19);
div5.appendChild(document.createElement("br"));

let input20 = document.createElement("input");
input20.setAttribute("type", "checkbox");
input20.setAttribute("id", "mediaCheckbox");
div5.appendChild(input20);

let label20 = document.createElement("label");
label20.setAttribute("for", "mediaCheckbox");
label20.textContent = "Media & Communications";
div5.appendChild(label20);
div5.appendChild(document.createElement("br"));

let input21 = document.createElement("input");
input21.setAttribute("type", "checkbox");
input21.setAttribute("id", "militaryCheckbox");
div5.appendChild(input21);

let label21 = document.createElement("label");
label21.setAttribute("for", "militaryCheckbox");
label21.textContent = "Military & Protective Services";
div5.appendChild(label21);
div5.appendChild(document.createElement("br"));

let input22 = document.createElement("input");
input22.setAttribute("type", "checkbox");
input22.setAttribute("id", "operationsCheckbox");
div5.appendChild(input22);

let label22 = document.createElement("label");
label22.setAttribute("for", "operationsCheckbox");
label22.textContent = "Operations";
div5.appendChild(label22);
div5.appendChild(document.createElement("br"));

let input23 = document.createElement("input");
input23.setAttribute("type", "checkbox");
input23.setAttribute("id", "otherCheckbox");
div5.appendChild(input23);

let label23 = document.createElement("label");
label23.setAttribute("for", "otherCheckbox");
label23.textContent = "Other";
div5.appendChild(label23);
div5.appendChild(document.createElement("br"));

let input24 = document.createElement("input");
input24.setAttribute("type", "checkbox");
input24.setAttribute("id", "productCheckbox");
div5.appendChild(input24);

let label24 = document.createElement("label");
label24.setAttribute("for", "productCheckbox");
label24.textContent = "Product & Project Management";
div5.appendChild(label24);
div5.appendChild(document.createElement("br"));

let input25 = document.createElement("input");
input25.setAttribute("type", "checkbox");
input25.setAttribute("id", "researchCheckbox");
div5.appendChild(input25);

let label25 = document.createElement("label");
label25.setAttribute("for", "researchCheckbox");
label25.textContent = "Research & Science";
div5.appendChild(label25);
div5.appendChild(document.createElement("br"));

let input26 = document.createElement("input");
input26.setAttribute("type", "checkbox");
input26.setAttribute("id", "retailCheckbox");
div5.appendChild(input26);

let label26 = document.createElement("label");
label26.setAttribute("for", "retailCheckbox");
label26.textContent = "Retail & Food Services";
div5.appendChild(label26);
div5.appendChild(document.createElement("br"));

let input27 = document.createElement("input");
input27.setAttribute("type", "checkbox");
input27.setAttribute("id", "salesCheckbox");
div5.appendChild(input27);

let label27 = document.createElement("label");
label27.setAttribute("for", "salesCheckbox");
label27.textContent = "Sales";
div5.appendChild(label27);
div5.appendChild(document.createElement("br"));

let input28 = document.createElement("input");
input28.setAttribute("type", "checkbox");
input28.setAttribute("id", "laborCheckbox");
div5.appendChild(input28);

let label28 = document.createElement("label");
label28.setAttribute("for", "laborCheckbox");
label28.textContent = "Skilled Labor & Manufacturing";
div5.appendChild(label28);
div5.appendChild(document.createElement("br"));

let input29 = document.createElement("input");
input29.setAttribute("type", "checkbox");
input29.setAttribute("id", "transportCheckbox");
div5.appendChild(input29);

let label29 = document.createElement("label");
label29.setAttribute("for", "transportCheckbox");
label29.textContent = "Transportation";
div5.appendChild(label29);
div5.appendChild(document.createElement("br"));

let icon8 = document.createElement("i");
icon8.classList.add("fa-solid", "fa-angle-up");
document.querySelector(".head12").appendChild(icon8);
icon8.addEventListener("click" , function(){
      div5.style.display ="none";
      icon7.style.display = "inline";
      icon8.style.display = "none";
});

});
});

// Get all company1 divs
let companies = document.querySelectorAll(".company1");

companies.forEach(function(company) {
  let icon9 = document.createElement("button");
  icon9.classList.add("icon9" , "thisicon");
  icon9.textContent = "Apply";
  company.appendChild(icon9);

  let icon10 = document.createElement("button");
  icon10.classList.add("icon10" ,  "thisicon");
  icon10.textContent = "View More";
  company.appendChild(icon10);
});

let icon11 = document.querySelector(".clear");

icon11.addEventListener("click", function () {
  document.querySelectorAll(".input6").forEach(function (input) {
    input.value = "";
  });
});

let applyall = document.querySelectorAll(".icon9");

applyall.forEach(function(icon9){
  icon9.addEventListener("click" , function(){
    window.location.href = "appform.html";
  })
})






