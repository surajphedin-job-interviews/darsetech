import { useEffect } from "react";

function App() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h1>
        Assume that there are three buttons in a webpage with ids: button0,
        button1, button2. What will be the output of the following function for
        each button if the buttons are clicked.
      </h1>
      <pre>
        <code>
          {`function hookupevents() {
              for (var i = 0; i < 3; i++) {
                document.getElementById("button" + i)
                  .addEventListener("click", function() {
                  alert(i);
                });
              }
          }`}
        </code>
      </pre>

      <p
        style={{
          marginTop: "100px",
        }}
      >
        Answer: I think alert will pop up in each click with the value of 0, 1
        and 2 for button0, button1 and button2 respectively.
      </p>
    </div>
  );
}

export default App;
