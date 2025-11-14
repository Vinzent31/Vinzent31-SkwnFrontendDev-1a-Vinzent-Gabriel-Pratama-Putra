$(document).ready(function () {
  const carousel = $("#carousel");
  const CARD_WIDTH = 260 + 24;
  let currentIndex = 0;

  $.get("https://dummyjson.com/products?limit=5", function (data) {

    const customProducts = [
        { title: "Simple Sofa", price: 329, thumbnail: "assets/images/carousel1.jpg" },
      { title: "Und Chair", price: 329, thumbnail: "assets/images/carousel2.jpg" },
      { title: "Orange Sofa", price: 329, thumbnail: "assets/images/carousel3.jpg" },
      { title: "Wooden Table", price: 329, thumbnail: "assets/images/carousel4.jpg" },
      { title: "Wooden Shelf", price: 329, thumbnail: "assets/images/carousel5.jpg" },
    ];


    customProducts.forEach((p) => {
      carousel.append(`
        <div class="product-card">
          <img src="${p.thumbnail}" alt="${p.title}">
          <div class="product-info">
            <span class="price-tag">$${p.price}</span>
            <h3>${p.title}</h3>
          </div>
        </div>
      `);
    });


    $(".product-card").hide().each(function (i) {
      $(this).delay(150 * i).fadeIn(400);
    });
  });

  const container = document.getElementById("carousel");
  $("#nextBtn").click(() => container.scrollBy({ left: 300, behavior: "smooth" }));
  $("#prevBtn").click(() => container.scrollBy({ left: -300, behavior: "smooth" }));
});

// CATEGORIES
$(document).ready(function() {
      $('.category-item').click(function() {
        if ($(this).hasClass('room') || $(this).hasClass('active')) {
          $(this).removeClass('room active');
          $(this).find('.category-description').slideUp(300);
        } else {
          $('.category-item').removeClass('room active');
          $('.category-description').slideUp(300);
    
          $(this).addClass('room');
          $(this).find('.category-description').slideDown(300);
        }
      });

      
      $('.category-item').hover(
        function() {
          if (!$(this).hasClass('room') && !$(this).hasClass('active')) {
            $(this).css('transform', 'translateX(3px)');
          }
        },
        function() {
          $(this).css('transform', 'translateX(0)');
        }
      );
    });
// nav
  $(document).ready(function() {
      
      $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('#mobileMenu').toggleClass('active');
        $('body').toggleClass('menu-open');
      });

      $('#mobileMenu a').click(function() {
        $('#hamburger').removeClass('active');
        $('#mobileMenu').removeClass('active');
        $('body').removeClass('menu-open');
      });

     
      $(document).click(function(event) {
        if (!$(event.target).closest('nav, .mobile-menu').length) {
          $('#hamburger').removeClass('active');
          $('#mobileMenu').removeClass('active');
          $('body').removeClass('menu-open');
        }
      });

     
      $('#hamburger').click(function() {
        if ($(this).hasClass('active')) {
          $('body').css('overflow', 'hidden');
        } else {
          $('body').css('overflow', 'auto');
        }
      });
    });