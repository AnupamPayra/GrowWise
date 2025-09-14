// Career card interactions
document.querySelectorAll('.career-card').forEach(card => {
  card.addEventListener('click', function () {
    // Add a pulse animation
    this.style.animation = 'pulse 0.6s ease';
    setTimeout(() => {
      this.style.animation = '';
    }, 600);

    // Show alert (can later replace with modal/details)
    const career = this.dataset.career;
    alert(`You clicked on: ${career} career path`);
  });
});
