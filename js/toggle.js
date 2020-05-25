const toggles = document.querySelectorAll('.toggle');
const toggleBtn = document.querySelector('#toggle-btn');

const toggleElements = () => {
  [].forEach.call(toggles, (toggle) => {
    toggle.classList.toggle('on');
  });
};

toggleBtn.addEventListener('click', () => {
  toggleElements();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    [].forEach.call(toggles, (toggle) => {
      toggle.classList.remove('on');
    });
  }
});
