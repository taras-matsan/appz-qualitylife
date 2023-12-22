import React from 'react';
import Sidebar from '../sidebar.js/Sidebar';
import respiratory from '../../pictures/respiratory.png'
import heart from '../../pictures/heart.png'
import digestion from '../../pictures/digestion.png'
import sight from '../../pictures/sight.png'
import {useLocation, useNavigate} from 'react-router-dom';

const ChooseAnalysis = () => {
    const analysisTypes = [
        {title: 'HEART ANALYSIS', imageUrl: '../../pictures/respiratory.png'},
        {title: 'RESPIRATORY ANALYSIS', imageUrl: 'path/to/lungs-image.jpg'},
        {title: 'VISION ANALYSIS', imageUrl: 'path/to/eye-image.jpg'},
        {title: 'DIGESTION ANALYSIS', imageUrl: 'path/to/digestion-image.jpg'},
    ];
    const bloodTests = [
        {name: 'Leukocytes', value: '', type: 'number'},
        {name: 'Hemoglobin level', value: '', type: 'number'},
        {name: 'Erythrocytes', value: '', type: 'number'},
        {name: 'Hematocrit level', value: '', type: 'number'},
        {name: 'Average erythrocytes volume', value: '', type: 'number'},
        {name: 'Average hemoglobin in erythrocyte', value: '', type: 'number'},
        {name: 'Hemoglobin concentration in erythrocyte', value: '', type: 'number'},
        {name: 'Thrombocrit', value: '', type: 'number'},
        {name: 'Platelet distribution width', value: '', type: 'number'},
        {name: 'Platelets', value: '', type: 'number'},
        {name: 'Average thrombocytes volume', value: '', type: 'number'},
        {name: 'Erythrocytes distribution width', value: '', type: 'number'},
        {name: 'Large platelets coefficient', value: '', type: 'number'},
        {name: 'Sedimentation speed of erythrocytes', value: '', type: 'number'}
    ];

    const salivaTests = [
        {name: 'Color', value: '', type: 'text'},
        {name: 'Smell', value: '', type: 'text'},
        {name: 'Reaction', value: '', type: 'text'},
        {name: 'Consistency', value: '', type: 'dropdown', options: ['Thin', 'Thick', 'Sticky', 'Foamy']},
        {name: 'Qualities', value: '', type: 'text'},
        {name: 'Aveolar macrophage', value: '', type: 'number'},
        {name: 'Xanthoma cells', value: '', type: 'number'},
        {name: 'Epithelial cells', value: '', type: 'number'},
        {name: 'Leukocytes', value: '', type: 'number'},
        {name: 'Curschmann\'s spirals', value: '', type: 'text'},
        {name: 'Cholesterol clots', value: '', type: 'text'},
        {name: 'Hematoidin clots', value: '', type: 'text'},
        {name: 'Atypical cells', value: '', type: 'text'},
        {name: 'Bacterial flora', value: '', type: 'text'},
    ];
    const bronch = [
        {name: 'Bronchoscopy: Video', value: '', type: 'file'},
        {name: 'Bronchoscopy notes', value: '', type: 'text'},
        {name: 'Bronchoscopy: Image', value: '', type: 'file'},
        {name: 'Mucous membrane notes', value: '', type: 'text'},
        {name: 'Degree of stenosis', value: '', type: 'text'},
        {name: 'Neoplasm', value: '', type: 'text'},
        {name: 'Content Analysis', value: '', type: 'text'}
    ];

    const general = [
        {name: 'Symptoms', value: '', type: 'text'},
        {name: 'General prognosis for the patient', value: '', type: 'text'},
        {name: 'Recommendations for further treatment', value: '', type: 'text'},
    ];
    const location = useLocation();
    const navigate = useNavigate();
    const patient = location.state?.patient;

    const lastVisits = ["Visit 1", "Visit 2", "Visit 3", "Visit 4"];
    const handleRespiratoryClick = () => {
        navigate('/patient/analysis', {
            state: {bloodTests, salivaTests, bronch, general, patient}
        });
    };

    return (
        <div className="dashboard">
            <div className="analysis-section">
                <div className="analysis-card">
                    <img src={sight} className="analysis-image"/>
                    <div className="analysis-title">VISION ANALYSIS</div>
                </div>
                <div className="analysis-card" onClick={handleRespiratoryClick}>
                    <img src={respiratory} className="analysis-image"/>
                    <div className="analysis-title">RESPIRATORY ANALYSIS</div>
                </div>
                <div className="analysis-card">
                    <img src={heart} className="analysis-image"/>
                    <div className="analysis-title">HEART ANALYSIS</div>
                </div>
                <div className="analysis-card">
                    <img src={digestion} className="analysis-image"/>
                    <div className="analysis-title">DIGESTION ANALYSIS</div>
                </div>
            </div>
            {patient && <Sidebar patient={patient} visits={lastVisits}/>}
        </div>
    );
};

export default ChooseAnalysis;
