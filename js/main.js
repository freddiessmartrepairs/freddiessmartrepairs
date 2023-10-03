$(document).ready(function () {
    // Füge einen Event Listener für das Klicken auf einen Link in der Navbar hinzu
    $(".navbar-nav a").on("click", function () {
      // Schließe das Dropdown-Menü
      $(".navbar-collapse").collapse("hide");
    });
  });
