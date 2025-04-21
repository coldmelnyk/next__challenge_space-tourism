"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

const BackgroundLayout = () => {
  const path = usePathname();

  let nameOfPath = path.split("/")[1];

  if (nameOfPath === "") {
    nameOfPath = "home";
  }

  return (
    <Image
      src={`/assets/${nameOfPath}/background-${nameOfPath}-desktop.jpg`}
      alt={`background-picture-${nameOfPath}`}
      fill
      style={{ zIndex: -1 }}
      priority
    />
  );
};

export default BackgroundLayout;
