document.addEventListener("DOMContentLoaded", () => {
  fetch("data/events.json")
    .then(response => response.json())
    .then(events => renderTimeline(events));

  function renderTimeline(events) {
    const timelineContainer = document.createElement("div");
    timelineContainer.id = "timeline";
    document.body.appendChild(timelineContainer);

    events.forEach(event => {
      const marker = document.createElement("div");
      marker.className = "event-marker";
      marker.innerText = event.year;
      marker.addEventListener("click", () => openModal(event));
      timelineContainer.appendChild(marker);
    });
  }

  function openModal(event) {
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

    document.querySelector(".close-button").addEventListener("click", () => {
      modal.remove();
    });
  }
});