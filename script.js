const peoploIntro = document.getElementById("intro");

const peopleInfos = [
  {
    id: 1,
    portrait: "img",
    name: "ner",
    job: "mergejil",
    intro: "introduction",
  },
  {
    id: 2,
    portrait: "img",
    name: "ner",
    job: "mergejil",
    intro: "introduction",
  },
];

console.log(peopleInfos);

const selectContent = (peopleInfoId) => {
  peoploIntro.innerHTML = peopleInfos.selectOnePeople;
};

console.log(selectContent());
