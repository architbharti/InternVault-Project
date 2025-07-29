// Continue Buttons

let bttns = document.querySelectorAll(".btn");

bttns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let div1 = document.createElement("div");
    overlay.appendChild(div1);
    div1.classList.add("contPop");

    let p1 = document.createElement("p");
    p1.textContent = "Welcome to InternVault";
    p1.classList.add("head4");
    div1.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent =
      "InternVault has millions of oppurtunities so you can find the one you love.";
    p2.classList.add("subhead1");
    div1.appendChild(p2);

    let p3 = document.createElement("p");
    p3.textContent =
      "By continuing you agree to our Privacy Policy.Terms of Use and to receive emails from InternVault.";
    p3.classList.add("subhead2");
    div1.appendChild(p3);

    let disagree = document.createElement("input");
    disagree.setAttribute("type", "checkbox");
    disagree.setAttribute("id", "disagree");
    div1.appendChild(disagree);

    let lbl1 = document.createElement("label");
    lbl1.setAttribute("for", "disagree");
    lbl1.textContent =
      "Click here if you do not want to receive marketing emails from InternVault and affiliates.";
    lbl1.classList.add("subhead3");
    div1.appendChild(lbl1);

    let btn3 = document.createElement("button");
    btn3.classList.add("contBtn");
    btn3.textContent = "Continue";
    btn3.addEventListener("click", function () {
      window.location.href = "application.html";
      alert("Log In successful.");
    });
    div1.appendChild(btn3);

    let cross = document.createElement("i");
    cross.classList.add("fa-solid", "fa-xmark", "cross");
    div1.appendChild(cross);
    cross.addEventListener("click", function () {
      window.location.href = "landing.html";
    });

    document.querySelector("body").appendChild(overlay);
  });
});

// Open search Button

let btn4 = document.querySelector(".open");
btn4.addEventListener("click", function () { 

btn4.style.display = "none";

let div4 = document.createElement("div");
document.querySelector(".search").appendChild(div4);

  let div2 = document.createElement("div");
  div2.style.display = "flex";
  div4.appendChild(div2);
  
  // First list
  let list1 = document.createElement("ul");
  list1.style.listStyle = "none";
  div2.appendChild(list1);

  let item1 = document.createElement("li");
  item1.textContent = "Flexible Internships";
  item1.style.fontWeight = "bold";
  list1.appendChild(item1);

  let item2 = document.createElement("li");
  item2.textContent = "Data entry work from home jobs";
  list1.appendChild(item2);

  let item3 = document.createElement("li");
  item3.textContent = "Graphic designer work from home jobs";
  list1.appendChild(item3);

  let item4 = document.createElement("li");
  item4.textContent = "Proofreader work from home jobs";
  list1.appendChild(item4);

  let item5 = document.createElement("li");
  item5.textContent = "Customer service work from home jobs";
  list1.appendChild(item5);

  let item6 = document.createElement("li");
  item6.textContent = "Copywriter work from home jobs";
  list1.appendChild(item6);

  let item7 = document.createElement("li");
  item7.textContent = "Marketing work from home jobs";
  list1.appendChild(item7);

  let item8 = document.createElement("li");
  item8.textContent = "Developer work from home jobs";
  list1.appendChild(item8);

  let item9 = document.createElement("li");
  item9.textContent = "Social media work from home jobs";
  list1.appendChild(item9);

  let item10 = document.createElement("li");
  item10.textContent = "Finance work from home jobs";
  list1.appendChild(item10);

  let item11 = document.createElement("li");
  item11.textContent = "Accountant work from home jobs";
  list1.appendChild(item11);

  let item12 = document.createElement("li");
  item12.textContent = "Project manager work from home jobs";
  list1.appendChild(item12);

  let item13 = document.createElement("li");
  item13.textContent = "Personal assistant work from home jobs";
  list1.appendChild(item13);

  let item14 = document.createElement("li");
  item14.textContent = "Bookkeeper work from home jobs";
  list1.appendChild(item14);

  let item15 = document.createElement("li");
  item15.textContent = "Sales work from home jobs";
  list1.appendChild(item15);

  let item16 = document.createElement("li");
  item16.textContent = "Nursing work from home jobs";
  list1.appendChild(item16);

  let item17 = document.createElement("li");
  item17.textContent = "Administrative work from home jobs";
  list1.appendChild(item17);

  let item18 = document.createElement("li");
  item18.textContent = "Travel agent work from home jobs";
  list1.appendChild(item18);

  let item19 = document.createElement("li");
  item19.textContent = "UX work from home jobs";
  list1.appendChild(item19);

  let item20 = document.createElement("li");
  item20.textContent = "Transcription work from home jobs";
  list1.appendChild(item20);

  let item21 = document.createElement("li");
  item21.textContent = "Data scientist work from home jobs";
  list1.appendChild(item21);

  let item22 = document.createElement("li");
  item22.textContent = "HR work from home jobs";
  list1.appendChild(item22);

  let item23 = document.createElement("li");
  item23.textContent = "Recruiter work from home jobs";
  list1.appendChild(item23);

  let item24 = document.createElement("li");
  item24.textContent = "Proofreader work from home jobs";
  list1.appendChild(item24);

  let item25 = document.createElement("li");
  item25.textContent = "Insurance work from home jobs";
  list1.appendChild(item25);

  let item26 = document.createElement("li");
  item26.textContent = "Data analyst work from home jobs";
  list1.appendChild(item26);

  let item27 = document.createElement("li");
  item27.textContent = "Part time jobs London";
  list1.appendChild(item27);

  let item28 = document.createElement("li");
  item28.textContent = "Part time jobs Birmingham";
  list1.appendChild(item28);

  let item29 = document.createElement("li");
  item29.textContent = "Part time jobs in Leeds";
  list1.appendChild(item29);

  let item30 = document.createElement("li");
  item30.textContent = "Part time jobs in Glasgow";
  list1.appendChild(item30);

  let item31 = document.createElement("li");
  item31.textContent = "Part time jobs in Belfast";
  list1.appendChild(item31);

  let item32 = document.createElement("li");
  item32.textContent = "Part time jobs in Liverpool";
  list1.appendChild(item32);

  let item33 = document.createElement("li");
  item33.textContent = "Part time jobs in Sheffield";
  list1.appendChild(item33);

  let item34 = document.createElement("li");
  item34.textContent = "Part time jobs in Edinburgh";
  list1.appendChild(item34);

  let item35 = document.createElement("li");
  item35.textContent = "Part time jobs in Bristol";
  list1.appendChild(item35);

  let item36 = document.createElement("li");
  item36.textContent = "Part time jobs in Manchester";
  list1.appendChild(item36);

  let item37 = document.createElement("li");
  item37.textContent = "Part time jobs in Croydon";
  list1.appendChild(item37);

  let item38 = document.createElement("li");
  item38.textContent = "Part time jobs in Leicester";
  list1.appendChild(item38);

  let item39 = document.createElement("li");
  item39.textContent = "Part time jobs in Enfield";
  list1.appendChild(item39);

  let item40 = document.createElement("li");
  item40.textContent = "Part time jobs in Coventry";
  list1.appendChild(item40);

  let item41 = document.createElement("li");
  item41.textContent = "Part time jobs in Kingston upon Hull";
  list1.appendChild(item41);

  let item42 = document.createElement("li");
  item42.textContent = "Part time jobs in Cardiff";
  list1.appendChild(item42);

  let item43 = document.createElement("li");
  item43.textContent = "Part time jobs in Bradford";
  list1.appendChild(item43);

  let item44 = document.createElement("li");
  item44.textContent = "Part time jobs in Bolton";
  list1.appendChild(item44);

  let item45 = document.createElement("li");
  item45.textContent = "Part time jobs in Stoke-on-Trent";
  list1.appendChild(item45);

  let item46 = document.createElement("li");
  item46.textContent = "Part time jobs in Wolverhampton";
  list1.appendChild(item46);

  let item47 = document.createElement("li");
  item47.textContent = "Part time jobs in Plymouth";
  list1.appendChild(item47);

  let item48 = document.createElement("li");
  item48.textContent = "Part time jobs in Nottingham";
  list1.appendChild(item48);

  let item49 = document.createElement("li");
  item49.textContent = "Part time jobs in Southampton";
  list1.appendChild(item49);

  let item50 = document.createElement("li");
  item50.textContent = "Part time jobs in Reading";
  list1.appendChild(item50);

  let item51 = document.createElement("li");
  item51.textContent = "Part time jobs in Derby";
  list1.appendChild(item51);

  //Second List
  let list2 = document.createElement("ul");
  list2.style.listStyle = "none";
  div2.appendChild(list2);

  let item52 = document.createElement("li");
  item52.textContent = "Popular Internships";
  item52.style.fontWeight = "bold";
  list2.appendChild(item52);

  let item53 = document.createElement("li");
item53.textContent = "Support Worker";
list2.appendChild(item53);

let item54 = document.createElement("li");
item54.textContent = "Care Assistant";
list2.appendChild(item54);

let item55 = document.createElement("li");
item55.textContent = "Delivery Driver";
list2.appendChild(item55);

let item56 = document.createElement("li");
item56.textContent = "Registered Nurse";
list2.appendChild(item56);

let item57 = document.createElement("li");
item57.textContent = "Truck Driver";
list2.appendChild(item57);

let item58 = document.createElement("li");
item58.textContent = "Warehouse Worker";
list2.appendChild(item58);

let item59 = document.createElement("li");
item59.textContent = "Customer Service Representative";
list2.appendChild(item59);

let item60 = document.createElement("li");
item60.textContent = "Software Engineer";
list2.appendChild(item60);

let item61 = document.createElement("li");
item61.textContent = "Healthcare Assistant";
list2.appendChild(item61);

let item62 = document.createElement("li");
item62.textContent = "Veterinary Surgeon";
list2.appendChild(item62);

let item63 = document.createElement("li");
item63.textContent = "Account Manager";
list2.appendChild(item63);

let item64 = document.createElement("li");
item64.textContent = "Project Manager";
list2.appendChild(item64);

let item65 = document.createElement("li");
item65.textContent = "Chef";
list2.appendChild(item65);

let item66 = document.createElement("li");
item66.textContent = "Business Development Manager";
list2.appendChild(item66);

let item67 = document.createElement("li");
item67.textContent = "Sales Executive";
list2.appendChild(item67);

let item68 = document.createElement("li");
item68.textContent = "Senior Software Engineer";
list2.appendChild(item68);

let item69 = document.createElement("li");
item69.textContent = "Bus Driver";
list2.appendChild(item69);

let item70 = document.createElement("li");
item70.textContent = "Security Officer";
list2.appendChild(item70);

let item71 = document.createElement("li");
item71.textContent = "Cleaner";
list2.appendChild(item71);

let item72 = document.createElement("li");
item72.textContent = "Line Cook";
list2.appendChild(item72);

let item73 = document.createElement("li");
item73.textContent = "Veterinary Nurse";
list2.appendChild(item73);

let item74 = document.createElement("li");
item74.textContent = "Associate Dentist";
list2.appendChild(item74);

let item75 = document.createElement("li");
item75.textContent = "Driver";
list2.appendChild(item75);

let item76 = document.createElement("li");
item76.textContent = "Engineer";
list2.appendChild(item76);

let item77 = document.createElement("li");
item77.textContent = "Electrician";
list2.appendChild(item77);

let item78 = document.createElement("li");
item78.textContent = "Full Stack Developer";
list2.appendChild(item78);

let item79 = document.createElement("li");
item79.textContent = "Dental Nurse";
list2.appendChild(item79);

let item80 = document.createElement("li");
item80.textContent = "Caregiver";
list2.appendChild(item80);

let item81 = document.createElement("li");
item81.textContent = "Production Associate";
list2.appendChild(item81);

let item82 = document.createElement("li");
item82.textContent = "Data Scientist";
list2.appendChild(item82);

let item83 = document.createElement("li");
item83.textContent = "Deputy Manager";
list2.appendChild(item83);

let item84 = document.createElement("li");
item84.textContent = "Front End Developer";
list2.appendChild(item84);

let item85 = document.createElement("li");
item85.textContent = "Senior Care Assistant";
list2.appendChild(item85);

let item86 = document.createElement("li");
item86.textContent = "Pharmacist";
list2.appendChild(item86);

let item87 = document.createElement("li");
item87.textContent = "Sales Representative";
list2.appendChild(item87);

let item88 = document.createElement("li");
item88.textContent = "Head Chef";
list2.appendChild(item88);

let item89 = document.createElement("li");
item89.textContent = "Vehicle Technician";
list2.appendChild(item89);

let item90 = document.createElement("li");
item90.textContent = "Administrator";
list2.appendChild(item90);

let item91 = document.createElement("li");
item91.textContent = "Sous Chef";
list2.appendChild(item91);

let item92 = document.createElement("li");
item92.textContent = "Social Worker";
list2.appendChild(item92);


// Third list
let list3 = document.createElement("ul");
  list3.style.listStyle = "none";
  div2.appendChild(list3);

let item93 = document.createElement("li");
  item93.textContent = "Browse By City";
  item93.style.fontWeight = "bold";
  list3.appendChild(item93);

let item94 = document.createElement("li");
item94.textContent = "Mumbai";
list3.appendChild(item94);

let item95 = document.createElement("li");
item95.textContent = "Delhi";
list3.appendChild(item95);

let item96 = document.createElement("li");
item96.textContent = "Bengaluru";
list3.appendChild(item96);

let item97 = document.createElement("li");
item97.textContent = "Hyderabad";
list3.appendChild(item97);

let item98 = document.createElement("li");
item98.textContent = "Ahmedabad";
list3.appendChild(item98);

let item99 = document.createElement("li");
item99.textContent = "Chennai";
list3.appendChild(item99);

let item100 = document.createElement("li");
item100.textContent = "Kolkata";
list3.appendChild(item100);

let item101 = document.createElement("li");
item101.textContent = "Pune";
list3.appendChild(item101);

let item102 = document.createElement("li");
item102.textContent = "Jaipur";
list3.appendChild(item102);

let item103 = document.createElement("li");
item103.textContent = "Lucknow";
list3.appendChild(item103);

let item104 = document.createElement("li");
item104.textContent = "Indore";
list3.appendChild(item104);

let item105 = document.createElement("li");
item105.textContent = "Bhopal";
list3.appendChild(item105);

let item106 = document.createElement("li");
item106.textContent = "Patna";
list3.appendChild(item106);

let item107 = document.createElement("li");
item107.textContent = "Nagpur";
list3.appendChild(item107);

let item108 = document.createElement("li");
item108.textContent = "Chandigarh";
list3.appendChild(item108);

let item109 = document.createElement("li");
item109.textContent = "Coimbatore";
list3.appendChild(item109);

let item110 = document.createElement("li");
item110.textContent = "Visakhapatnam";
list3.appendChild(item110);

let item111 = document.createElement("li");
item111.textContent = "Raipur";
list3.appendChild(item111);

let item112 = document.createElement("li");
item112.textContent = "Ranchi";
list3.appendChild(item112);

let item113 = document.createElement("li");
item113.textContent = "Guwahati";
list3.appendChild(item113);

let item114 = document.createElement("li");
item114.textContent = "Surat";
list3.appendChild(item114);

let item115 = document.createElement("li");
item115.textContent = "Varanasi";
list3.appendChild(item115);

let item116 = document.createElement("li");
item116.textContent = "Amritsar";
list3.appendChild(item116);

let item117 = document.createElement("li");
item117.textContent = "Thiruvananthapuram";
list3.appendChild(item117);

let item118 = document.createElement("li");
item118.textContent = "Mysuru";
list3.appendChild(item118);

let item119 = document.createElement("li");
item119.textContent = "Vadodara";
list3.appendChild(item119);

let item120 = document.createElement("li");
item120.textContent = "Dehradun";
list3.appendChild(item120);

let item121 = document.createElement("li");
item121.textContent = "Udaipur";
list3.appendChild(item121);

let item122 = document.createElement("li");
item122.textContent = "Jodhpur";
list3.appendChild(item122);

let item123 = document.createElement("li");
item123.textContent = "Agra";
list3.appendChild(item123);

let item124 = document.createElement("li");
item124.textContent = "Shillong";
list3.appendChild(item124);

// Fourth List

let list4 = document.createElement("ul");
  list4.style.listStyle = "none";
  div2.appendChild(list4);

let item125 = document.createElement("li");
  item125.textContent = "Browse By CompanyName";
  item125.style.fontWeight = "bold";
  list4.appendChild(item125);

  let item126 = document.createElement("li");
item126.textContent = "Tata Consultancy Services (TCS)";
list4.appendChild(item126);

let item127 = document.createElement("li");
item127.textContent = "Infosys";
list4.appendChild(item127);

let item128 = document.createElement("li");
item128.textContent = "Wipro";
list4.appendChild(item128);

let item129 = document.createElement("li");
item129.textContent = "HCL Technologies";
list4.appendChild(item129);

let item130 = document.createElement("li");
item130.textContent = "Tech Mahindra";
list4.appendChild(item130);

let item131 = document.createElement("li");
item131.textContent = "Reliance Industries";
list4.appendChild(item131);

let item132 = document.createElement("li");
item132.textContent = "Adani Group";
list4.appendChild(item132);

let item133 = document.createElement("li");
item133.textContent = "Larsen & Toubro (L&T)";
list4.appendChild(item133);

let item134 = document.createElement("li");
item134.textContent = "Mahindra & Mahindra";
list4.appendChild(item134);

let item135 = document.createElement("li");
item135.textContent = "Bharti Airtel";
list4.appendChild(item135);

let item136 = document.createElement("li");
item136.textContent = "Hindustan Unilever Limited (HUL)";
list4.appendChild(item136);

let item137 = document.createElement("li");
item137.textContent = "Godrej Group";
list4.appendChild(item137);

let item138 = document.createElement("li");
item138.textContent = "Bajaj Auto";
list4.appendChild(item138);

let item139 = document.createElement("li");
item139.textContent = "Asian Paints";
list4.appendChild(item139);

let item140 = document.createElement("li");
item140.textContent = "Maruti Suzuki India";
list4.appendChild(item140);

let item141 = document.createElement("li");
item141.textContent = "Hero MotoCorp";
list4.appendChild(item141);

let item142 = document.createElement("li");
item142.textContent = "Tata Motors";
list4.appendChild(item142);

let item143 = document.createElement("li");
item143.textContent = "JSW Steel";
list4.appendChild(item143);

let item144 = document.createElement("li");
item144.textContent = "TVS Motor Company";
list4.appendChild(item144);

let item145 = document.createElement("li");
item145.textContent = "Vedanta Resources";
list4.appendChild(item145);

let item146 = document.createElement("li");
item146.textContent = "IndiGo Airlines (InterGlobe Aviation)";
list4.appendChild(item146);

let item147 = document.createElement("li");
item147.textContent = "Zee Entertainment Enterprises";
list4.appendChild(item147);

let item148 = document.createElement("li");
item148.textContent = "NTPC Limited";
list4.appendChild(item148);

let item149 = document.createElement("li");
item149.textContent = "State Bank of India (SBI)";
list4.appendChild(item149);

let item150 = document.createElement("li");
item150.textContent = "Bank of Baroda";
list4.appendChild(item150);


// fifth list

let list5 = document.createElement("ul");
  list5.style.listStyle = "none";
  div2.appendChild(list5);

let item151 = document.createElement("li");
  item151.textContent = "Popular Communities";
  item151.style.fontWeight = "bold";
  list5.appendChild(item151);

  let item152 = document.createElement("li");
item152.textContent = "Tech";
list5.appendChild(item152);

let item153 = document.createElement("li");
item153.textContent = "Salaries in Tech";
list5.appendChild(item153);

let item154 = document.createElement("li");
item154.textContent = "Jobs in Tech";
list5.appendChild(item154);

let item155 = document.createElement("li");
item155.textContent = "The Water Cooler";
list5.appendChild(item155);

let item156 = document.createElement("li");
item156.textContent = "Salaries in STEM";
list5.appendChild(item156);

let item157 = document.createElement("li");
item157.textContent = "Jobs in STEM";
list5.appendChild(item157);

let item158 = document.createElement("li");
item158.textContent = "Software Engineering";
list5.appendChild(item158);

let item159 = document.createElement("li");
item159.textContent = "Career Advice for Students";
list5.appendChild(item159);

let item160 = document.createElement("li");
item160.textContent = "Consulting";
list5.appendChild(item160);

let item161 = document.createElement("li");
item161.textContent = "Sales";
list5.appendChild(item161);

let item162 = document.createElement("li");
item162.textContent = "Salaries In Sales";
list5.appendChild(item162);

let item163 = document.createElement("li");
item163.textContent = "Jobs in Sales";
list5.appendChild(item163);

let item164 = document.createElement("li");
item164.textContent = "Retail & Hospitality";
list5.appendChild(item164);

let item165 = document.createElement("li");
item165.textContent = "Healthcare";
list5.appendChild(item165);

let item166 = document.createElement("li");
item166.textContent = "Finance";
list5.appendChild(item166);

let item167 = document.createElement("li");
item167.textContent = "Jobs in Healthcare";
list5.appendChild(item167);

let item168 = document.createElement("li");
item168.textContent = "Salaries in Healthcare";
list5.appendChild(item168);

let item169 = document.createElement("li");
item169.textContent = "Crazy Customer Stories";
list5.appendChild(item169);

let item170 = document.createElement("li");
item170.textContent = "Jobs in Finance";
list5.appendChild(item170);

let item171 = document.createElement("li");
item171.textContent = "Human Resources";
list5.appendChild(item171);

let item172 = document.createElement("li");
item172.textContent = "Salaries in HR";
list5.appendChild(item172);

let item173 = document.createElement("li");
item173.textContent = "HR Job Postings";
list5.appendChild(item173);

let item174 = document.createElement("li");
item174.textContent = "Retail & Hospitality Compensation";
list5.appendChild(item174);

let item175 = document.createElement("li");
item175.textContent = "Jobs in Retail & Hospitality";
list5.appendChild(item175);

let item176 = document.createElement("li");
item176.textContent = "Tech Strategy & Product";
list5.appendChild(item176);

let item177 = document.createElement("li");
item177.textContent = "Accounting";
list5.appendChild(item177);

let item178 = document.createElement("li");
item178.textContent = "Ask A Recruiter - Sales";
list5.appendChild(item178);

let item179 = document.createElement("li");
item179.textContent = "Jobs in Accounting";
list5.appendChild(item179);

let item180 = document.createElement("li");
item180.textContent = "Salaries in Accounting";
list5.appendChild(item180);

let item181 = document.createElement("li");
item181.textContent = "Teacher's Lounge";
list5.appendChild(item181);

let item182 = document.createElement("li");
item182.textContent = "Teachers";
list5.appendChild(item182);

let item183 = document.createElement("li");
item183.textContent = "Engineering";
list5.appendChild(item183);

let item184 = document.createElement("li");
item184.textContent = "Marketing";
list5.appendChild(item184);

let item185 = document.createElement("li");
item185.textContent = "Salaries in Finance";
list5.appendChild(item185);

let item186 = document.createElement("li");
item186.textContent = "Startups and Entrepreneurship";
list5.appendChild(item186);

let item187 = document.createElement("li");
item187.textContent = "Law";
list5.appendChild(item187);

let item188 = document.createElement("li");
item188.textContent = "Ask A Recruiter - Accounting";
list5.appendChild(item188);

let item189 = document.createElement("li");
item189.textContent = "Jobs for Teachers";
list5.appendChild(item189);

let item190 = document.createElement("li");
item190.textContent = "Ask A Recruiter - Law";
list5.appendChild(item190);

// close icon
let div3 = document.createElement("div");
div4.appendChild(div3);
div3.style.textAlign = "center";
let icon2 = document.createElement("i");
div3.appendChild(icon2);
icon2.classList.add("fa-solid" , "fa-angle-up" , "close");
div3.appendChild(icon2); 
icon2.addEventListener("click" , function(){
      div2.style.display = "none";
      icon2.style.display = "none";
      btn4.style.display = "inline";
});
});
