console.log("app.js loaded");

var box = document.querySelector('a-box');
box.addEventListener('mouseenter', function () {
  box.setAttribute('scale', {
    x: 2,
    y: 1,
    z: 1
  });
  box.setAttribute('src', '#iron_texture');
});

box.addEventListener('mouseleave', function () {
  box.setAttribute('scale', {
    x: 2,
    y: 1,
    z: 3
  });
});
