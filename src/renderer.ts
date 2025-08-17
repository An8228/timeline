import { FashionEvent } from "./types";
import { openModal } from "./modal";

export function renderTimeline(events: FashionEvent[]): void {
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