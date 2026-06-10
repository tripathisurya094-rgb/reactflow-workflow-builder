import { Handle, Position } from "reactflow";

const nodeColors = {
  Input: "#22c55e",
  Output: "#f97316",
  LLM: "#8b5cf6",
  API: "#3b82f6",
  Database: "#6366f1",
  Email: "#ec4899",
  Filter: "#eab308",
  Math: "#06b6d4",
  Text: "#64748b",
};
const nodeIcons = {
  Input: "📥",
  Output: "📤",
  LLM: "🤖",
  API: "🌐",
  Database: "🗄️",
  Email: "📧",
  Filter: "🔍",
  Math: "🔢",
  Text: "📝",
};

export const BaseNode = ({
  title,
  children,
  inputs = [],
  outputs = [],
}) => {
  const headerColor = nodeColors[title] || "#64748b";

  return (
    <div
      style={{
        width: 260,
        minHeight: 120,
        background: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            background: headerColor,
            width: 10,
            height: 10,
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      <div
        style={{
          background: headerColor,
          color: "white",
          padding: "12px 16px",
          fontWeight: "700",
          fontSize: "15px",
        }}
      >
        {nodeIcons[title]} {title}
      </div>

      <div
        style={{
          padding: "16px",
          color: "#334155",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            background: headerColor,
            width: 12,
            height: 12,
            border: "2px solid white",
            boxShadow: "0 0 0 1px rgba(0,0,0,.15)",
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};