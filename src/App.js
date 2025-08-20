import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const res = await fetch("https://note2content-backend.up.railway.app/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
    const data = await res.json();
    setOutput(data.content);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Note2Content</h1>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Paste your notes here..."
        style={{ width: "100%", height: "100px" }}
      />
      <br />
      <button onClick={handleGenerate} style={{ marginTop: "10px" }}>
        Generate Content
      </button>
      <h2>Output</h2>
      <div style={{ whiteSpace: "pre-wrap" }}>{output}</div>
    </div>
  );
}

export default App;
