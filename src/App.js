import "./App.css";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import YouShouldKnow from "./components/YouShouldKnow";
import EditorPicks from "./components/EditorPicks";
import Videos from "./components/Videos";
import FeaturedVoices from "./components/FeaturedVoices";
function App() {
  return (
    <>
      <Navbar />
      <Headline />
      <YouShouldKnow />
      <EditorPicks />
      <Videos />
      <FeaturedVoices />
    </>
  );
}

export default App;
