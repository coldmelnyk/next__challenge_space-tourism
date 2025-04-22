import { Planet } from "@/types/Planet";

export const getPlanet = (planetSlug: string, planets: Planet[]) => {
  return planets.find(
    (planet) => planet.name.toLowerCase() === planetSlug.toLowerCase()
  );
};
