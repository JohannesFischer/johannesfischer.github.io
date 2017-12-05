import FontFaceObserver from 'fontfaceobserver';
const fontFamily = 'Quicksand';
const font = new FontFaceObserver(fontFamily);
const fontRegular = new FontFaceObserver(fontFamily, { weight: 400 });
const fontBold = new FontFaceObserver(fontFamily, { weight: 700 });

Promise.all([fontRegular.load(), fontBold.load()]).then(() => {
  document.body.classList.add('webfont-loaded');
});

// document.body.addEventListener('click', () => {
//   document.body.classList.toggle('webfont-loaded');
// });
