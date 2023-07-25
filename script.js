// function tagClick(num) {
//
//   let tags = ["web", "game", "swift"]
//   tagElement = document.getElementsByClassName("proj-tag")[num]
//
//   tagElement.classList.toggle("tag-selected")
//
//
//   box = document.getElementById("proj-scroll")
//
//   if (tagElement.classList.contains("tag-selected")) {
//     box.classList.add("proj-" + tags[num])
//   }else {
//     box.classList.remove("proj-" + tags[num])
//   }
// }


const slidesContainer = document.getElementsByClassName("proj-scroll")[0];
const slide = document.querySelector(".proj-card");

const slides = document.getElementsByClassName("proj-card");

const prevButton = document.getElementById("proj-left-button");
const nextButton = document.getElementById("proj-right-button");

const projname = document.getElementById("proj-name");
const projdesc = document.getElementById("proj-desc");

var projnum = 0;

nextButton.addEventListener("click", (event) => {
  projnum = Math.min(projnum + 1, slides.length - 1)
  updateScroll()
});


prevButton.addEventListener("click", () => {
  projnum = Math.max(projnum - 1, 0);
  updateScroll()
});

function updateScroll() {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft = projnum * slideWidth;
  console.log(slidesContainer.scrollLeft)
  console.log(slides);
  projname.innerHTML = slides[projnum].dataset.title;
  projdesc.innerHTML = slides[projnum].dataset.date + " • " + slides[projnum].dataset.desc;


}



updateScroll()
