function App() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h1>Answer to Question no 6</h1>
      <p>
        &gt; The first function func1 will return an object {`{out: "hello"}`}.
      </p>
      <p>&gt; Whereas the second function func2 will return undefined.</p>
      <p>&gt; Those two functions are different.</p>
      <p>
        &gt; This is because in second function func2, the object after the line
        of return keyword will be ignored which is not the case in first
        function func1.
      </p>
    </div>
  );
}

export default App;
