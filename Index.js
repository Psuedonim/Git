$(document).ready(function(){

  loadIn();
  // alternateSides();

  // pageElement onClick()
  $(".pageElement").click(function(){

      link($(this));

  });

  var pageElementHeight = $(".pageElement").height();

  $(".listItem").click
  (function()
  {
    link($(this));

  }

  );

  var imgArray = [];

  function loadIn()
  {
    $(".loadScreen").animate
      (
        {opacity: 0},
        1000,
        function()
        {
          $(this).slideUp();
        }
      )
    };

  function loadOut(url)
  {
    $(".loadScreen").slideDown();
    $(".loadScreen").animate
      (
        {opacity: 1},
        1000,
        function()
        {
          window.location.href = url;
        }
      )
  };

  function link(element)
  {
    var url = element.attr("href");
    loadOut(url);
  }

  // function alternateSides(element){
  //     forEach($(".pageElementImage"), i) => {
  //       if(i %% 2 == 0){
  //         $(this).css("left", "0");
  //       }
  //       else{
  //         $(this).css("right", "0");
  //       }
  //     }
  //   });

  });
