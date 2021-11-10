let a = document.querySelector(".gotop");
window.onscroll = function () {
this.scrollY>=200 ? a.classList.add("show") : a.classList.remove("show");
};