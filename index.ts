import { fetchEvents } from "./fetcher";
import { renderTimeline } from "./renderer";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const events = await fetchEvents();
    renderTimeline(events);
  } catch (error) {
    console.error("Error loading timeline:", error);
  }
});
