document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon")
    const nav = document.getElementById("nav")
  
    menuIcon.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  
    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll("nav ul li a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("show")
      })
    })
  
    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", (event) => {
      const isClickInsideNav = nav.contains(event.target)
      const isClickOnMenuIcon = menuIcon.contains(event.target)
  
      if (!isClickInsideNav && !isClickOnMenuIcon) {
        nav.classList.remove("show")
      }
    })
  })
  
  