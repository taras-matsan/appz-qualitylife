import React, {useState} from 'react';
import TestItem from "../testitem/TestItem";
import axios from "axios";

const AnalysisForm = (props) => {
    const [values, setValues] = useState([]);

    const getValues = (value) => {
        if (!(values === [])) {
            const updated = values.map(item => {
                if (item.test.name === value.test.name) {
                    return value;
                }
                return item;
            });

            if (!values.some(item => item.test.name === value.test.name)) {
                updated.push(value);
            }

            setValues(updated);
        } else {
            setValues(value);
        }
    }

    const getPartsByName = (array, targetName, part) => {
        for (const key in array) {
            if (array[key].test.name === targetName) {
                return parseFloat(array[key].newValue.split('-')[part]);
            }
        }
        return undefined;
    };

    const getName = (array, targetName) => {
        for (const key in array) {
            if (array[key].test.name === targetName) {
                return array[key].newValue;
            }
        }

        return undefined;
    };

    const postBloodToStrapi = async () => {
        try {
            const formData = {
                upperLeukocyteCount: getPartsByName(values, 'Leukocytes', 0),
                belowLeukocyteCount: getPartsByName(values, 'Leukocytes', 1),
                upperHemoglobinLevel: getPartsByName(values, 'Hemoglobin level', 0),
                belowHemoglobinLevel:getPartsByName(values, 'Hemoglobin level', 1),
                upperErythrocyteCount: getPartsByName(values, 'Erythrocytes', 0),
                belowErythrocyteCount: getPartsByName(values, 'Erythrocytes', 1),
                upperHematocritLevel: getPartsByName(values, 'Hematocrit level', 0),
                belowHematocritLevel: getPartsByName(values, 'Hematocrit level', 1),
                upperMeanCorpuscularVolume: getPartsByName(values, 'Average erythrocytes volume', 0),
                belowMeanCorpuscularVolume: getPartsByName(values, 'Average erythrocytes volume', 1),
                upperMeanCorpuscularHemoglobin: getPartsByName(values, 'Average hemoglobin in erythrocyte', 0),
                belowMeanCorpuscularHemoglobin: getPartsByName(values, 'Average hemoglobin in erythrocyte', 1),
                upperThrombocrit: getPartsByName(values, 'Thrombocrit', 0),
                belowThrombocrit: getPartsByName(values, 'Thrombocrit', 1),
                plateletDistributionWidthUpper: getPartsByName(values, 'Platelet distribution width', 0),
                plateletDistributionWidthBelow: getPartsByName(values, 'Platelet distribution width', 1),
                upperPlateletCount: getPartsByName(values, 'Platelets', 0),
                belowPlateletCount: getPartsByName(values, 'Platelets', 1),
                upperMeanPlateletVolume: getPartsByName(values, 'Average thrombocytes volume', 0),
                belowMeanPlateletVolume: getPartsByName(values, 'Average thrombocytes volume', 1),
                upperErythrocyteDistributionWidth: getPartsByName(values, 'Hemoglobin concentration in erythrocyte', 0),
                belowErythrocyteDistributionWidth: getPartsByName(values, 'Hemoglobin concentration in erythrocyte', 1),
                upperLargePlateletRatio: getPartsByName(values, 'Large platelets coefficient', 0),
                belowLargePlateletRatio: getPartsByName(values, 'Large platelets coefficient', 1),
                upperErythrocyteSedimentationRate: getPartsByName(values, 'Sedimentation speed of erythrocytes', 0),
                belowErythrocyteSedimentationRate: getPartsByName(values, 'Sedimentation speed of erythrocytes', 1)
            }

            const response = await axios.post('http://localhost:1337/api/blood-analyses', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error posting data to Strapi:', error);
        }
    };

    const postSputumToStrapi = async () => {
        try {
            const formData = {
                color: getName(values, 'Color'),
                odor: getName(values, 'Smell'),
                reaction: getName(values, 'Reaction'),
                consistency:getName(values, 'Consistency'),
                character: getName(values, 'Qualities'),
                alveolarMacrophageUpperCount: getPartsByName(values, 'Aveolar macrophage', 1),
                alveolarMacrophageBelowCount: getPartsByName(values, 'Aveolar macrophage', 0),
                xanthomatousCellUpperCount: getPartsByName(values, 'Xanthoma cells', 1),
                xanthomatousCellBelowCount: getPartsByName(values, 'Xanthoma cells', 0),
                epithelialCellUpperCount: getPartsByName(values, 'Epithelial cells', 1),
                epithelialCellBelowCount: getPartsByName(values, 'Epithelial cells', 0),
                leukocyteUpperCount: getPartsByName(values, 'Leukocytes', 1),
                leukocyteBelowCount: getPartsByName(values, 'Leukocytes', 0),
                kurtzmanSpiralData: getName(values, 'Curschmann\'s spirals'),
                cholesterolCrystalsData: getName(values, 'Cholesterol clots'),
                hematoxylinCrystalsData: getName(values, 'Hematoidin clots'),
                atypicalCellData: getName(values, 'Atypical cells'),
                bacterialFloraData: getName(values, 'Bacterial flora')
            }

            const response = await axios.post('http://localhost:1337/api/sputum-analyses', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error posting data to Strapi:', error);
        }
    };

    const postBronchToStrapi = async () => {
        try {
            const formData = {
                symptoms: getName(values, 'Symptoms'),
                prognosis: getName(values, 'General prognosis for the patient'),
                recommendations: getName(values, 'Recommendations for further treatment'),
                blood_analysis: "none",
                sputum_analysis: "none",
                bronchoscopy_report: "none"
            };

            const response = await axios.post('http://localhost:1337/api/medical-examinations', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error posting data to Strapi:', error);
        }
    };

    const postGeneralToStrapi = async () => {
        try {
            const formData = new FormData();
            formData.append("generalAppearance", getName(values, 'Bronchoscopy notes'));
            formData.append("mucousMembrane", getName(values, 'Mucous membrane notes'));
            formData.append("degreeOfStenosis", getName(values, 'Degree of stenosis'));
            formData.append("neoplasm", getName(values, 'Neoplasm'));
            formData.append("contentAnalysis", getName(values, 'Content Analysis'));
            formData.append("bronchoscopyImage", getName(values, 'Bronchoscopy: Image'));
            formData.append("bronchoscopyVideo", getName(values, 'Bronchoscopy: Video'));

            const response = await axios.post('http://localhost:1337/api/bronchoscopy-reports', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error posting data to Strapi:', error);
        }
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();

        const title = props.title;
        if (title === "Clinical Blood Analysis") {
            console.log(title);
            await postBloodToStrapi();
        } else if (title === "Saliva Analysis") {
            console.log(title);
            await postSputumToStrapi();
        } else if (title === "Bronchoscopy results") {
            console.log(title);
            await postBronchToStrapi();
        } else if (title === "General results") {
            console.log(title);
            await postGeneralToStrapi();
        }
    }

    return (
        <div className="analysis-form">
            <h2 className="analysis-form-header">{props.title}</h2>
            <div className="test-items">
                {props.tests.map((test, index) => (
                    <TestItem key={index} test={test} onChange={getValues}/>
                ))}
            </div>
            <div className="analysis-button-container">
                <button className="analysis-button" onClick={handleButtonClick}>Save analysis</button>
            </div>
        </div>
    );
};

export default AnalysisForm;
