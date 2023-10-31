import './CreateAd.css';
// import CreateTM from './CreateTM';
import { Link } from 'react-router-dom';
// import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function CreateAd() {
    // function nxtpage (){
    //     <CreateTM/>
    // }
    
    return(
        <div>
            <div className="container shadow p-3 mb-5 bg-white reounded">
                <h6 className='fw-bold'>Create Ads</h6>
                <div className="d-flex justify-content-around">
                    
                    <div className="card">
                        <input type="checkbox" className='m-2 check form-check-input' value="option2"/>
                            <div class="card">
                                <div class="card-body">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Some quick example text to build on the card title and make up the bulk of the card's content."></textarea>
                                    <div className='card-tittle text-center'>
                                        <p className='text-muted'>Create</p>
                                        <h5 className='z'>Text Ad</h5>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="card">
                        <input type="checkbox" className='m-2 check form-check-input' value="option2"/>
                            <div class="card container">
                                <div class="card-body row">
                                <div class="container">
                                        <div class="d-flex justify-content-center align-items-center border ">
                                            <div class="first align-middle mt-4 textarea ">
                                            <div class="border bg-light align-middle mt-5">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMCMEKDyB8cNb2Ty3pJCfoMmUIz8jm5oFATf1YnPP7P03vC9c5oc7-Mi9LtwpELOoL1M&usqp=CAU' alt='img1' width="50px"/>
                                            </div>
                                            </div>
                                            <div className=''>
                                            <div class="">
                                            <div class="border bg-light">
                                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9VJHpDDZm7R9Xu_JSzKO-MUgCXWwLKZCYauYrQGkqW4zEl8VLSdmhNgZT5wwD_GSHns&usqp=CAU' alt='img2' width="50px"/>
                                            </div>
                                            </div>
                                            <div class="">
                                            <div class="border bg-light">
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC89myRIZ4IlWKt-iY58JYbK34X0h1fxLdw&usqp=CAU' alt='img3' width="50px"/>
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    <div className='card-tittle text-center'>
                                        <p className='text-muted'>Create</p>
                                        <h5 className='z'>Media Ad</h5>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                
                <button type="button" className="btn btn-primary rounded" >
                    <Link to="/CreateTM" className='text-white'>Next</Link>
                </button>
                </div>
            </div>
        </div>
    )
}
export default CreateAd;