import { ComponentType } from "react";
import ReadingQDiffusionContent from "./reading-q-diffusion";
import BuildingACitationGraphContent from "./building-a-citation-graph";

export const articleContentRegistry: Record<string, ComponentType> = {
  "reading-q-diffusion": ReadingQDiffusionContent,
  "building-a-citation-graph": BuildingACitationGraphContent,
};
