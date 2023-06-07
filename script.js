function tagClick(num) {

  let tags = ["web", "game", "swift"]
  tagElement = document.getElementsByClassName("proj-tag")[num]

  tagElement.classList.toggle("tag-selected")


  box = document.getElementById("proj-scroll")

  if (tagElement.classList.contains("tag-selected")) {
    box.classList.add("proj-" + tags[num])
  }else {
    box.classList.remove("proj-" + tags[num])

  }
}
