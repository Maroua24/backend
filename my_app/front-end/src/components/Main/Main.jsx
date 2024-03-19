import './Main.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Menu from '../Menu/Menu'
import Info from '../Info/Info'
const Main = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Router>
                <Menu/>
                <Info/>
            </Router>
            
        </div>
    )
}
export default Main