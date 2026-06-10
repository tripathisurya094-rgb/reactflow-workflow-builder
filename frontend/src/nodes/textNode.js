import { useMemo, useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const variables = useMemo(() => {
    const matches = [
      ...currText.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g),
    ];

    return [...new Set(matches.map((m) => m[1]))];
  }, [currText]);

  const rows = Math.max(3, currText.split("\n").length);

  return (
    <div
      style={{
        width: Math.max(220, currText.length * 4),
        minHeight: 120,
        border: "1px solid black",
        borderRadius: 8,
        padding: 10,
        background: "white",
      }}
    >
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) * 100) / (variables.length + 1)}%`,
          }}
        />
      ))}

      <div>
        <strong>Text</strong>
      </div>

      <div style={{ marginTop: 10 }}>
        <textarea
        placeholder="Type text and use {{variable}} syntax..."
          value={currText}
          onChange={handleTextChange}
          rows={rows}
          style={{
            width: "100%",
            resize: "none",
          }}
        />
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};