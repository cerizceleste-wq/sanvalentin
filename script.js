const heartScreen = document.getElementById('heart-screen');
const yorkieScene = document.getElementById('yorkieScene');
const questionScreen = document.getElementById('questionScreen');

function startExperience() {
  heartScreen.classList.remove('active');
  heartScreen.style.display = 'none';

  yorkieScene.classList.add('active');
  yorkieScene.style.display = 'flex';

  document.removeEventListener('keydown', startExperience);
  document.removeEventListener('click', startExperience);

  // después de 4 segundos pasa a la pregunta
  setTimeout(() => {
    yorkieScene.classList.remove('active');
    yorkieScene.style.display = 'none';

    questionScreen.classList.add('active');
    questionScreen.style.display = 'flex';
  }, 4000);
}

document.addEventListener('keydown', startExperience);
document.addEventListener('click', startExperience);

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successScreen = document.getElementById('successScreen');

// Al apretar SÍ
yesBtn.addEventListener('click', () => {
  questionScreen.classList.remove('active');
  questionScreen.style.display = 'none';

  successScreen.classList.add('active');
  successScreen.style.display = 'flex';
});

// El NO se escapa 😈
noBtn.addEventListener('mouseover', () => {
  const container = document.querySelector('.buttons-container');
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.classList.add('absolute');
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
