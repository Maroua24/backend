import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import "./App.css"
import {Nav,Style,Menu,Dashboard,Client,AddClient} from "./components/index"

const App = () => {
    return(
        <>
            <Router>
                {/* <Nav/> */}
                <Style>
                    <Menu/>
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/Client' element={<Client/>} />
                        <Route path='/AddClient' element={<AddClient/>} />
                    </Routes>
                </Style>
            </Router>
        </>
    )
}

export default App