import "bootstrap";


var portfolio = {


  init: function() {
    this.myNameAnimation();
    this.scrollingTitles();
    this.scrollImageInfo();
    this.navExpand();
    this.scrollToSection();
    this.imageInfo();
    this.techIconAnimation();
    this.techIconHover();
    this.socialIconText();
    this.heartAnimation();
  },

  scrollToSection: function() {
    var scrollOffset = 0;
    if($(window).width() < 1000) {
      scrollOffset = $(window).height() / 4;
    } else {
      scrollOffset = $(window).height() / 3;
    }

    $('.navLink').click(function(e) {
      e.preventDefault();
      if($(this).attr('href') === '#') {
        $('html, body').animate({
           scrollTop: 0
        }, 1000);
      } else {
        $('html, body').animate({
           scrollTop: $( $(this).attr('href')).offset().top - scrollOffset
        }, 1000);
      }
    });
  },

  myNameAnimation: function() {
    var $name = $('#myName'),
        $letter = $name.find('.letter'),
        $front = $name.find('#front'),
        $end = $name.find('#end'),
        $dev = $name.find('#dev'),
        $slash = $name.find('.slash'),
        tl = new TimelineMax();
    //Name line animation
    TweenMax.staggerTo($letter, 0.8, {'stroke-dashoffset': 0, ease: Power4.easeIn}, 0.2);

    //'front end dev' text========================================
    tl.from($front, 0.3, {x: -285, ease: Bounce.easeOut}, 2.5)
      .from($end, 0.3, {y: 110, ease: Bounce.easeOut})
      .from($dev, 0.3, {x: 230, ease: Bounce.easeOut})
      .from($slash, 0.3, {y: 110, ease: Bounce.easeOut})
      .to('nav', 1, {autoAlpha: 1})
      .to('#svgNameContainer', 1, {top: '15vh'})
      .to('#myName', 1, { scale: 0.75, transformOrigin: '50% 50%'}, '-=1')
      //.to('#myName', 1, {top: '20vh', scale: 0.75})
      .to('.notFixed', 1, {top: '35vh'}, '-=1');

  },

  navExpand: function() {
    var $navIcon = $('#navIcon'),
        $iconTop = $navIcon.find('#top'),
        $iconMid = $navIcon.find('#mid'),
        $iconBot = $navIcon.find('#bot'),
        $nav = $('nav'),
        $links = $('.navLink'),
        tl = new TimelineMax({paused: true});

      //animate icon and nav
      tl.to($nav, 0.5, {y: 0, autoAlpha: 1, ease: Power3.easeOut})
        .to($iconMid, 0.2, {autoAlpha: 0}, 0)
        .to($iconTop, 0.5, {rotation: 45, transformOrigin: '0% 50%', ease: Power3.easeOut}, 0)
        .to($iconBot, 0.5, {rotation: -45, transformOrigin: '0% 50%', ease: Power3.easeOut}, 0);


      $navIcon.click(function() {
          if(!$nav.hasClass('out')) {
            tl.play();
            $nav.addClass('out');
          } else {
            tl.reverse();
            $nav.removeClass('out');
          }
      });

      //Close nav when a link is clicked
      $links.click(function() {
        if($nav.hasClass('out') && $(window).width() < 770) {
          tl.reverse();
          $nav.removeClass('out');
        }
      });
  },

  expandingTitles: function(str, id) {
    str = str.toUpperCase();
    var arr = str.split("");

    arr.forEach(function(letter) {
      document.getElementById(id).innerHTML += '<h1 class="'+id+'letter expand">' + letter + '</h1>';
    });

    var number = $("." + id + "letter").length;
    var move = number * 5 - 5;

    for(var i = 0; i <= number; i++) {
      $("." + id + "letter").eq(i).animate({left: '-=' + move + '%', opacity: 1},500);
      move -= 10;
    }
  },

  scrollingTitles: function() {
    var that = this;
    var controller = new ScrollMagic.Controller();

    $('.titleBox').each(function() {
      var str = $(this).find('h1').attr('id');
      var topLine = $(this).find('.topLine');
      var tl = new TimelineMax().to(topLine, 1, {width: '100%' });

      var scene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.8,
        reverse: false
      })
      /*.addIndicators({
        colorTrigger: '#fff'
      })*/
      .on('start', function() {
        that.expandingTitles(str, str);
      })
      .setTween(tl)
      .addTo(controller);
    });
  },

  scrollImageInfo: function() {
    var testcontroller = new ScrollMagic.Controller();
    //If on small device trigger image info at top of screen(no hover)
    if($(window).width() < 1000) {
      $('.imgBox').each(function() {
        var tl = new TimelineMax().to($(this).find('.info'), 0.5, {scale: 1, autoAlpha: 1, transformOrigin: '50% 50%'})
                                  .to($(this).find('a'), 0.5, {rotationX: 0}, 0);

        var testscene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 0.45,
          duration: 200,
        })
        /*.addIndicators({
          colorTrigger: 'yellow'
        })*/
        .setTween(tl)
        .addTo(testcontroller);
      });
    }

  },

  imageInfo: function() {
    var $info = $('.info');

    TweenMax.set($info, {scale: 0, autoAlpha: 1, transformOrigin: '50% 50%'});
    if($(window).width() > 1000) {
      $('.imgBox').hover(function() {
        TweenMax.to($(this).find($info), 0.5, {scale: 1, transformOrigin: '50% 50%'});
      }, function() {
        TweenMax.to($(this).find($info), 0.5, {scale: 0, transformOrigin: '50% 50%'});
      });
    }

  },

  techIconAnimation: function() {
    var iconTL = new TimelineMax({repeat: -1, repeatDelay: 5});
    var element = $('.tech');
    if($(window).width() < 1000) {
      iconTL.staggerTo(element, 0.6, {scale: 2, repeat: 1, yoyo: true, ease: Power4.easeIn}, 0.2);
    } else {
      element.hover(function() {
        TweenMax.to(this, 0.5, {scale: 2, 'zIndex': 2, ease: Bounce.easeOut});
      }, function() {
        TweenMax.to(this, 0.5, {scale: 1, 'zIndex': 1, ease: Bounce.easeOut});
      });
    }
  },

  techIconHover: function() {
    $('.tech').on('click mouseover', function() {
      var textToAdd = $(this).attr('id');
      $('.hoverText').text(textToAdd);
    });
  },

  socialIconText: function() {
    var iconTL = new TimelineMax({repeat: -1});
    var element = $('.socialIcons');
    var elementName = $('#iconName h1');

    iconTL.staggerTo(element, 2, {'opacity': 1, repeat: 1, yoyo: true, ease: Power4.easeInOut}, 2.5)
          .staggerTo(elementName, 2, {'opacity': 1, repeat: 1, yoyo: true, ease: Power4.easeInOut}, 2.5, 0);
  }



};//portfolio end

$(document).ready(function() {
  portfolio.init();
});

