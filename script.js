document.addEventListener("DOMContentLoaded", function() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingPercentage = document.getElementById('loading-percentage');
  let load = 0;

  const interval = setInterval(() => {
      load += 1;
      loadingPercentage.textContent = `${load}%`;

      if (load >= 100) {
          clearInterval(interval);
          loadingScreen.style.opacity = 0;
          setTimeout(() => loadingScreen.style.display = 'none', 500);
      }
  }, 30);

  const mainButton = document.getElementById('main');
  const twoBtns = document.querySelector('.two-btns');
  const goodMessage = document.querySelector('.message.good');
  const badMessage = document.querySelector('.message.bad');
  const bottom = document.querySelector('.bottom');


  mainButton.addEventListener('click', () => {
      twoBtns.style.opacity = '1';
  });

  window.showGood = () => {
      goodMessage.style.display = 'block';
      badMessage.style.display = 'none';
      twoBtns.style.display = 'none';
      mainButton.style.display = 'none';
      bottom.style.display = 'none';
      
  }

  window.showBad = () => {
      badMessage.style.display = 'block';
      goodMessage.style.display = 'none';
      twoBtns.style.opacity = 0;
      mainButton.style.display = 'none';
      bottom.style.display = 'none';
  }

  const customCursor = document.getElementById('custom-cursor');

  document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('mouseenter', () => {
          customCursor.style.width = '30px';
          customCursor.style.height = '30px';
      });
      el.addEventListener('mouseleave', () => {
          customCursor.style.width = '15px';
          customCursor.style.height = '15px';
      });
  });

  document.addEventListener('mousemove', () => {
      if (!customCursor.classList.contains('mouse-moving')) {
          customCursor.classList.add('mouse-moving');
      }
      clearTimeout(customCursor.timeout);
      customCursor.timeout = setTimeout(() => {
          customCursor.classList.remove('mouse-moving');
      }, 200);
  });
});