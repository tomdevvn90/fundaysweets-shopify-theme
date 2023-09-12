document.addEventListener("DOMContentLoaded", function() {
  const stockists = document.querySelector('.stockists-page');
  const community = document.querySelector('.community-page');
  const ingredients = document.querySelector('.our-ingredients');
  const contact = document.querySelector('.contact-page');
  const mainBlog = document.querySelector('.main-blog');
  const ourStory = document.querySelector('.our-story');
  const subscription = document.querySelector('.subscription-content');
  
  if(stockists || community || ingredients || contact || mainBlog || ourStory || subscription) {
    const header = document.querySelector('header');
    header.setAttribute("style", "position:absolute;top:0;bottom:0;left:0;right:0");
  }


  let pages = document.querySelectorAll('.page')
  let checkHash = location.hash ? location.hash : '#ourIngredients';
  let buttons = document.querySelectorAll('.our-buttons a span');
  console.log(buttons)
  const nav = () => {
      checkHash = location.hash ? location.hash : '#ourIngredients';
      
      for(let el of pages) {
          if('#'+el.id == checkHash) {
              el.style.display = 'block'
          } else {
              el.style.display = 'none'
          }
      }

      for(let i of buttons) {
        if(i.dataset.hash == checkHash) {
              i.setAttribute("style", "background-color:black;color:white");
          } else {
              i.setAttribute("style", "background-color:white;color:black;border:1px solid black;");
          }
      }
  }

  nav();
  window.addEventListener('hashchange', nav);
});

$('.load-more-blog').on('click', function(){
    var $this = $(this),
    totalPages = parseInt($('[data-all-pages]').val()),
    currentPage = parseInt($('[data-this-page]').val()),
    datacollurl = $('[data-coll-url]').val();;

    $this.attr('disabled', true);
    $this.find('[load-more-text]').addClass('hide');

    var nextUrl = $('[data-next-link]').val();
    var current_page_new = currentPage + 1;
    var next_coll = currentPage + 2;

    $.ajax({
        url: nextUrl,
        type: 'GET',
        dataType: 'html',
        success: function(responseHTML){
          console.log(responseHTML)
            $('[data-next-link]').val(datacollurl + "?page="+next_coll);
            $('[data-this-page]').val(current_page_new);
            $('.blog-list').append($(responseHTML).find('.blog-list').html());
        },

        complete: function() {
            if(current_page_new < totalPages) {
                $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); 
            } 
            if(current_page_new >= totalPages) {
                $this.addClass('hide');
            } 
        }
    })
});

$(document).ready(function() { 
  setTimeout(function() {
    if ($( window ).width() <= 450) {
      $('.relatedArticles').slick({
       infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      });
    }
  }, 1000)

});