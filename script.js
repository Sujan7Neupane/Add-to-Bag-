// for the sizes that sets background image on clicking
const sizeLinks = document.querySelectorAll(".size-sec a");

// Loop through each link
sizeLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    sizeLinks.forEach((link) => {
      link.style.backgroundColor = "";
      link.style.color = "";
    });

    this.style.backgroundColor = "#000";
    this.style.color = "aliceblue";
  });
});

//   For the image change when clicking on the small box
const productImages = document.querySelectorAll(
  ".product-image-sec .product-boxes img"
);

const mainImage = document.querySelector(".image-mid-container img");
productImages.forEach((image) => {
  image.addEventListener("click", function () {
    mainImage.src = this.src;
  });
});