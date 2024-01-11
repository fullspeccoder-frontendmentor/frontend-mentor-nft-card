const mainImage = document.querySelector(".image-container");
const viewContainer = document.querySelector(".view-container");

mainImage.addEventListener("mouseenter", () => {
  viewContainer.classList.toggle("hidden");
});

mainImage.addEventListener("mouseleave", () => {
  viewContainer.classList.toggle("hidden");
});
