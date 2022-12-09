import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = creatMarkup(galleryItems);

gallery.insertAdjacentHTML(`beforeend`, markup);
gallery.addEventListener("click", onGalerryClick);

function onGalerryClick(evt) {
  blockLinkAction(evt);

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}">
    `,
    {
      onShow: () => {
        window.addEventListener("keydown", onEcapeClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEcapeClose);
      },
    }
  );

  instance.show();

  function onEcapeClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

function creatMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
             src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}

function blockLinkAction(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
