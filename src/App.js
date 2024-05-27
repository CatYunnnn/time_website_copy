import "./App.css";
import Headline from "./components/Headline";
import Navbar from "./components/Navbar";
import YouShouldKnow from "./components/YouShouldKnow";
import EditorPicks from "./components/EditorPicks";
import Videos from "./components/Videos";
import FeaturedVoices from "./components/FeaturedVoices";
import Audio from "./components/Audio";
import More from "./components/More";
import Others from "./components/Others";
function App() {
  return (
    <>
      <Navbar />
      <Headline />
      <YouShouldKnow />
      <EditorPicks />
      <Videos />
      <FeaturedVoices />
      <Audio />
      <More />
      <Others />
    </>
  );
}

export default App;
