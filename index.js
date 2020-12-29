const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

btnLeft.addEventListener('click', () => btnClick('left'));
btnRight.addEventListener('click', () => btnClick('right'));

function btnClick(param) {
  const gallery = document.querySelector('.gallery__list')
  if (param === 'left') {
    let curEl = gallery.removeChild(gallery.children[0])
    gallery.append(curEl)
  } else {
    let curEl = gallery.removeChild(gallery.children[gallery.children.length-1])
    gallery.prepend(curEl)
  }
}