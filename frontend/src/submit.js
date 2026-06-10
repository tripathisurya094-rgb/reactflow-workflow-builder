import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [showModal, setShowModal] = useState(false);
  const [analysis, setAnalysis] = useState(null);

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

      setAnalysis(result);
      setShowModal(true);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to backend");
    }
  };

  return (
    <>
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

      {showModal && analysis && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              width: "350px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
            }}
          >
            <div
              style={{
                background: "#2563eb",
                color: "white",
                padding: "16px",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >
              Pipeline Analysis
            </div>

            <div style={{ padding: "20px" }}>
              <p>
                <strong>Nodes:</strong> {analysis.num_nodes}
              </p>

              <p>
                <strong>Edges:</strong> {analysis.num_edges}
              </p>

              <p>
                <strong>Valid DAG:</strong>{" "}
                {analysis.is_dag ? "✅ Yes" : "❌ No"}
              </p>
            </div>

            <div
              style={{
                padding: "16px",
                borderTop: "1px solid #e5e7eb",
                textAlign: "center",
              }}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "8px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};