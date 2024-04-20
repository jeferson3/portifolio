// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

if (document
    .querySelector('.about__content-details-para')) {
  document
      .querySelector('.about__content-details-para')
      .innerHTML = document
      .querySelector('.about__content-details-para')
      .textContent
      .replace('{{years}}', (new Date()).getFullYear() - 1998)
}
document
    .querySelector('#year-footer__dinamic')
      .innerHTML = (new Date()).getFullYear();

window.onload = function () {
  console.log('iniciado')

  // https://wa.me/5587988363914?text=teste

  document.getElementById('form-contact')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const {email, name, message} = Object.fromEntries(formData.entries());

        window.open(
            `https://wa.me/5587988363914?text=${message}. Nome: ${name}. E-mail: ${email}`,
        'blank'
        )

      })
}