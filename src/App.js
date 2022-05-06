import './App.css';
import InfiniteScroll from "./InfiniteScroll";

function App() {
  return (
    <div className="App">
      <div className="app-details">
        <div className="app-title">
          Infinite Scrolling Demo
        </div>
        <div className="app-desc">A simple React JS + Appwrite project to demonstrate infinite scroll paging</div>
        
      </div>
      <InfiniteScroll />
    </div>
  );
}

export default App;
