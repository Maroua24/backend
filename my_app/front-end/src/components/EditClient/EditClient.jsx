import "./AddClient.css"
import { Select, Input , Style} from "../index"
import { useState, useEffect } from "react";
import axios from 'axios'
import { useDispatch ,useSelector} from "react-redux";
import { addClient } from "../../Redux/ClientReduser";
import { useNavigate } from 'react-router-dom'

const AddClient = () => {
    const [Catégorie_de_compte, setCatégorie_de_compte] = useState("");
    const [Raison_sociale, setRaison_sociale] = useState("");
    const [Sigle, setSigle] = useState("");
    const [Code_TVA, setCode_TVA] = useState("");
    const [Nature_du_compte, setNature_du_compte] = useState("");
    const [NIF, setNIF] = useState("");
    const [NIS, setNIS] = useState("");
    const [Registre_de_commerce, setRegistre_de_commerce] = useState("");
    const [Article_imposition, setArticle_imposition] = useState("");
    const [Devise, setDevise] = useState("");
    const [Rue, setRue] = useState("");
    const [Ville, setVille] = useState("");
    const [Région, setRégion] = useState("");
    const [Type_de_région, setType_de_région] = useState("");
    const [Code_postal, setCode_postal] = useState("");
    const [Pays, setPays] = useState("");
    const [Téléphone, setTéléphone] = useState("");
    const [Email, setEmail] = useState("");
    const [Secteur_activité, setSecteur_activité] = useState("");
    const [Condition_de_paiement, setCondition_de_paiement] = useState("");
    const [Créé_le, setCréé_le] = useState("");
    const [Créé_par, setCréé_par] = useState("");
    const [Nom, setNom] = useState("");
    const [Prénom, setPrénom] = useState("");
    const [Fonction, setFonction] = useState("");
    const [Type_de_client, setType_de_client] = useState("");
    const [Fax, setFax] = useState("");
    const [Dossier_validé, setDossier_validé] = useState("");
    const [valid, setvalid] = useState("");


    // useEffect(() => {
    //     (async () => await Load())();
    // }, []);

    // async function Load(){
    //     const result = await axios.get(
    //         "http:127.0.0.1:8000/addclient");
    //         // setUsers(result.data);
    //         console.log(result)
    // }



    return (
        <>
            <form  method="post" action="{% url 'formulaire_client' %}" onSubmit={handleSubmit}>
                <h1 className="text-[--light-color] text-2xl">Ajouter un client:</h1>
                {/* {% csrf_token %} */}
                <div style={{ display: "block" }}>
                    <Select name="Catégorie de compte :" value_1="C" value_2="S" choix1="Client" choix2="Supplier" id="Catégorie_de_compte " value="Catégorie_de_compte" onChange={e => setCatégorie_de_compte(e.target.value)}/>

                    <Style>
                        <Input name="Raison sociale :" type="text" id="Raison_sociale" value="Raison_sociale" onChange={e => setRaison_sociale(e.target.value)} />
                        <Input name="Sigle :" type="text" id="Sigle" value="Sigle" onChange={e => setSigle(e.target.value)}/>
                    </Style>
                    <Input name="Code TVA :" type="text" id="Code_TVA"  value="Code_TVA" onChange={e => setCode_TVA(e.target.value)}/>

                    <Style>
                        <Input name="Nature du compte :" type="text" id="Nature_du_compte"  value="Nature_du_compte" onChange={e => setNature_du_compte(e.target.value)}/>
                        <Input name="NIF :" type="text" id="NIF"  value="NIF" onChange={e => setNIF(e.target.value)}/>
                        <Input name="NIS :" type="text" id="NIS" value="NIS" onChange={e => setNIS(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Registre de commerce :" type="text" id="Registre_de_commerce"  value="Registre_de_commerce" onChange={e => setRegistre_de_commerce(e.target.value)}/>
                        <Input name="Article d'imposition :" type="text" id="Article_imposition" value="Article_imposition"  onChange={e => setArticle_imposition(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Devise :" type="text" id="Devise" value="Devise" onChange={e => setDevise(e.target.value)}/>
                        <Input name="Rue :" type="text" id="Rue" value="Rue"  onChange={e => setRue(e.target.value)}/>
                        <Input name="Ville :" type="text" id="Ville" value="Ville" onChange={e => setVille(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Région :" type="text" id="Région" value="Région" onChange={e => setRégion(e.target.value)}/>
                        <Input name="Type de région :" type="text" id="Type_de_région" value="Région" onChange={e => setType_de_région(e.target.value)}/>
                        <Input name="Code postal :" type="text" id="Code_postal" value="Code_postal" onChange={e => setCode_postal(e.target.value)}/>
                        <Input name="Pays :" type="text" id="Pays" value="Pays" onChange={e => setPays(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Téléphone :" type="text" id="Téléphone" value="Téléphone" onChange={e => setTéléphone(e.target.value)}/>
                        <Input name="Email :" type="email" id="Email" value="Email" onChange={e => setEmail(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Secteur d'activité :" type="text" id="Secteur_activité" value="Secteur_activité"  onChange={e => setSecteur_activité(e.target.value)}/>
                        <Input name="Condition de paiement :" type="text" id="Condition_de_paiement" value="Condition_de_paiement" onChange={e => setCondition_de_paiement(e.target.value)}/>
                        <Input name="Créé le :" type="date" id="Créé_le" value="Créé_le"onChange={e => setCréé_le(e.target.value)}/>
                        <Input name="Créé par :" type="text" id="Créé_par" value="Créé_par" onChange={e => setCréé_par(e.target.value)}/>
                    </Style>

                    <Style>
                        <Input name="Nom :" type="text" id="Nom" value="Nom" onChange={e => setNom(e.target.value)}/>
                        <Input name="Prénom :" type="text" id="Prénom" value="Prénom" onChange={e => setPrénom(e.target.value)}/>
                        <Input name="Fonction :" type="text" id="Fonction" value="Fonction" onChange={e => setFonction(e.target.value)}/>
                        <Input name="Type de client :" type="text" id="Type_de_client" value="Type_de_client" onChange={e => setType_de_client(e.target.value)}/>
                        <Input name="Fax :" type="text" id="Fax" value="Type_de_client" onChange={e => setFax(e.target.value)}/>
                    </Style>

                        <Select name="Dossier validé :" value_1="Y" value_2="N" choix1="oui" choix2="Non" id="Dossier_validé" value="Dossier_validé" onChange={e => setDossier_validé(e.target.value)}/>
                        <Select name="Status:" value_1="A" value_2="I" choix1="Actif" choix2="Inactif" id="status" value="Status" onChange={e => setvalid(e.target.value)}/>
                        <button type="submit" className="text-xs bg-card-color text-light-color border-2 border-outset border-card-color py-1 px-2" onClick={Edit}>Update</button>
                    </div>
            </form>
        </>
    );
};

export default AddClient