document.addEventListener("DOMContentLoaded", function () {
  // Inicializa o Swiper
  const swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  });

  // Modal de Promoção
  const promoModal = document.getElementById("promoModal");
  const closePromoModal = document.getElementById("closePromoModal");
  const closePromoModalf = document.getElementById("closePromoModalf");

  promoModal.style.display = "flex";

  closePromoModal.addEventListener("click", () => {
      promoModal.style.display = "none";
  });

  closePromoModalf.addEventListener("click", () => {
      promoModal.style.display = "none";
  });

  // Modal de Agendamento
  const whatsappModal = document.getElementById("whatsappModal");
  const openModalButtons = document.querySelectorAll(".open-modal");
  const cancelModal = document.getElementById("cancelModal");
  const goToWhatsApp = document.getElementById("goToWhatsApp");

  openModalButtons.forEach(button => {
      button.addEventListener("click", (e) => {
          e.preventDefault();
          whatsappModal.style.display = "flex";
      });
  });

  cancelModal.addEventListener("click", () => {
      whatsappModal.style.display = "none";
  });

  goToWhatsApp.addEventListener("click", () => {
      window.location.href = "https://wa.me/5511997360327?text=Olá,%20gostaria%20de%20agendar%20um%20horário.%20Como%20faço%20para%20participar%20da%20promoção?";
  });

  // Fecha o modal ao clicar fora
  window.addEventListener("click", (e) => {
      if (e.target === promoModal) {
          promoModal.style.display = "none";
      }
      if (e.target === whatsappModal) {
          whatsappModal.style.display = "none";
      }
  });
});