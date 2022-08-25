import "./App.css";
import Search from "./components/search/search";

function App() {
  const hanfleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={hanfleOnSearchChange} />
    </div>
  );
}

export default App;
