import './Menu.css'
import {Item , Style} from "../index"
import { FiAlignLeft } from "react-icons/fi";
import { useState } from 'react';
import image from '../../images/icosnet-removebg-preview.png'
const Menu =() => {
    const [statistic, setstatistic] = useState(false);
    const click = () =>{
        setstatistic(!statistic)
    }
    return(
        <>
        <div>
            <img src={image} alt="image" className='w-10 h-10'/>
            <FiAlignLeft className='w-10 cursor-pointer inline-block' onClick={click}/>
            {statistic &&(
                <div className='w-24 h-full font-Main-font'>
                    <ul className="list-group list-group-flush">
                        <Item href="/" item="Dashboard"/>
                        <Item href="/client" item="Client"/>
                        <Item item="Client VIP"/>
                        <Item item="Factures vente"/>
                        <Item item="Factures service"/>
                        <Item item="Avoires vente"/>
                        <Item item="Avoires service"/>
                        <Item item="Facture impayees"/>
                        <Item item="Paiement"/>
                        <Item item="Paiement proformats"/>
                        <Item item="Dates mise en demande"/>
                        <Item item="Facture A ne pas envoyer"/>
                        <Item item="Log Email"/>
                        <Item item="Transaction CIB"/>
                        <Item item="Facture non envoyer"/>
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}

export default Menu