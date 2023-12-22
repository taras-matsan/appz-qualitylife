import React from "react";
import {Routes, Route} from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import Patients from "./pages/patients/Patients";
import History from "./pages/history/History";
import Profile from "./pages/profile/Profile";
import ChooseAnalysis from "./components/patient/ChooseAnalysis";
import cssApp from './App.css';
import AnalysisContainer from "./components/analysiscontainer/AnalysisContainer";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/patients'} element={<Patients/>}/>
                    <Route path={'/history'} element={<History/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/patient/choose-analysis'} element={<ChooseAnalysis/>}/>
                    <Route path={'/patient/analysis'} element={<AnalysisContainer />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
