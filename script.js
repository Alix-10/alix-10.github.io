// Sélectionnez le conteneur
var panoElement = document.getElementById('pano');

// Créez la visionneuse Marzipano
var viewer = new Marzipano.Viewer(panoElement);

// Définissez la géométrie de la scène (projection équirectangulaire)
var geometry = new Marzipano.EquirectGeometry([{ width: 4096 }]);

// Créez une source d'image pour votre image 360°
var imageSource = Marzipano.ImageUrlSource.fromString(
  'chemin/vers/votre/image.jpg'
);

// Créez la scène
var scene = viewer.createScene({
  source: imageSource,
  geometry: geometry,
});

// Affichez la scène
scene.switchTo();