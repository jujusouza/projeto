function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver ligth mode, adicionar a imagem light
    img.set.setAttribute("src", "/.assets.avatar-ligth.png")
  } else {
  }

  // se tiver sem light mode, adicionar a imagem normal
  img.set.setAttribute("src", "/.assets.avatar.png")
}
