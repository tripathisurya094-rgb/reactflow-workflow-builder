import { BaseNode } from "./BaseNode";

export const EmailNode = ({ id }) => {
  return (
    <BaseNode
      title="Email"
      inputs={[{ id: `${id}-message` }]}
      outputs={[{ id: `${id}-status` }]}
    >
      <span>Send Email</span>
    </BaseNode>
  );
};