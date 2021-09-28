import React, { Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import nyc from '../../images/nyc.png';
import "choices.js/public/assets/styles/choices.min.css";
import SelectionP from './SelectionP';
import {Link} from 'react-router-dom';
import ZipInfoP from "./ZipInfoPharma";


class PharmaSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: [],
      code: this.props.location.state.code,
      match: false,
      type: this.props.location.state.type,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.doStuff = this.doStuff.bind(this);
  }

  setZip = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  setType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };



  componentDidMount() {
    if (this.state.type === "electronics") {
      axios
        .get(
          `https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=${this.state.code}`
        )
        .then((result) => {
          if (result.data.length > 0) {
            this.setState({
              zip: result.data,
              match: true,
              
            });
          } else {
            this.setState({
              match: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.state.type === "textiles") {
      axios
        .get(
          `https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=${this.state.code}`
        )
        .then((result) => {
          if (result.data.length > 0) {
            this.setState({
              zip: result.data,
              match: true,
            });
          } else {
            this.setState({
              match: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.state.type === "pharmaceuticals") {
      axios
        .get(
          `https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=${this.state.code}`
        )
        .then((result) => {
          if (result.data.length > 0) {
            this.setState({
              zip: result.data,
              match: true,
              
            });
          } else {
            this.setState({
              match: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  doStuff() {
    {
      this.setState({ match: false });
    }
  }


  render() {

    let location;

    if(this.state.type === "textiles"){
      location = "/clothing"
    } 
    if(this.state.type === "electronics"){
      location = "/electronics"
    }
    if(this.state.type === "pharmaceuticals"){
      location = "/pharma"
    }
    return (

<body className="bg-color">
<div class="container" style={{maxWidth:'1000px', fontFamily: 'Poppins'}}>
          <div className="s013">
          <form>
            <fieldset>
            <h3 className="text-center mt-5 mb-5">Don't want it? Don't need it? Don't use it?<br></br><b>We’ll help you find where to donate it.</b></h3>
            </fieldset>
            <div className="inner-form">
              <div className="left">
                <div className="input-wrap first">
                  <div className="input-field first">
                    <label align={'left'}> I Want To Donate </label>
                    <div className="input-select">
                      <SelectionP
                        setType={this.setType}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-wrap second">
                  <div className="input-field second">
                    <label align={'left'}>My Zipcode Is</label>
                    <input name="code" value={this.state.code}  type="text" onChange={(e) => { this.setZip(e); }} />
                  </div>
                </div>
              </div>

          
            <Link to = {{pathname: location, state:{code: this.state.code, type: this.state.type}}}>
              <button onClick={this.componentDidMount} class="btn-search" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button> 
            </Link>
          </div>
          </form>

        {this.state.match ? (
            <div>
              <center>
              
                {this.state.zip.map((item, index) => (
                  <ZipInfoP
                    key={index}
                    address={item.address}
                    phone={item.contact_phone_number}
                    website = {item.website}
                    operationtype = {item.operations_type}
                    dropoff_sitename={
                      item.dropoff_sitename ||
                      item.vendor_name ||
                      item.drop_off_site_name 
                    }
                    zipcode={item.zipcode}
                    latitude={item.latitude}
                    longitude={item.longitude}
                  />
                ))}
              </center>
            </div>
          ) : (
              <p></p>
            )}


        </div>
      </div>
      <center>
        <h5 className="mb-5 mt-5">✨ Sorry, no more results found. ✨</h5>
        <img src={nyc} className="img-fluid"></img></center>
</body>

    );
  }
}
export default PharmaSearch;
