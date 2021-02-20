// import { fromCodePoint } from "core-js/fn/string";
import React, { Component } from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class ZipInfo extends Component {
  
  state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {} ,
      
             // Shows the InfoWindow to the selected place upon a marker
  };

 

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


<div className="containe mt-4" style={{maxWidth:'1000px', fontFamily: 'Poppins'}}> 
		<div className="card mb-4 border border-light bg-white rounded" style={{border: 'none'}}>
			<div className="row no-gutters">

				<div class="col-md-7">
              <Map google={this.props.google}
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
				<div class="col-md-5 align-self-center">

					<div class="card-body">
          
						<h5 class="card-title mt-3">{this.props.dropoff_sitename}</h5>
						
						<h6 class="card-subtitle mb-2 text-muted mb-4"><svg xmlns="http://www.w3.org/2000/svg"
								width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
							</svg> {this.props.address}, {this.props.zipcode}<br></br><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
								fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
								<path
									d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
							</svg> {this.props.phone}</h6>
						
						<p class="card-text mb-4"><a href={this.props.website} target="_blank"
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