import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "QA Academy — Free QA Engineer Course",
    short_name: "QA Academy",
    description: "Free comprehensive QA Engineering course: 19 modules from manual testing to AI-assisted automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16a34a",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
