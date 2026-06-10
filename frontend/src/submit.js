import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const result = await response.json();

      alert(
      `✅ Pipeline Analysis

      Nodes: ${result.num_nodes}
      Edges: ${result.num_edges}
      Valid DAG: ${result.is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      console.error(error);

      alert("Failed to connect to backend");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px",
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "10px 22px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Analyze Pipeline
      </button>
    </div>
  );
};