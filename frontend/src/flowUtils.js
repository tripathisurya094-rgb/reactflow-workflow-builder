import { flowInstance } from "./ui";

export const centerPipeline = () => {
  if (flowInstance) {
    flowInstance.fitView({
      padding: 0.2,
      duration: 800,
    });
  }
};