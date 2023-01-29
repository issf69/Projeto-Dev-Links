function toggleMode() {
    /*alert('oi ')*/
    const html = document.documentElement
    html.classList.toggle("light")
        //deconsiderar abaixo

    if (html.classList.contains('ligth')) {
        html.classList.remove('ligth')
    } else {
        html.classList.add('ligth')
    }
    //desconsiderar acima
    html.classList.toggle('ligth')
        // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")








    }

    /*Observação
    /*function toggleMode() {
      const html = document.documentElement
      html.classList.toggle("light")

      // pegar a tag img
      const img = document.querySelector("#profile img")

      // substituir a imagem
      if (html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
      } else {
        // set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
      }*/
}