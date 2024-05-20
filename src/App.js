import "./App.css";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import YouShouldKnow from "./components/YouShouldKnow";
import EditorPicks from "./components/EditorPicks";
function App() {
  return (
    <>
      <Navbar />
      <Headline />
      <YouShouldKnow />
      <EditorPicks />
    </>
  );
}

export default App;
