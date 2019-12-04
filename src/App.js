import React from 'react';
import Routes from "./routes"
import Navigation from "./components/Navigation"





function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes />
      </main>
      
    </div>
  );
}

export default App;
