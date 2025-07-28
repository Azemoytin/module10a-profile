import './App.css';
import Profile from './Profile';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Meet Our Featured Person</h1>
      <Profile
        name="William King"
        occupation="Professional Baseball Player"
        funFact="Obtained 63 home runs in a single season"
      />
    </div>
  );
}

export default App;
