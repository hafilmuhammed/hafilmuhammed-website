$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("a.st-smooth-move").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800, // Adjust the scroll speed here (in milliseconds)
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  