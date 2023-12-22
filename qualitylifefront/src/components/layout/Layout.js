import {Link, Outlet} from "react-router-dom";

import logo from "../../pictures/logo.png";

import cssLay from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <div className={cssLay.header}>
                <Link to={'/'} className={cssLay.logo}>
                    <img src={logo} alt="logo" className={cssLay.imagelogo}/>
                    <p>QL</p>
                </Link>
                <div className={cssLay.navbar}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/patients'}>Patients</Link>
                    <Link to={'/history'}>History</Link>
                </div>
                <Link to={'/profile'} className={cssLay.profile}>
                    <img
                        src="https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?w=996&t=st=1702883929~exp=1702884529~hmac=8de366c0e81be937c4ad55ed705dbc55086c2710ff50f1f8261a0f24d4ee7239"
                        alt="avatar" className={cssLay.imageprofile}/>
                    <p>Volodymyr D.</p>
                </Link>
            </div>
            <div className={cssLay.outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;