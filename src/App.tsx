function App() {
  return (
    <div
      style={{
        margin: "100px",
      }}
    >
      <p>Answer: Differences between SSR and SSG:</p>
      <ol>
        <li>In SSR, the page is generated on server during each request.</li>
        <li>In SSG, the page is generated on server during the build time.</li>
      </ol>
    </div>
  );
}

export default App;
