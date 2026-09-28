import tidyImage from "../assets/shelter/tidy.webp";
import wornImage from "../assets/shelter/worn.webp";
import neglectedImage from "../assets/shelter/neglected.webp";
import desolateImage from "../assets/shelter/desolate.webp";

export function getShelterTier(stats) {
  const avg = (stats.energy + stats.water + stats.health) / 3;
  if (avg >= 90) return "tidy";
  if (avg >= 40) return "worn";
  if (avg >= 20) return "neglected";
  return "desolate";
}

export const SHELTER_IMAGES = {
  tidy: tidyImage,
  worn: wornImage,
  neglected: neglectedImage,
  desolate: desolateImage,
};