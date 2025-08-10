function startConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  // Clear previous confetti
  container.innerHTML = '';

  const confettiCount = 180;

  // More colors to pick from
  const colors = [
    '#f94144', '#f3722c', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590', '#277da1', '#4d908e', '#9c89b8',
    '#f72585', '#b5179e', '#720026', '#3a0ca3', '#4361ee', '#4895ef', '#4cc9f0', '#f48c06', '#f77f00', '#d00000',
    '#ffba08', '#faa307', '#f48c06', '#e85d04', '#d00000', '#6a040f', '#370617', '#9d0208', '#dd6e42', '#d4af37',
    '#c9b037', '#bfa94a', '#e6c26f', '#d1b26f', '#ff6d00', '#ff9100', '#ffc400', '#d4a373', '#a67b5b', '#bb9457'
  ];

  // Shapes to randomly assign
  const shapes = ['shape-rect', 'shape-circle', 'shape-triangle', 'shape-star'];

  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Pick random color and shape
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    // Apply color and shape
    if (shape === 'shape-triangle' || shape === 'shape-star') {
      // For triangle and star, set color as currentColor and background transparent
      confetti.style.color = color;
      confetti.style.background = 'transparent';
    } else {
      confetti.style.background = color;
    }
    confetti.classList.add(shape);

    if (i % 2 === 0) {
      confetti.style.left = '0%';
      confetti.style.bottom = '0%';

      const tx = randomRange(350, 750);
      const ty = randomRange(-600, -300);
      const tz = randomRange(-350, 350);

      confetti.style.setProperty('--tx', tx + 'px');
      confetti.style.setProperty('--ty', ty + 'px');
      confetti.style.setProperty('--tz', tz + 'px');

      confetti.style.animation = `burst-left ${randomRange(3, 5).toFixed(2)}s forwards`;
      confetti.style.animationDelay = (i * 0.02) + 's';

    } else {
      confetti.style.left = '100%';
      confetti.style.bottom = '0%';

      const tx = randomRange(-750, -350);
      const ty = randomRange(-600, -300);
      const tz = randomRange(-350, 350);

      confetti.style.setProperty('--tx', tx + 'px');
      confetti.style.setProperty('--ty', ty + 'px');
      confetti.style.setProperty('--tz', tz + 'px');

      confetti.style.animation = `burst-right ${randomRange(3, 5).toFixed(2)}s forwards`;
      confetti.style.animationDelay = (i * 0.02) + 's';
    }

    container.appendChild(confetti);
  }
}
