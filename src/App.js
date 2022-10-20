import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog"; 
import Learn from "./Components/Learn FAQ/Learn"; 
import Roadmap from "./Components/Roadmap/Roadmap"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Blog/>
      <News />
      <Learn />  
      <Roadmap/>
      <Contact/> 
    </div>
  );
}

export default App;
