function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;

const experienceData = [
  {
    title: "Frontend Development",
    items: [
      { name: "ReactJS", level: "Intermediate" },
      { name: "HTML", level: "Intermediate" },
      { name: "CSS", level: "Intermediate" },
      { name: "Bootstrap", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    items: [{ name: "Nodejs" }, { name: "ExpressJs" }, { name: "RestAPI" }],
  },
  {
    title: "Deployment",
    items: [
      { name: "Netlify" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Heroku" },
    ],
  },
  {
    title: "Database Management",
    items: [
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
    ],
  },
  {
    title: "Tools and Technologies",
    items: [
      { name: "Figma" },
      { name: "VSCode" },
      { name: "Github/Github Desktop" },
      { name: "pgAdmin" },
      { name: "DBeaver" },
    ],
  },
  {
    title: "Programming Language",
    items: [
      { name: "C Language", level: "Basic" },
      { name: "C++ Language", level: "Intermediate" },
      { name: "Python Language", level: "Basic" },
      { name: "Javascript Language", level: "Intermediate" },
    ],
  },
];

const container = document.getElementById("experience-container");

experienceData.forEach((group) => {
  const section = document.createElement("div");
  section.className = "details-container";

  section.innerHTML = `
    <h2 class="experience-sub-title">${group.title}</h2>
    <div class="article-container">
      ${group.items
        .map(
          (item) => `
        <article>
          <i class="fas fa-check"></i>
          <div>
            <h3>${item.name}</h3>
            ${item.level ? `<p>${item.level}</p>` : ""}
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;
  container.appendChild(section);
});
