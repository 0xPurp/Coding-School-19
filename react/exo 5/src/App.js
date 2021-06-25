import Barre from './Header.js'
import '../node_modules/font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div>
      <Barre />
      <h1 className='text-center text-danger'>Enfin fini les exos</h1>
      <i className='fa fa-pencil text-danger'></i>
    </div>
  );
}

export default App;