import { FashionEvent } from "./types";

export function openModal(event: FashionEvent): void {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>${event.title} (${event.year})</h2>
      <img src="${event.imageURL}" alt="${event.title}" width="300">
      <p>${event.description}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".close-button")?.addEventListener("click", () => {
    modal.remove();
  });
}