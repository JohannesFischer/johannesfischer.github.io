// Put JS code here
console.info('Add your JS code to "assets/source/js"');

var fontRegular = new FontFaceObserver('Dosis', {
  weight: 400
});
var fontBold = new FontFaceObserver('Dosis', {
  weight: 700
});

Promise.all([fontRegular.load(), fontBold.load()]).then(function () {
  console.log('Family A & B have loaded');
  document.body.classList.add('webfont');
});
