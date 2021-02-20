// import { fromCodePoint } from "core-js/fn/string";
import React, { Component } from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class ZipInfo extends Component {
  
  constructor(props){
    super(props);
      this.state = {
          showingInfoWindow: false,  // Hides or shows the InfoWindow
          activeMarker: {},          // Shows the active marker upon click
          selectedPlace: {} ,
                // Shows the InfoWindow to the selected place upon a marker
      };
    }

 

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  handleClick = (e) => {
    e.preventDefault();
    window.open("https://maps.google.com?q="+this.props.latitude+","+this.props.longitude);
  }


  render() {

    return (


<div className="container mt-4"> 
		<div className="card mb-4 border border-light bg-white rounded" style={{border: 'none'}}>
			<div className="row no-gutters">

				<div class="col-md-7">
              <Map google={this.props.google}
              zoom={17}
              style={mapStyles}
              center={{
                lat:this.props.latitude,
                lng:this.props.longitude
              }} 
              initialCenter={{
                lat:this.props.latitude,
                lng:this.props.longitude
              }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={this.props.dropoff_sitename}
              />
              
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                  
                </div>
              </InfoWindow>
            </Map>        
				</div>		
				<div class="col-md-5 align-self-center pt-3 pb-3">

					<div class="card-body">
            
            {this.props.nonprofit.length > 2 && 
                      <div class="btn btn-success btn-sm pl-2 pr-2 m-1" style={{backgroundColor: '#FF9999', border:'none',borderRadius:'5px', cursor: 'default'}}>
                <svg xmlns="http://www.w3.org/20 00/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg> Nonprofit </div>
            }

          {this.props.operationtype.length === 37 &&
						<button class="btn btn-success btn-sm pl-2 pr-2 m-1"
							style={{backgroundColor: '#F23A65', border:'none', borderRadius: '5px', cursor: 'default'}}><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-shop-window" viewBox="0 0 16 16">
								<path
									d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
							</svg> Thrift Shop</button>
            }

            
          {this.props.operationtype.length === 33 &&
            <button type="button" class="btn btn-success btn-sm pl-2 pr-2 m-1"
							style={{backgroundColor: '#00B4FF', border:'none',borderRadius: '5px', cursor: 'default'}}><svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
								class="bi bi-trash2-fill" viewBox="0 0 16 16">
								<path
									d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
							</svg> Donation Bin </button>
            }

          
						<h5 class="card-title mt-2"><b>{this.props.dropoff_sitename}</b></h5>
						
						<h6 class="card-subtitle text-muted mb-3"><svg xmlns="http://www.w3.org/2000/svg"
								width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
							</svg> {this.props.address}, {this.props.zipcode}<br></br> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
								fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
								<path
									d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
							</svg> {this.props.phone}
              </h6>
						<p class="card-text mb-3"><a href={this.props.website} target="_blank"
								style={{textDecoration:'none', color:'#A0D4A4'}}><svg xmlns="http://www.w3.org/2000/svg"
									width="16" height="16" fill="currentColor" class="bi bi-link-45deg"
									viewBox="0 0 16 16">
									<path
										d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
									<path
										d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
								</svg> Website </a></p>
						<button type="button" onClick={this.handleClick} class="btn btn-primary btn-lg btn-block"
							style={{backgroundColor:'#A0D4A4', border:'none', width: '75%', borderRadius: '30px', padding:'15px'}}>Directions</button>
					</div>
				</div>
			</div>
		</div>
    
    {/*href={'https://maps.google.com?q='+this.props.latitude+','+this.props.longitude*/}
	</div>
  




    
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI'
})(ZipInfo);

{/*}  <div className="Info">
        <header className="head">
          <hr></hr>
          <h5>
            {this.props.dropoff_sitename}, {this.props.zipcode}
          </h5>
        </header>
        
        <div className="container">
            {" "}<h5>Address: {this.props.address}</h5>{" "}
            <hr></hr>
            
            <Map
              google={this.props.google}
              zoom={17}
              style={mapStyles}
              initialCenter={
                {
                  lat: this.props.latitude,
                  lng: this.props.longitude
                }
              }
            >
              <Marker
                onClick={this.onMarkerClick}
                name={this.props.dropoff_sitename}
              />
              
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                  
                </div>
              </InfoWindow>
            </Map>
           
            </div>
      </div> */}