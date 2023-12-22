import "./SearchBar.css";
import SearchIcon from "../../pictures/search.png";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
const patients = [
    { name: 'Ivan', surname: 'Ivanenko', medicalID: 'P001' },
    { name: 'Kateryna', surname: 'Kovalenko', medicalID: 'P002' },
    { name: 'Oleksandr', surname: 'Ostapenko', medicalID: 'P003' },
    { name: 'Mariya', surname: 'Mykhailenko', medicalID: 'P004' },
    { name: 'Andriy', surname: 'Andriyenko', medicalID: 'P005' },
    { name: 'Yuliya', surname: 'Yakovenko', medicalID: 'P006' },
    { name: 'Dmytro', surname: 'Dmytrenko', medicalID: 'P007' },
    { name: 'Hanna', surname: 'Havrylenko', medicalID: 'P008' },
    { name: 'Serhiy', surname: 'Sydorenko', medicalID: 'P009' },
    { name: 'Olena', surname: 'Oliynyk', medicalID: 'P010' },
    { name: 'Mykhailo', surname: 'Maksymenko', medicalID: 'P011' },
    { name: 'Sofiya', surname: 'Synenko', medicalID: 'P012' },
    { name: 'Matviy', surname: 'Vovk', medicalID: 'P013' },
    { name: 'Yelyzaveta', surname: 'Herasymenko', medicalID: 'P014' },
    { name: 'Volodymyr', surname: 'Vasylenko', medicalID: 'P015' },
    { name: 'Anna', surname: 'Antonenko', medicalID: 'P016' },
    { name: 'Daniil', surname: 'Dovzhenko', medicalID: 'P017' },
    { name: 'Mila', surname: 'Melnyk', medicalID: 'P018' },
    { name: 'Yakiv', surname: 'Yaroshenko', medicalID: 'P019' },
    { name: 'Iryna', surname: 'Ishchenko', medicalID: 'P020' }
];

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredPatients, setFilteredPatients] = useState(patients);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value.length > 0) {
            const filtered = patients.filter((patient) => {
                return patient.name.toLowerCase().includes(value.toLowerCase()) ||
                       patient.surname.toLowerCase().includes(value.toLowerCase()) ||
                       patient.medicalID.toLowerCase().includes(value.toLowerCase());
            });
            setFilteredPatients(filtered);
        } else {
            setFilteredPatients(patients);
        }
    };

    function handleItemClick(patient) {
        console.log(patient.name);
        navigate('/patient/choose-analysis', { state: { patient } });
    }

    return (
        <>
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Enter patient name or medical ID"
                    onChange={handleChange}
                    value={searchInput}
                    className="textinput"
                />
                <button className="searchbutton">
                    <img src={SearchIcon} alt="Search" className="searchicon"/>
                </button>
            </div>
            <div className="list-container">
                <ul className="patient-list">
                    {filteredPatients.map((patient, index) => (
                        <li key={index} className="list-item" onClick={() => handleItemClick(patient)}>
                            <span className="patient-name">{patient.name}</span>
                            <span className="patient-surname">{patient.surname}</span>
                            <span className="patient-medicalid">{patient.medicalID}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SearchBar;