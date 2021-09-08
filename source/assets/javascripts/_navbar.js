window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = (event) => {
  event.currentTarget.classList.toggle('active');
  navigation.classList.toggle('active');
};
