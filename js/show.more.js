export default function showMoreText() {
  const btnExpand = document.querySelectorAll(".btn-show-more-text");

  btnExpand.forEach((button) => {
    button.addEventListener("click", function () {
      const cardTextFull = document.querySelector(".full-text");
      if (cardTextFull.style.display === "block") {
        cardTextFull.style.display = "none";
        button.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
      } else {
        cardTextFull.style.display = "block";
        button.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
      }
    });
  });
}
