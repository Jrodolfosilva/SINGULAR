$(document).ready(function() {
  // Função para inicializar o Slick Slider
  function iniciarSlickSlider() {
      $('.slider_property').slick({
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
  }

  // Função para verificar se os elementos com a classe "card" estão na página
  function verificarCardsNaPagina() {
      const cards = $('.card');
      if (cards.length > 0) {
          // Os elementos com a classe "card" foram inseridos na página, inicie o Slick Slider
          iniciarSlickSlider();
      } else {
          // Os elementos ainda não foram inseridos, aguarde um momento e verifique novamente
          setTimeout(verificarCardsNaPagina, 1000); // Verifica a cada segundo (você pode ajustar o intervalo conforme necessário)
      }
  }

  // Inicie a verificação dos elementos com a classe "card"
  verificarCardsNaPagina();
});
