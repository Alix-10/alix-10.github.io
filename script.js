// Sélection du conteneur où afficher la visite
var panoContainer = document.getElementById('panorama');

// Création du viewer Marzipano
var viewer = new Marzipano.Viewer(panoContainer);

// Chargement de l'image 360°
var source = Marzipano.ImageUrlSource.fromString("images/panorama.jpg");

// Création de la géométrie pour une image équirectangulaire (360°)
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Définition de la vue (champ de vision et limites de rotation)
var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100 * Math.PI / 180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// Création de la scène avec l'image
var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view
});

// Affichage de la scène
scene.switchTo();