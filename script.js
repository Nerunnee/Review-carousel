const peoploIntro = document.getElementById("intro");

const peopleInfos = [
  {
    portraitImg: "./img/zurag1.jpg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    portraitImg: "./img/zurag2.jpg",
    name: "Winter Watts",
    job: "UX DESIGNER",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    portraitImg: "./img/zurag3.jpg",
    name: "Jakob Lucero",
    job: "BACKEND DEVELOPER",
    intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

let index = 0;

const currentPerson = peopleInfos[index];

const next = () => {
  index++;
  selectContent();
};

const pre = () => {
  index--;
  selectContent();
};

const selectContent = () => {
  const person = peopleInfos[index];

  if (index < peopleInfos.length) {
    peoploIntro.innerHTML = ` 
    <div class="person-container">
      <img src="${person.portraitImg}" alt="" />
      <h4>${person.name}</h4>
      <h6>${person.job}</h6>
      <p>${person.intro}</p>
    </div>`;
  }
};

const surpriseBtn = () => {
  index = Math.floor(Math.random() * peopleInfos.length);

  selectContent();
};

selectContent();
