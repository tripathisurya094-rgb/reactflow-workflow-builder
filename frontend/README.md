# ReactFlow Workflow Builder

A visual workflow builder built using ReactFlow, React, Zustand, and FastAPI.

## Features

### Node Abstraction

* Reusable BaseNode component
* Reduced duplication across node implementations
* Easy creation of new node types

### Custom Nodes

* Input Node
* Output Node
* Text Node
* LLM Node
* API Node
* Database Node
* Email Node
* Filter Node
* Math Node

### Dynamic Text Node

The Text Node supports variable parsing using:

```text
{{variable}}
```

Example:

```text
Hello {{name}}
Age {{age}}
```

Automatically generates dynamic input handles for:

* name
* age

### Pipeline Analysis

The frontend sends the pipeline structure to the backend.

The backend returns:

* Number of nodes
* Number of edges
* DAG validation result

### DAG Validation

Implemented using DFS-based cycle detection.

Example:

Valid DAG:

```text
Input → LLM → Output
```

Invalid DAG:

```text
A → B
↑   ↓
└───┘
```

---

## Architecture

```text
Frontend (React + ReactFlow)
        |
        | POST /pipelines/parse
        |
Backend (FastAPI)
        |
        ├── Count Nodes
        ├── Count Edges
        └── DAG Validation
```

---

## Tech Stack

Frontend

* React
* ReactFlow
* Zustand

Backend

* FastAPI
* Pydantic

---

## Setup

### Backend

```bash
cd backend

pip install fastapi uvicorn python-multipart

python3 -m uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm start
```

Frontend runs at:

```text
http://localhost:3000
```

---

## Screenshots

### Workflow Builder

(Add Screenshot)

### Dynamic Text Node

(Add Screenshot)

### Pipeline Analysis Modal

(Add Screenshot)

---

## Future Improvements

* Auto-layout using Dagre
* Node execution engine
* Pipeline persistence
* Dark mode
* Real-time collaboration
* Deployment support
