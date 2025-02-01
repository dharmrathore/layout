import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
	<div className="layout h-100 w-100 d-grid min-vh-100">
		<Header/>
		<Sidebar/>
		<Main/>
		<Footer/>
	</div>
  );
}

export default App;
