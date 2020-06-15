!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight();
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Initi AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out"
  });

})(jQuery);
//JS file for IIIT  Guwahati placement


let myChart1 = document.getElementById('myChart1').getContext('2d');

        Chart.defaults.global.defaultFontFamily= 'Lato';
        Chart.defaults.global.defaultFontSize= 18;
        Chart.defaults.global.defaultFontColor ='#777';
        


        let secondBatch = new Chart(myChart1, {
            type:'bar',
            data:{
                 
                
                labels:['ECE','CSE','Overall'],
                
                datasets:[{
                    label:'Total Students registered',
                    data:[

                        27,
                        32,
                        59
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"green",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },
                {
                    label:'Total job offered',
                    data:[

                        11,
                        49,
                        60
                    ],
                    backgroundColor:'orange',
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },
                {
                label:'Total Students selected',
                    data:[

                        10,
                        25,
                        35
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"blue",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                },
                {
                    label:'Students going for higher studies',
                    data:[

                        16,
                        4,
                        20
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"Yellow",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },

                {
                    label:'Students starting their own company',
                    data:[

                       1,
                       0,
                       1
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"black",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"


                },
                {
                    label:'Average salary in LPA',
                    data:[

                       5.19,
                       12.75,
                       10.1
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"purple",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                },
                {
                    
                    label:'Highest Salary in LPA',
                    data:[

                       7,
                       56,
                       56
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"red",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                
                }
                
                ],
            },
            options:{
                title:{
                display:true,
                text:"Placement Status for the year 2018-19",
                fontSize:25,
                fontColor:'#000'
            },
            legend:{
                position:"right",
                labels:{
                    fontColor:'#000'
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                }

            }
            }
        });

        let myChart2 = document.getElementById('myChart2').getContext('2d');

        Chart.defaults.global.defaultFontFamily= 'Lato';
        Chart.defaults.global.defaultFontSize= 18;
        Chart.defaults.global.defaultFontColor ='#777';
        


        let pie1 = new Chart(myChart2, {
            type:'pie',
            data:{
                 
                
                labels:['ECE','CSE','Overall'],
                
                datasets:[{
                    label:'Percentage of students placed',
                    data:[

                        37,
                        83,
                        60
                    ],
                    //backgroundColor:'green',
                    backgroundColor:
                    
                    [
                    'rgba(0, 191, 255, 0.8)',
                    'rgba(0, 0, 255, 0.8)',
                    'rgba(0, 255, 255, 0.8)'
                    ],
                    
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                }

            ],
        },
        options:{
            title:{
            display:true,
            text:"Percentage of students placed in the year 2018-19",
            fontSize:25,
            fontColor:'#000'
        },
        legend:{
            position:"right",
            labels:{
                fontColor:'#000'
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            }

        }
        }
    });
        
        
        
        let myChart3 = document.getElementById('myChart3').getContext('2d');

        Chart.defaults.global.defaultFontFamily= 'Lato';
        Chart.defaults.global.defaultFontSize= 18;
        Chart.defaults.global.defaultFontColor ='#777';
        


        let firstBatch = new Chart(myChart3, {
            type:'bar',
            data:{
                 
                
                labels:['ECE','CSE','Overall'],
                
                datasets:[{
                    label:'Total Students registered',
                    data:[

                        26,
                        32,
                        58
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"green",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },
                {
                    label:'Total job offered',
                    data:[

                        13,
                        30,
                        43
                    ],
                    backgroundColor:'orange',
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },
                {
                label:'Total Students selected',
                    data:[

                        11,
                        22,
                        33
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"blue",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                },
                {
                    label:'Students going for higher studies',
                    data:[

                        5,
                        2,
                        7
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"Yellow",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                },

                {
                    label:'Students starting their own company',
                    data:[

                       1,
                       1,
                       2
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"black",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"


                },
                
                {
                    label:'Average salary in LPA',
                    data:[

                       6.56,
                       6.7,
                       6.68
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"purple",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                },
                {
                    
                    label:'Highest Salary in LPA',
                    data:[

                       15,
                       17,
                       17
                    ],
                    //backgroundColor:'green',
                    backgroundColor:"red",
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"
                
                }
                
                ],
            },
            options:{
                title:{
                display:true,
                text:"Placement Status for the year 2017-18",
                fontSize:25,
                fontColor:'#000'
            },
            legend:{
                position:"right",
                labels:{
                    fontColor:'#000'
                },
                layout:{
                    padding:{
                        left:50,
                        right:0,
                        bottom:0,
                        top:0
                    }
                }

            }
            }
        });



        let myChart4 = document.getElementById('myChart4').getContext('2d');

        Chart.defaults.global.defaultFontFamily= 'Lato';
        Chart.defaults.global.defaultFontSize= 18;
        Chart.defaults.global.defaultFontColor ='#777';
        



        let pie2 = new Chart(myChart4, {
            type:'pie',
            data:{
                 
                
                labels:['ECE','CSE','Overall'],
                
                datasets:[{
                    label:'Percentage of students placed',
                    data:[

                        65.4,
                        78.1,
                        72.4
                    ],
                    //backgroundColor:'green',
                    backgroundColor:
                    
                    [
                    'rgba(0, 191, 255, 0.8)',
                    'rgba(0, 0, 255, 0.8)',
                    'rgba(0, 255, 255, 0.8)'
                    ],
                    
                    boderWidth:4,
                    borderColor:"#777",
                    hoverBorderWidth:2,
                    hoverBorderColor:"#000"

                }

            ],
        },
        options:{
            title:{
            display:true,
            text:"Percentage of students placed in the year 2017-18",
            fontSize:25,
            fontColor:'#000'
        },
        legend:{
            position:"right",
            labels:{
                fontColor:'#000'
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            }

        }
        }
    });
        
        
        
