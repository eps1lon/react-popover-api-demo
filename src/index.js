import { StrictMode, version } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <p>React: {version}</p>
    <details
      onToggle={(event) => {
        console.log("details toggle", event);
      }}
    >
      <summary>Summary</summary>
      <div>Details</div>
    </details>
    <button popoverTargetElement="mypopover">
      Toggle the popover (popoverTargetElement)
    </button>
    <button popoverTargetElement="mypopover" popoverTargetAction="show">
      Show the popover
    </button>
    <button popoverTargetElement="mypopover" popoverTargetAction="hide">
      Hide the popover
    </button>
    <button popoverTarget="mypopover">
      Show the popover (warns about using "popoverTargetElement"
    </button>
    <div
      id="mypopover"
      popover="auto"
      onToggle={(event) => {
        console.log(event);
      }}
      onBeforeToggle={(event) => {
        console.log(event);
      }}
    >
      Popover content
    </div>

    <button popoverTargetElement="mypopover-cancelled">
      Toggle the popover (but the popover cancels that via preventDefault)
    </button>
    <div
      id="mypopover-cancelled"
      popover="auto"
      onToggle={(event) => {
        console.log(event);
      }}
      onBeforeToggle={(event) => {
        console.log(event);
        event.preventDefault();
      }}
    >
      Popover content
    </div>
  </StrictMode>,
);
