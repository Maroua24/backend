import "./AddClient.css"
import { Select, Input , Style} from "../index"
// import { useState } from "react";
// import axios from 'axios'
const AddClient = () => {
    // const [Catégorie_de_compte, setCatégorie_de_compte] = useState("");
    // const [Raison_sociale, setRaison_sociale] = useState("");
    // const [Sigle, setSigle] = useState("");
    // const [Code_TVA, setCode_TVA] = useState("");
    // const [Nature_du_compte, setNature_du_compte] = useState("");
    // const [NIF, setNIF] = useState("");
    // const [NIS, setNIS] = useState("");
    // const [Registre_de_commerce, setRegistre_de_commerce] = useState("");
    // const [Article_imposition, setArticle_imposition] = useState("");
    // const [Devise, setDevise] = useState("");
    // const [Rue, setRue] = useState("");
    // const [Ville, setVille] = useState("");
    // const [Région, setRégion] = useState("");
    // const [Type_de_région, setType_de_région] = useState("");
    // const [Code_postal, setCode_postal] = useState("");
    // const [Pays, setPays] = useState("");
    // const [Téléphone, setTéléphone] = useState("");
    // const [Email, setEmail] = useState("");
    // const [Secteur_activité, setSecteur_activité] = useState("");
    // const [Condition_de_paiement, setCondition_de_paiement] = useState("");
    // const [Créé_le, setCréé_le] = useState("");
    // const [Créé_par, setCréé_par] = useState("");
    // const [Nom, setNom] = useState("");
    // const [Prénom, setPrénom] = useState("");
    // const [Fonction, setFonction] = useState("");
    // const [Type_de_client, setType_de_client] = useState("");
    // const [Fax, setFax] = useState("");
    // const [Dossier_validé, setDossier_validé] = useState("");
    // const [valid, setvalid] = useState("");

    // useEffect(() => {
    //     (async () => await Load())();
    // }, []);

    // async function Load(){
    //     const result = await axios.get(
    //         "http:127.0.0.1:8000/addclient");
    //         setUsers(result.data);
    //         console.log(result)
    // }

    //     async function save(event) {
    //         event.preventDefault();
    //         try {
    //             await axios.post("http://127.0.0.1:8000/addclient", {
    //                 Catégorie_de_compte: Catégorie_de_compte,
    //                 Raison_sociale: Raison_sociale,
    //                 Sigle: Sigle,
    //                 Code_TVA: Code_TVA,
    //                 Nature_du_compte: Nature_du_compte,
    //                 NIF: NIF,
    //                 NIS: NIS,
    //                 Registre_de_commerce: Registre_de_commerce,
    //                 Article_imposition: Article_imposition,
    //                 Devise: Devise,
    //                 Rue: Rue,
    //                 Ville: Ville,
    //                 Région: Région,
    //                 Type_de_région: Type_de_région,
    //                 Code_postal: Code_postal,
    //                 Pays: Pays,
    //                 Téléphone: Téléphone,
    //                 Email: Email,
    //                 Secteur_activité: Secteur_activité,
    //                 Condition_de_paiement: Condition_de_paiement,
    //                 Créé_le: Créé_le,
    //                 Créé_par: Créé_par,
    //                 Nom: Nom,
    //                 Prénom: Prénom,
    //                 Fonction: Fonction,
    //                 Type_de_client: Type_de_client,
    //                 Fax: Fax,
    //                 Dossier_validé: Dossier_validé,
    //                 valid: valid
    //             });
    //             alert("Client Registration Successfully")
    //             Load();
    //         } catch (error) {
    //             {
    //                 alert("User Registration Failed");
    //             }
    //         }
    //     }
    
    return (
        <>
            <form action="{% url 'formulaire_client' %}" method="post">
                <h1 className="text-[--light-color] text-2xl">Ajouter un client:</h1>
                {/* {% csrf_token %} */}
                <div style={{ display: "block" }}>
                    <Select name="Catégorie de compte :" v1="C" v2="S" choix1="Client" choix2="Supplier" id="Catégorie_de_compte "/>

                    <Style>
                        {/* value="Raison_sociale" */}
                    <Input name="Raison sociale :" type="text" id="Raison_sociale" />
                        <Input name="Sigle :" type="text" id="Sigle" value="Sigle"/>
                    </Style>
                    <Input name="Code TVA :" type="text" id="Code_TVA"  value="Code_TVA"/>

                    <Style>
                        <Input name="Nature du compte :" type="text" id="Nature_du_compte"  />
                        <Input name="NIF :" type="text" id="NIF"  value="NIF"/>
                        <Input name="NIS :" type="text" id="NIS" value="NIS"/>
                    </Style>

                    <Style>
                        <Input name="Registre de commerce :" type="text" id="Registre_de_commerce"  />
                        <Input name="Article d'imposition :" type="text" id="Article_imposition" value="Article_imposition"/>
                    </Style>

                    <Style>
                        <Input name="Devise :" type="text" id="Devise" value="Devise"/>
                        <Input name="Rue :" type="text" id="Rue" value="Rue"/>
                        <Input name="Ville :" type="text" id="Ville" value="Ville"/>
                    </Style>

                    <Style>
                        <Input name="Région :" type="text" id="Région" value="Région"/>
                        <Input name="Type de région :" type="text" id="Type_de_région" value="Région"/>
                        <Input name="Code postal :" type="text" id="Code_postal" value="Code_postal"/>
                        <Input name="Pays :" type="text" id="Pays" value="Pays"/>
                    </Style>

                    <Style>
                        <Input name="Téléphone :" type="text" id="Téléphone" value="Téléphone"/>
                        <Input name="Email :" type="email" id="Email" value="Email"/>
                    </Style>

                    <Style>
                        <Input name="Secteur d'activité :" type="text" id="Secteur_activité" value="Secteur_activité"/>
                        <Input name="Condition de paiement :" type="text" id="Condition_de_paiement" value="Condition_de_paiement"/>
                        <Input name="Créé le :" type="date" id="Créé_le" value="Créé_le"/>
                        <Input name="Créé par :" type="text" id="Créé_par" value="Créé_par"/>
                    </Style>

                    <Style>
                        <Input name="Nom :" type="text" id="Nom" value="Nom"/>
                        <Input name="Prénom :" type="text" id="Prénom" value="Prénom"/>
                        <Input name="Fonction :" type="text" id="Fonction" value="Fonction"/>
                        <Input name="Type de client :" type="text" id="Type_de_client" value="Type_de_client"/>
                        <Input name="Fax :" type="text" id="Fax" value="Type_de_client"/>
                    </Style>

                        <Select name="Dossier validé :" v1="Y" v2="N" choix1="oui" choix2="Non" id="Dossier_validé" value="Dossier_validé"/>
                        <Select name="Status:" v1="A" v2="I" choix1="Actif" choix2="Inactif" id="status" value="Status" />
                        <button type="submit" className="text-xs bg-card-color text-light-color border-2 border-outset border-card-color py-1 px-2">Envoyer</button>
                    </div>
            </form>
        </>
    );
};

export default AddClient