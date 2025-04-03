import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>React Form Example</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h2>Welcome, {name}!</h2>
      )}
    </div>
  );
}

export default App;
