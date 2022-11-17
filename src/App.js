import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <InlineStyle />
      <br />
      <CssModules />
      <br />
      <StyledJsx />
      <br />
      <StyledComponents />
      <br />
      <Emotion />
    </div>
  );
}
