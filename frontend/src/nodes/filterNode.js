import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>Filter Data</span>
    </BaseNode>
  );
};