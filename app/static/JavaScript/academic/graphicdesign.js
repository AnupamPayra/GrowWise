// Add pulse effect when career card is clicked
document.querySelectorAll('.career-card').forEach(card => {
  card.addEventListener('click', function() {
    this.style.animation = 'pulse 0.6s ease';
    setTimeout(() => {
      this.style.animation = '';
    }, 600);
  });
});
