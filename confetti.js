function startConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;

  // Clear previous confetti
  container.innerHTML = '';

  const confettiCount = 180;

  // More colors to pick from
  const colors = [
    '#f94144', '#f3722c', '#f9844a', '#f9c74f', '#90be6d',
    '#43aa8b', '#577590', '#277da1', '#9c89b8', '#f72585',
    '#b5179e', '#720026', '#3a0ca3', '#4361ee', '#4cc9f0',
    '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#ffc43d',
    '#ff6f91', '#ff9671', '#ffc75f', '#f9f871', '#a3d9a5',
    '#6a994e', '#386641', '#1b4332', '#081c15', '#0f4c5c',
    '#3b6978', '#204051', '#c0d6df', '#f0f3bd', '#f4d35e',
    '#ee964b', '#f95738', '#1e2022', '#2c3e50', '#34495e',
    '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#f39c12',
    '#d35400', '#c0392b', '#7f8c8d', '#95a5a6'
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
