// import { fromCodePoint } from "core-js/fn/string";
import React, { Component } from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class ZipInfoP extends Component {
  
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


<div className="mt-4"> 
		<div className="card mb-4 border border-light bg-white rounded" style={{border: 'none'}}>
			<div className="row g-0">
				<div class="col-md-7" style={{minHeight: '200px'}}>

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
				<div class="col-md-5 align-self-center">

					<div class="card-body">
          
						<h5 class="card-title mt-3">{this.props.dropoff_sitename} </h5>


						
						<h6 class="card-subtitle mb-2 text-muted mb-4"><svg xmlns="http://www.w3.org/2000/svg"
								width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
							</svg> {this.props.address}, {this.props.zipcode}<br></br> </h6>

          
              {this.props.phone &&
              <h6 class="card-subtitle mb-2 text-muted mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
								fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16"> 
								<path
									d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
							</svg> {this.props.phone} </h6>
              }
                

                <button type="button" onClick={this.handleClick} class="btn-directions btn-lg pl-5 pr-5 pt-3 pb-3">Directions</button>
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
})(ZipInfoP);

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