import './App.css'
import './components/Sidebar'
import './components/Reviews'
import './components/Average'
import './components/Sentiment'
import './components/Website'
import Sidebar from './components/Sidebar'
import Reviews from './components/Reviews';
import Average from './components/Average';
import Sentiment from './components/Sentiment';
import Website from './components/Website';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className='right'>
      <div className='topBar'>
      <Reviews />
      <Average />
      <Sentiment />
      </div>
      <div className='bottomBar'>
      <Website />
      </div>
      </div>
    </div>
  );
}

export default App;
