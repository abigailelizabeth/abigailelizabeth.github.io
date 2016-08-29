$( document ).ready(function() {
    
    $("#burgerIcon").click(function(e){
    alert("hi there you clicked the menu");

    e.preventDefault();
    $("#myDropdown").toggleclass("show");
    });


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    $("#downloadPDF").click(function(e){
                            e.preventDefault();
                            alert("not today, sorrrryyyyy!");
                            });
});

