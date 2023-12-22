import React from 'react';
import {useLocation} from 'react-router-dom';
import AnalysisForm from '../analysisform/AnalysisForm';

const AnalysisContainer = () => {

    const location = useLocation();
    const {bloodTests, salivaTests, bronch, general, patient} = location.state;

    console.log(location.state);


    return (
        <div className="analysis">
            <div className="analysis-container">
                <AnalysisForm title="Clinical Blood Analysis" tests={bloodTests}/>
                <AnalysisForm title="Saliva Analysis" tests={salivaTests}/>
                <div className="bronch">
                    <AnalysisForm title="Bronchoscopy results" tests={bronch}/>
                </div>
                <div className="general">
                    <AnalysisForm title="General results" tests={general}/>
                </div>
            </div>
        </div>

    );
};

export default AnalysisContainer;