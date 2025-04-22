import type { Metadata } from "next";

import PlanetInfo from "@/components/PlanetInfo/PlanetInfo";

import { fetchingData } from "../../utils/getData";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Destination | Space Tourism",
  description:
    "Choose you'r adventure discovering special details about planets you can visit",
};

const DestinationPage = async () => {
  const data = await fetchingData();
  const planetDataArray = data.destinations;

  console.log(planetDataArray);

  return (
    <article>
      <h2>
        <span>01</span> Pick your destination
      </h2>

      <Suspense fallback={<p>Loading planets...</p>}>
        <PlanetInfo planets={planetDataArray} />
      </Suspense>
    </article>
  );
};

export default DestinationPage;
