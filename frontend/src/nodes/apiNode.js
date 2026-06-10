import { BaseNode } from "./BaseNode";

export const APINode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-request` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <span>External API Call</span>
    </BaseNode>
  );
};