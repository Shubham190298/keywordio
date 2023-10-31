import React, { Component } from "react";
import './CreateTM.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

class MultiStepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      formData: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
        field5: "",
        field6: "",
      },
    };
  }

  nextStep = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };

  prevStep = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  handleChange = (field, value) => {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [field]: value,
      },
    }));
  };

  render() {
    const { step, formData } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="container rounded p-5 shadow">
            <h6 className='head fw-bold'>Create Text & Media</h6>
            <form className="d-flex flex-wrap justify-content-between">
            
            <div class="form-group flex-wrap col-5">
                <label for="heading1">Heading 01</label>
                <input 
                type="text" 
                class="form-control" 
                id="heading1"  
                placeholder="Add aheading thatwould make users interested"
                value={formData.field1}
                onChange={(e) => this.handleChange("field1", e.target.value)}
                />
            </div>
            <div class="form-group col-5">
                <label for="description">Description 01</label>
                <input 
                type="text" 
                class="form-control txt" 
                id="description"  
                placeholder="Add primary text to help user understand more about your product,services or offers"
                value={formData.field2}
                onChange={(e) => this.handleChange("field2", e.target.value)}
                />
            </div>
            <div class="form-group col-5 mt">
                <label for="heading2">Heading 02</label>
                <input 
                type="text" 
                class="form-control " 
                id="heading2"  
                placeholder="Add aheading thatwould make users interested"
                value={formData.field3}
                onChange={(e) => this.handleChange("field3", e.target.value)}
                />
            </div>
            <div class="form-group me mt-4 col">
                <label for="business">Business Name</label>
                <input 
                type="text" 
                class="form-control" 
                id="business"  
                placeholder="Add your business name"
                value={formData.field4}
                onChange={(e) => this.handleChange("field4", e.target.value)}
                />
            </div>
            <div class="form-group mt-4 col-5">
                <label for="button">Button Label</label>
                <input 
                type="text" 
                class="form-control " 
                id="button"  
                placeholder="Add aheading thatwould make users interested"
                value={formData.field5}
                onChange={(e) => this.handleChange("field5", e.target.value)}
                />
            </div> 
            <div class="form-group mt-4 col-12">
                <label for="website">Website URL</label>
                <input 
                type="text" 
                class="form-control" 
                id="website"  
                placeholder="Add athe URL of landing page you want to redirect users to"
                value={formData.field6}
                onChange={(e) => this.handleChange("field6", e.target.value)}
                />
            </div>
            </form>

           <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-primary" id="myBtn" onClick={this.nextStep}>Submit</button>
           </div>
          </div>
        );

      case 2:
        return (
          <div className="container-fluid vv border shadow rounded">
            <div className="container text-center align-middle mt mt-5 w-25 p-5 sub shadow">
            <FontAwesomeIcon icon={faCircleCheck} beat size="xl" className="text-primary" />
            <h4 className=" ">Submitted</h4>
            
          </div> 
          </div>
        );

      

      default:
        return null;
    }
  }
}

export default MultiStepForm;
