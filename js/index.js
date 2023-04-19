const menuBtn = document.querySelector("#menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
  if (menuBtn.innerText === "menu") {
    menuBtn.innerText = "clear";
    sidebar.style.display = "block";
  } else if (menuBtn.innerText === "clear") {
    menuBtn.innerText = "menu";
    sidebar.style.display = "none";
  }
});

document.querySelector(".slider").addEventListener("change", rangeSlide);
document.querySelector(".slider").addEventListener("mousemove", rangeSlide);

function rangeSlide(event) {
  document.getElementById("rangeValue").innerText = this.value;
}
