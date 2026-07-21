// ===========================
// MENU LATERAL
// ===========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const fecharMenu = document.getElementById("fecharMenu");

fecharMenu.addEventListener("click", () => {
    menu.classList.remove("ativo");
});
