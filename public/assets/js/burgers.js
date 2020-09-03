$(function() {
    $("#devour-button").on("click", function(event) {
      const id = $(this).data("id");
      const itsNowDevoured = $(this).data("newState");
  
      const devouredState = {
        devoured: itsNowDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed not devoured yet to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".form-control").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        name: $("#burgerAdded").val().trim(),
    
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  