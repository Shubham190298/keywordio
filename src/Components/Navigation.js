import { Link } from "react-router-dom";

function Navigation () {
    return(
        <div className=" container-fluid d-flex justify-content-between mt-3 align-items-center shadow p-3 mb-5 bg-white rounded">
            <div className="logo">
                <h5>APP LOGO</h5>
            </div>
            <div className="">
                <nav>
                    <ul className="d-flex justify-content-around align-items-center">
                        <li className="me-5 list-unstyled"><Link className="text-dark fw-bold" to="/Components/AdInsights">DASHBORD</Link></li>
                        <li className="list-unstyled" ><Link className="text-dark fw-bold" to="/Components/CreateAd">CREATE ADS</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navigation;