import { ComponentType } from "react";
import EdgeAiKnowledgeGraphContent from "./edge-ai-knowledge-graph";
import NotionStudyLoggerContent from "./notion-study-logger";
import AwqImplementationContent from "./awq-implementation";
import NapoleonsMarchContent from "./napoleons-march";
import SailProjectContent from "./sail-project";

export const projectContentRegistry: Record<string, ComponentType> = {
  "edge-ai-knowledge-graph": EdgeAiKnowledgeGraphContent,
  "notion-study-logger": NotionStudyLoggerContent,
  "awq-implementation": AwqImplementationContent,
  "napoleons-march": NapoleonsMarchContent,
  "sail-project": SailProjectContent,
};
