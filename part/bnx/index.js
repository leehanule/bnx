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