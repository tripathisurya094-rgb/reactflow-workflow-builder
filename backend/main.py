from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[dict]


def is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}

    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        graph[source].append(target)

    visited = set()
    path = set()

    def dfs(node):
        if node in path:
            return False

        if node in visited:
            return True

        path.add(node)

        for neighbor in graph[node]:
            if not dfs(neighbor):
                return False

        path.remove(node)
        visited.add(node)

        return True

    for node in graph:
        if node not in visited:
            if not dfs(node):
                return False

    return True


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag(
            pipeline.nodes,
            pipeline.edges
        )
    }