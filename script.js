function toggleMenu()
{
    const menu = document.querySelector(".menu__links");
    const icon = document.querySelector(".hamburger__icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}