/* custom.js — small page-specific behaviours (typing animation, footer year) */

document.addEventListener('DOMContentLoaded', function () {
  // ---- typing animation ----
  var typingEl = document.getElementById('typing-animation');
  var typingTexts = [
    'Senior Full-Stack Engineer',
    'AI/ML Engineer',
    'LLM & Multi-Agent Systems',
    'Founder & CTO, CEFACS Technologies'
  ];

  function playTypingAnimation(index) {
    var text = typingTexts[index];
    var i = 0;
    typingEl.textContent = '';
    var typeTimer = setInterval(function () {
      typingEl.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(typeTimer);
        setTimeout(function () {
          playTypingAnimation((index + 1) % typingTexts.length);
        }, 1400);
      }
    }, 55);
  }

  if (typingEl) { playTypingAnimation(0); }

  // ---- footer year ----
  var yearEl = document.getElementById('current-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
