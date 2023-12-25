import logo from './logo.svg';
import './App.css';
import LazyLoadingComponent from './loading';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <LazyLoadingComponent />
    </div>
  );
}

export default App;
