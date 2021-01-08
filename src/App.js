import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body*/}
      <div className="app__body">
        <Sidebar />
      {/* Sidebar*/}
      {/* Feed*/}
      {/* widgets*/}
      </div>
    </div>
  );
}

export default App;
