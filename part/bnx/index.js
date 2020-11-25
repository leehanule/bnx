$('.btn-toggle-mobile-side-bar').click(function() {
    
    $('html').addClass('mobile-side-bar-active');
  });
  
  $('.mobile-side-bar, .mobile-side-bar .content > .logo-box-1 > .btn-close').click(function() {
    $('html').removeClass('mobile-side-bar-active');
    
    $('.mobile-side-bar > .content > .menu-box-1 ul > li.active').removeClass('active');
  });
  
  $('.mobile-side-bar > .content').click(function(e) {
    e.stopPropagation();
  });
  
  $('.mobile-side-bar > .content > .menu-box-1 ul > li').click(function(e) {
    var $this = $(this);
    var hasClass = $this.hasClass('active');
    
    console.log("hasClass : " + hasClass);
    
    if ( hasClass ) {
      $this.removeClass('active');
    }
    else {
      $this.siblings('.active').find('li.active').removeClass('active');
      $this.siblings('.active').removeClass('active');
      
      $this.addClass('active');
    }
    
    e.stopPropagation();
  });

  $(window).scrollTop(100000);

function SliderBox1__init() {
  $('.slider-box-1 > .side-btns > *').click(function() {
    var $this = $(this);
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find('> .slides > .active');
    var $post;
    
    var isLeft = $this.index() == 0;
    
    if ( isLeft ) {
      $post = $current.prev();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :last-child');
      }
    }
    else {
      $post = $current.next();
    
      if ( $post.length == 0 ) {
        $post = $slider.find('> .slides > :first-child');
      }
    }
    
    $current.removeClass('active');
    $post.addClass('active');
    
    var index = $post.index();
    
    $slider.find('.page-btns > *.active').removeClass('active');
    $slider.find('.page-btns > *').eq(index).addClass('active');
  });

  $('.slider-box-1 > .page-btns > *').click(function() {
    var $this = $(this);
    
    $this.siblings('.active').removeClass('active');
    $this.addClass('active');
    
    var index = $this.index();
    
    var $slider = $this.closest('.slider-box-1');
    
    $slider.find(' > .slides > .active').removeClass('active');
    
    $slider.find(' > .slides > div').eq(index).addClass('active');
  });
  
  setInterval(function() {
    $('.slider-box-1 > .side-btns > :last-child').click();
  }, 3000);
}

SliderBox1__init();

function ShareMenu__init() {
  var showShareBox = function() {
    $('html').addClass('share-box-active');
  };
  
  var hideShareBox = function() {
    $('html').removeClass('share-box-active');
  };
  
  var toogleShareBox = function() {
    if ( $('html').hasClass('share-box-active') ) {
      hideShareBox();
    }
    else {
      showShareBox();
    }
  };
  
  $('.mobile-top-bar .btn-share').click(toogleShareBox);
  
  $('.share-box > .menu-box-1').click(function (e) {
    e.stopPropagation();
  });
  
  $('.share-box').click(hideShareBox);
  
  $('.mobile-top-bar .btn-toggle-mobile-side-bar, .mobile-top-bar .logo').click(hideShareBox);
}

ShareMenu__init();