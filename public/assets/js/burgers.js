$(function() {
    $("#devour-button").on("click", function(event) {
      event.preventDefault();
      const id = $(this).data("id");
      
  
      const devouredState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed not devoured yet to", devouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#button-addon2").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burgerAdded").val().trim(), devoured: 0
    
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
})