import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './index.css'
import Prenatal from './pages/Prenatal';
import Citopatologico from './pages/Citopatologico'
import Diabetes from './pages/Diabetes'
import Sifilisehiv from './pages/Sifiliehiv'
import Odontologia from './pages/Odontologia'
import Hipertensao from './pages/Hipertensao'
import Home from './pages/Home';
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
        <div className='pgHome'>
            <h1 className='title'>Esus Indicadores</h1>
        </div>

        <BrowserRouter>

        <Navbar/>

            

            <Routes>
                <Route exact path="/" element={<Home />}/>
            </Routes>

            <Routes>
                <Route path="/prenatal" element={<Prenatal />}/>
            </Routes>

            <Routes>
                <Route path="/sifilisehiv" element={<Sifilisehiv />}/>
            </Routes>

            <Routes>
                <Route path="/odontologia" element={<Odontologia />}/>
            </Routes>

            <Routes>
                <Route path="/citopatologico" element={<Citopatologico />}/>
            </Routes>

            <Routes>
                <Route path="/hipertensao" element={<Hipertensao />}/>
            </Routes>

            <Routes>
                <Route path="/diabetes" element={<Diabetes />}/>
            </Routes>

            </BrowserRouter>
        
    </div>
  );
}

export default App;