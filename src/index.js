import FontFaceObserver from 'fontfaceobserver';

const font = new FontFaceObserver('Dosis');
const fontRegular = new FontFaceObserver('Dosis', { weight: 400 });
const fontBold = new FontFaceObserver('Dosis', { weight: 700 });

Promise.all([fontRegular.load(), fontBold.load()]).then(() => {
  console.log('Family A & B have loaded');
  document.body.classList.add('webfont-loaded');
});

document.body.addEventListener('click', () => {
  document.body.classList.toggle('webfont-loaded');
});
