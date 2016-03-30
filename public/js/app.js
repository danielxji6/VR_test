var box = document.querySelector('a-box');
box.addEventListener('mouseenter', function () {
  box.setAttribute('scale', {
    x: 4,
    y: 1,
    z: 6
  });
});
