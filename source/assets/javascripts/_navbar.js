window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = (event) => {
  event.currentTarget.classList.toggle('active');
  navigation.classList.toggle('active');
};

const closeNav = document.querySelector('ul#close_nav');
const closeX = document.querySelector('.toggle');
closeNav.addEventListener('click', (event) => {
  event.currentTarget.parentElement.classList.remove('active');
  closeX.classList.remove('active');
});
