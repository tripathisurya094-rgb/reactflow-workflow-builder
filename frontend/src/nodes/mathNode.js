import { BaseNode } from "./BaseNode";

export const MathNode = ({ id }) => {
  return (
    <BaseNode
      title="Math"
      inputs={[
        { id: `${id}-a` },
        { id: `${id}-b` },
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <span>Math Operation</span>
    </BaseNode>
  );
};