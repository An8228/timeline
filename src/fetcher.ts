import { FashionEvent } from "./types";

export async function fetchEvents(): Promise<FashionEvent[]> {
  const response = await fetch("data/events.json");
  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
}