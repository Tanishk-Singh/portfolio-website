export default function EdgeAiKnowledgeGraphContent() {
  return (
    <>
      <p>
        Placeholder write-up — replace with the real project narrative once
        the corpus and query set are further along.
      </p>
      <h2>The idea</h2>
      <p>
        Most literature reviews read as a list. This project treats twenty
        years of Edge AI research as a graph instead — Papers, Authors, and
        Topics as node types, built from a citation-based corpus seeded via
        the Semantic Scholar API and expanded outward.
      </p>
      <h2>Why Neo4j over NetworkX</h2>
      <p>
        The questions this graph needs to answer are multi-hop by nature —
        who influenced whom, which topics died out and why, where the
        traction moved. Cypher's query model fits that shape better than
        adjacency-list traversal, even at the cost of some setup overhead.
      </p>
      <h2>Status</h2>
      <p>
        Corpus construction is underway. RAG over full-text papers is
        explicitly scoped to a second phase, once the graph structure is
        solid on its own.
      </p>
    </>
  );
}
