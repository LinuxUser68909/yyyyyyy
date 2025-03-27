// Add some cute interactive effects, like color changes on hover
document.querySelector('.avatar img').addEventListener('mouseover', function () {
  this.style.transform = 'scale(1.1)';
  this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.avatar img').addEventListener('mouseout', function () {
  this.style.transform = 'scale(1)';
});
