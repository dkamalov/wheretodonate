import React, { Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';
import ZipInfo from "./ZipInfo";
import nyc from '../../images/nyc.png';
import "choices.js/public/assets/styles/choices.min.css";
import Selection from './Selection';
import {Link} from 'react-router-dom';
import ZipInfoElectronics from "./ZipInfoElectronics";
import {Redirect} from 'react-router-dom';


class ZipSearch extends Component {
	

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
    return (

<body className="bg-light">
      <div class="containercenter">
        <div className="s013">
          <fieldset>
          <legend> Have a little extra? </legend>
          </fieldset>
          <div className="inner-form">
            <div className="left">
              <div className="input-wrap first">
                <div className="input-field first">
                  <label> I Want To Donate </label>
                  <div className="input-select">
                  <Selection 
                    setType = {this.setType}
                  />
                  </div>
                </div>
              </div>
              <div className="input-wrap second">
                <div className="input-field second">
                 <label>My Zipcode Is</label>
                   <input name="code" defaultValue={this.state.zip} type="text" onChange={(e) => { this.setZip(e); }} value={this.state.code}  />
                </div>
              </div>
            </div>
            <button onClick={this.componentDidMount} class="btn-search" >Search</button> 

          </div>

      <br></br>
      <br></br>
      <br></br>
     
 

        {this.state.match ? (
            <div>
              <center>
              
                {this.state.zip.map((item, index) => (
                  <ZipInfoElectronics
                    key={index}
                    address={item.address}
                    phone={item.public_phone}
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
       <div class="people"
        style={{color: '#999', textAlign:'right', padding:'10', fontFamily:'Poppins', fontSize:'10'}}>Â© Copyright 2021 wheretodonate.nyc. All rights reserved.</div>
        <div className="people"><center><img src={nyc} width="800px"></img></center></div>
      </div>
</body>

    );
  }
}
export default ZipSearch;
