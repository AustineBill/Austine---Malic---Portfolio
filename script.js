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
      { name: "ReactJS", icon: "fab fa-react" },
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "Tailwind CSS", icon: "fas fa-wind" },
      { name: "Bootstrap", icon: "fab fa-bootstrap" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Nodejs", icon: "fab fa-node-js" },
      { name: "ExpressJs", icon: "fas fa-server" },
      { name: "RestAPI", icon: "fas fa-cogs" },
    ],
  },
  {
    title: "Deployment",
    items: [
      { name: "Netlify", icon: "fas fa-rocket" },
      { name: "Vercel", icon: "fas fa-code-branch" },
      { name: "Render", icon: "fas fa-globe" },
      { name: "Heroku", icon: "fab fa-heroku" },
    ],
  },
  {
    title: "Database Management",
    items: [
      { name: "MySQL", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
    ],
  },
  {
    title: "Tools and Technologies",
    items: [
      { name: "Figma", icon: "fab fa-figma" },
      { name: "VSCode", icon: "fas fa-code" },
      { name: "Github/Github Desktop", icon: "fab fa-github" },
      { name: "pgAdmin", icon: "fas fa-tools" },
      { name: "DBeaver", icon: "fas fa-database" },
    ],
  },
  {
    title: "Programming Language",
    items: [
      { name: "C Language", icon: "fas fa-code" },
      { name: "C++ Language", icon: "fas fa-code" },
      { name: "Python Language", icon: "fab fa-python" },
      { name: "Javascript Language", icon: "fab fa-js" },
    ],
  },
  {
    title: "AWS Cloud Services",
    items: [
      { name: "AWS Amplify", icon: "fab fa-aws" },
      { name: "AWS RDS", icon: "fas fa-database" },
      { name: "AWS S3 Bucket", icon: "fas fa-cloud-upload-alt" },
      { name: "AWS Lambda", icon: "fas fa-code" },
      { name: "AWS API Gateway", icon: "fas fa-network-wired" },
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
        <i class="${item.icon || "fas fa-check"}"></i>
        
          <h3>${item.name}</h3>
          ${item.level ? `<p>${item.level}</p>` : ""}
      
      </article>
    `
      )
      .join("")}
  </div>
`;

  container.appendChild(section);
});
