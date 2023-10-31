// import { Modal } from 'bootstrap';
import './CreateTM.css';
// import { useState } from 'react';
// import Modal from 'bootstrap';

function CreateTM() {
    function myfunction(){
        window.alert("Submitted");
    }
    return(
        <div className='container border rounded p-4'>
           <h6 className='head fw-bold'>Create Text & Media</h6>
           <div className="container mt-3">
            <form className="d-flex flex-wrap justify-content-between" onSubmit={myfunction}>
            <div class="form-group col-5">
                <label for="heading1">Heading 01</label>
                <input type="text" class="form-control" id="heading1" aria-describedby="head1" placeholder="Add aheading thatwould make users interested"/>
            </div>
            <div class="form-group col-5">
                <label for="heading2">Description 01</label>
                <input type="text" class="form-control txt" id="heading2" aria-describedby="head2" placeholder="Add aheading thatwould make users interested"/>
            </div>
            <div class="form-group col-5 mt">
                <label for="heading2">Heading 02</label>
                <input type="text" class="form-control" id="heading2" aria-describedby="head2" placeholder="Add aheading thatwould make users interested"/>
            </div><div className='col-4'></div>
            <div class="form-group col-5 mt-3">
                <label for="heading2">Bussiness Name</label>
                <input type="text" class="form-control" id="heading2" aria-describedby="head2" placeholder="Add your bussiness name"/>
            </div>
            <div class="form-group col-5 mt-3">
                <label for="exampleInputPassword1">Button Label</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group col-12 mt-3">
                <label for="url">Website URL</label>
                <input type="text" class="form-control" id="url" aria-describedby="url" placeholder="Add the Url of the langing page you want to redirect users to"/>
            </div>
            </form>
            <div className='d-flex justify-content-end mt-5'>
               <button type='submit' className='btn'>Back</button>
               <button type='submit' className='btn btn-primary' onClick={myfunction}>Submit</button>
            </div>
           </div>
        </div>
    )
}
export default CreateTM;