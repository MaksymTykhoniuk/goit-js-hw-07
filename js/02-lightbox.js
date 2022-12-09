import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = creatMarkup(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, markup);

function creatMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captiins: true,
  captionsData: "alt",
  captionPosition: "bootom",
  captionDelay: 250,
});

// lightbox.on("show.simplelightbox", function () {
//   console.log("test console");
// });

console.log(galleryItems);
