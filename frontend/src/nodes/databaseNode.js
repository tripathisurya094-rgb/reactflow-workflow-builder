import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id }) => {
  return (
    <BaseNode
      title="Database"
      inputs={[{ id: `${id}-query` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Database Query</span>
    </BaseNode>
  );
};