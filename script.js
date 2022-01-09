const menu = document.querySelector(".navbar__navigation-bar");

document.querySelector('.btn-menu').addEventListener('click', function(){
    this.classList.toggle('active');
    this.classList.toggle('no-active');
    menu.classList.toggle(".mobile-menu")
    const test = document.querySelectorAll('.no-animation');
    test.forEach(function(){
        for(let i = 0; i < test.length; i++){
            test[i].classList.remove('no-animation');
        }
    })
})

const menuElements = document.querySelectorAll("ul li");
const menuList = document.querySelector(".navbar__navigation-bar");

function toggleMenu() {
  const hasOpenedClass = menu.className.includes("menu-icon--opened");

  const closeMenu = function () {
    menu.classList.add("menu-icon--closed");
    menu.classList.remove("menu-icon--opened");
    menuList.style.left = "-574px";
  };

  if (hasOpenedClass) {
    closeMenu();
  } else {
    menu.classList.add("menu-icon--opened");
    menu.classList.remove("menu-icon--closed");
    menuList.style.left = "0";
  }
}

menuElements.forEach((e) =>
  e.addEventListener("click", function () {
    if (menu.className.includes("menu-icon--opened")) {
      menu.classList.add("menu-icon--closed");
      menu.classList.remove("menu-icon--opened");
      menuList.style.left = "-574px";
    }
  })
);