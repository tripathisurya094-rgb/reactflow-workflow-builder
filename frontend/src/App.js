import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <PipelineToolbar />

      <div
        style={{
          flex: 1,
          minHeight: 0,
        }}
      >
        <PipelineUI />
      </div>

      <SubmitButton />
    </div>
  );
}

export default App;