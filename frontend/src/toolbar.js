import { DraggableNode } from './draggableNode';
import { useStore } from "./store";

export const PipelineToolbar = () => {

  const autoLayout =
    useStore((state) => state.autoLayout);

  return (
    <div
      style={{
        padding: "16px 24px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 2px 8px rgba(0,0,0,.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#0f172a",
          }}
        >
          Workflow Builder
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            onClick={autoLayout}
            style={{
              background: "#0f172a",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Auto Layout
          </button>


        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="database" label="Database" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="email" label="Email" />
      </div>
    </div>
  );
};