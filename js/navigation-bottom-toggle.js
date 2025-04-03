$(document).ready(function(){
  // Fonction pour fermer le container
  function closeContainer() {
    $(".nav-bottom-project-list-container").removeClass("show");
    $(".overlay-background").removeClass("show"); // Masquer l'overlay avec transition
  }

  // Clic sur le bouton pour ouvrir/fermer le container
  $(".swipe-hp-container").click(function(event){
    event.stopPropagation(); // Empêche le clic de se propager au document
    $(".nav-bottom-project-list-container").toggleClass("show");
    if ($(".nav-bottom-project-list-container").hasClass("show")) {
      $(".overlay-background").addClass("show"); // Afficher l'overlay avec transition
    } else {
      $(".overlay-background").removeClass("show"); // Masquer l'overlay avec transition
    }
  });

  // Clic en dehors du container pour le fermer
  $(document).click(function(event) {
    var container = $(".nav-bottom-project-list-container");
    if (!container.is(event.target) && container.has(event.target).length === 0) {
      closeContainer();
    }
  });
  
  // Empêcher la fermeture lors du clic à l'intérieur du container
  $(".nav-bottom-project-list-container").click(function(event){
    event.stopPropagation();
  });

  // Fermer le container avec un délai lors du défilement
  $(window).scroll(function() {
    setTimeout(function() {
      closeContainer();
    }, 300); // Délai de 300 ms, ajustez en fonction de vos besoins
  });
});


$(document).ready(function() {
  // Fonction pour cacher la div .swipe-hp au clic sur .swipe-hp-container
  $(".swipe-hp-container").click(function() {
    $(".swipe-hp").addClass("hidden"); // Ajoute la classe hidden pour masquer
  });

  // Clic en dehors de .nav-bottom pour réafficher .swipe-hp
  $(document).click(function(event) {
    if (!$(event.target).closest('.nav-bottom').length) {
      $(".swipe-hp").removeClass("hidden"); // Retire la classe hidden pour afficher
    }
  });

  // Fermer .nav-bottom au scroll
  $(window).scroll(function() {
    $(".swipe-hp").removeClass("hidden"); // Retire la classe hidden pour afficher
  });
});