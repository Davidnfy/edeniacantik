
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('love-container');
  
  // Names and emojis to display
  const loveWords = ['EDENIA', 'PHRISKILLA', 'WIJAYA', '💕', '❤️', '💖'];
  const loveElements = ['💝', '💗', '💓', '💞', '💘', '🌹', '💐', '✨', '⭐', '🦋'];
  
  // Function to generate floating hearts
  function generateHearts() {
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-element', 'animate-float');
      heart.textContent = '💕';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      heart.style.fontSize = `${Math.random() * 25 + 15}px`;
      heart.style.opacity = '0.4';
      container.appendChild(heart);
    }
  }
  
  // Function to generate floating love texts
  function generateLoveTexts() {
    for (let i = 0; i < 30; i++) {
      const loveText = document.createElement('div');
      loveText.classList.add('floating-element', 'animate-love-float');
      
      const textSpan = document.createElement('span');
      textSpan.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
      textSpan.style.fontWeight = 'bold';
      textSpan.style.background = 'linear-gradient(to right, #ec4899, #f472b6, #ec4899)';
      textSpan.style.webkitBackgroundClip = 'text';
      textSpan.style.backgroundClip = 'text';
      textSpan.style.color = 'transparent';
      
      loveText.appendChild(textSpan);
      loveText.style.left = `${Math.random() * 90 + 5}%`;
      loveText.style.top = `${Math.random() * 90 + 5}%`;
      loveText.style.animationDelay = `${Math.random() * 5}s`;
      loveText.style.fontSize = `${Math.random() * 35 + 20}px`;
      loveText.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      loveText.style.opacity = '0.25';
      loveText.style.pointerEvents = 'none';
      container.appendChild(loveText);
    }
  }
  
  // Function to generate extra love elements with different animations
  function generateExtraLoveElements() {
    for (let i = 0; i < 40; i++) {
      const element = document.createElement('div');
      element.classList.add('floating-element', 'animate-love-sparkle');
      element.textContent = loveElements[Math.floor(Math.random() * loveElements.length)];
      element.style.left = `${Math.random() * 95 + 2.5}%`;
      element.style.top = `${Math.random() * 95 + 2.5}%`;
      element.style.animationDelay = `${Math.random() * 8}s`;
      element.style.fontSize = `${Math.random() * 25 + 15}px`;
      element.style.opacity = '0.3';
      element.style.pointerEvents = 'none';
      container.appendChild(element);
    }
  }
  
  // Function to generate floating love bubbles
  function generateLoveBubbles() {
    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('floating-element', 'animate-love-bubble');
      
      const bubbleInner = document.createElement('div');
      bubbleInner.style.width = '32px';
      bubbleInner.style.height = '32px';
      bubbleInner.style.background = 'linear-gradient(to bottom right, #f9a8d4, #f472b6)';
      bubbleInner.style.borderRadius = '50%';
      bubbleInner.style.filter = 'blur(4px)';
      
      bubble.appendChild(bubbleInner);
      bubble.style.left = `${Math.random() * 90 + 5}%`;
      bubble.style.top = `${Math.random() * 90 + 5}%`;
      bubble.style.animationDelay = `${Math.random() * 6}s`;
      bubble.style.opacity = '0.2';
      container.appendChild(bubble);
    }
  }
  
  // Make hearts interactive
  const interactiveHearts = document.querySelectorAll('.heart-interactive');
  interactiveHearts.forEach((heart, index) => {
    heart.style.animationDelay = `${index * 0.2}s`;
    heart.addEventListener('click', function() {
      // Create extra heart on click
      const extraHeart = document.createElement('div');
      extraHeart.classList.add('floating-element', 'animate-love-bubble');
      extraHeart.textContent = '❤️';
      extraHeart.style.left = `${Math.random() * 90 + 5}%`;
      extraHeart.style.top = '80%';
      extraHeart.style.fontSize = '40px';
      extraHeart.style.zIndex = '20';
      container.appendChild(extraHeart);
      
      // Remove after animation completes
      setTimeout(() => {
        extraHeart.remove();
      }, 8000);
    });
  });
  
  // Initialize all animations
  generateHearts();
  generateLoveTexts();
  generateExtraLoveElements();
  generateLoveBubbles();
});
