(this.webpackJsonpwheretodonate=this.webpackJsonpwheretodonate||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){},89:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(21),a=s.n(n),o=(s(19),s(48),s(49),s(16)),l=s(3),r=s(8),d=s(9),h=s(12),j=s(11),p=s(10),b=s(5),u=s.n(b),m=s.p+"static/media/nyc.84f6fb6e.png",x=(s(23),s(20)),f=s.n(x),O=s(90),g=s(0);var v=function(e){var t=e.setType;return i.a.useEffect((function(){new f.a("#choices-single-default",{searchEnabled:!1})}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a,{"data-trigger":"",id:"choices-single-default",name:"choices-single-default",type:"select",onChange:t,children:[Object(g.jsx)("option",{value:"textiles",children:"Clothing"}),Object(g.jsx)("option",{value:"electronics",children:" Electronics "}),Object(g.jsx)("option",{value:"pharmaceuticals",children:" Pharmaceuticals "})]})})},w=s(7),y={width:"100%",height:"100%"},k=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,s,c){return e.setState({selectedPlace:t,activeMarker:s,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e.handleClick=function(t){t.preventDefault(),window.open("https://maps.google.com?q="+e.props.latitude+","+e.props.longitude)},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"mt-4",children:Object(g.jsx)("div",{className:"card mb-4 border border-light bg-white rounded",style:{border:"none"},children:Object(g.jsxs)("div",{className:"row g-0",children:[Object(g.jsx)("div",{class:"col-md-7",style:{minHeight:"200px"},children:Object(g.jsxs)(w.Map,{google:this.props.google,zoom:17,style:y,center:{lat:this.props.latitude,lng:this.props.longitude},initialCenter:{lat:this.props.latitude,lng:this.props.longitude},children:[Object(g.jsx)(w.Marker,{onClick:this.onMarkerClick,name:this.props.dropoff_sitename}),Object(g.jsx)(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(g.jsx)("div",{children:Object(g.jsx)("h4",{children:this.state.selectedPlace.name})})})]})}),Object(g.jsx)("div",{class:"col-md-5 align-self-center",children:Object(g.jsxs)("div",{class:"card-body",children:[Object(g.jsxs)("h5",{class:"card-title mt-3",children:[this.props.dropoff_sitename," "]}),Object(g.jsxs)("h6",{class:"card-subtitle mb-2 text-muted mb-4",children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"})})," ",this.props.address,", ",this.props.zipcode,Object(g.jsx)("br",{})," "]}),Object(g.jsx)("button",{type:"button",onClick:this.handleClick,class:"btn-directions btn-lg pl-5 pr-5 pt-3 pb-3",children:"Directions"})]})})]})})})}}]),s}(c.Component),C=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI"})(k),z=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).setZip=function(e){c.setState({code:e.target.value})},c.setType=function(e){c.setState({type:e.target.value})},c.state={zip:[],code:"",match:!1,type:"textiles"},c.componentDidMount=c.componentDidMount.bind(Object(h.a)(c)),c.doStuff=c.doStuff.bind(Object(h.a)(c)),c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;"electronics"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"textiles"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"pharmaceuticals"===this.state.type&&u.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e,t=this;return"textiles"===this.state.type&&(e="/clothing"),"electronics"===this.state.type&&(e="/electronics"),"pharmaceuticals"===this.state.type&&(e="/pharma"),Object(g.jsxs)("body",{className:"bg-color",children:[Object(g.jsx)("div",{class:"containercenter",children:Object(g.jsx)("div",{class:"container",style:{maxWidth:"1000px",fontFamily:"Poppins",zIndex:"2"},children:Object(g.jsxs)("div",{className:"s013",children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("fieldset",{children:Object(g.jsxs)("h3",{className:"text-center mb-5",children:["Don't want it? Don't need it? Don't use it?",Object(g.jsx)("br",{}),Object(g.jsx)("b",{children:"We\u2019ll help you find where to donate it."})]})}),Object(g.jsxs)("div",{className:"inner-form",children:[Object(g.jsxs)("div",{className:"left",children:[Object(g.jsx)("div",{className:"input-wrap first",children:Object(g.jsxs)("div",{className:"input-field first",children:[Object(g.jsx)("label",{children:" I Want To Donate "}),Object(g.jsx)("div",{className:"input-select",children:Object(g.jsx)(v,{setType:this.setType})})]})}),Object(g.jsx)("div",{className:"input-wrap second",children:Object(g.jsxs)("div",{className:"input-field second",children:[Object(g.jsx)("label",{children:"My Zipcode Is"}),Object(g.jsx)("input",{name:"code",type:"text",onChange:function(e){t.setZip(e)},value:this.state.code,placeholder:"ex.11232"})]})})]}),Object(g.jsx)(o.b,{to:{pathname:e,state:{code:this.state.code,type:this.state.type}},children:Object(g.jsx)("button",{onChange:this.componentDidMount,class:"btn-search",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]})]}),this.state.match?Object(g.jsx)("div",{children:Object(g.jsx)("center",{children:this.state.zip.map((function(e,t){return Object(g.jsx)(C,{address:e.address,phone:e.public_phone,website:e.website,operationtype:e.operations_type,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))})}):Object(g.jsx)("p",{})]})})}),Object(g.jsx)("div",{className:"people",style:{zIndex:"1"},children:Object(g.jsx)("center",{children:Object(g.jsx)("img",{src:m,className:"img-fluid"})})})]})}}]),s}(c.Component),M={width:"100%",height:"100%"},S=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).onMarkerClick=function(e,t,s){return c.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},c.onClose=function(e){c.state.showingInfoWindow&&c.setState({showingInfoWindow:!1,activeMarker:null})},c.handleClick=function(e){e.preventDefault(),window.open("https://maps.google.com?q="+c.props.latitude+","+c.props.longitude)},c.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},c}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"mt-4",children:Object(g.jsx)("div",{className:"card mb-4 border border-light bg-white rounded",style:{border:"none",maxWidth:"1000px"},children:Object(g.jsxs)("div",{className:"row g-0",children:[Object(g.jsx)("div",{class:"col-md-7",style:{minHeight:"200px"},children:Object(g.jsxs)(w.Map,{google:this.props.google,zoom:16,style:M,center:{lat:this.props.latitude,lng:this.props.longitude},initialCenter:{lat:this.props.latitude,lng:this.props.longitude},children:[Object(g.jsx)(w.Marker,{onClick:this.onMarkerClick,name:this.props.dropoff_sitename}),Object(g.jsx)(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(g.jsx)("div",{children:Object(g.jsx)("h4",{children:this.state.selectedPlace.name})})})]})}),Object(g.jsx)("div",{class:"col-md-5 align-self-center p-2",children:Object(g.jsxs)("div",{class:"card-body",children:[this.props.nonprofit.length>2&&Object(g.jsxs)("div",{class:"btn btn-success btn-sm pl-2 pr-2 m-1",style:{backgroundColor:"#FF9999",border:"none",borderRadius:"5px",cursor:"default"},children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/20 00/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})," Nonprofit "]}),37===this.props.operationtype.length&&Object(g.jsxs)("div",{class:"btn btn-success btn-sm pl-2 pr-2 m-1",style:{backgroundColor:"#F23A65",border:"none",borderRadius:"5px",cursor:"default"},children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-shop-window",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"})})," Thrift Shop"]}),33===this.props.operationtype.length&&Object(g.jsxs)("div",{class:"btn btn-success btn-sm pl-2 pr-2 m-1",style:{backgroundColor:"#00B4FF",border:"none",borderRadius:"5px",cursor:"default"},children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash2-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"})})," Donation Bin "]}),Object(g.jsx)("h5",{class:"card-title mt-2",children:Object(g.jsx)("b",{children:this.props.dropoff_sitename})}),Object(g.jsxs)("h6",{class:"card-subtitle text-muted mb-3",children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"})})," ",this.props.address,", ",this.props.zipcode,Object(g.jsx)("br",{})," ",Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-phone-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"})})," ",this.props.phone]}),Object(g.jsx)("p",{class:"card-text mb-3",children:Object(g.jsxs)("a",{href:this.props.website,target:"_blank",style:{textDecoration:"none",color:"#A0D4A4"},children:[Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-link-45deg",viewBox:"0 0 16 16",children:[Object(g.jsx)("path",{d:"M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"}),Object(g.jsx)("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"})]})," Website "]})}),Object(g.jsx)("button",{type:"button",onClick:this.handleClick,class:"btn-directions btn-lg pl-5 pr-5 pt-3 pb-3",children:"Directions"})]})})]})})})}}]),s}(c.Component),N=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI"})(S),D=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).setZip=function(e){c.setState({code:e.target.value})},c.setType=function(e){c.setState({type:e.target.value})},c.state={zip:[],code:c.props.location.state.code,match:!1,type:c.props.location.state.type},c.componentDidMount=c.componentDidMount.bind(Object(h.a)(c)),c.doStuff=c.doStuff.bind(Object(h.a)(c)),c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;"electronics"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"textiles"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"pharmaceuticals"===this.state.type&&u.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e,t=this;return"textiles"===this.state.type&&(e="/clothing"),"electronics"===this.state.type&&(e="/electronics"),"pharmaceuticals"===this.state.type&&(e="/pharma"),Object(g.jsxs)("body",{className:"bg-color",children:[Object(g.jsx)("div",{class:"container",style:{maxWidth:"1000px",fontFamily:"Poppins"},children:Object(g.jsxs)("div",{className:"s013",children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("fieldset",{children:Object(g.jsxs)("h3",{className:"text-center mt-5 mb-5",children:["Don't want it? Don't need it? Don't use it?",Object(g.jsx)("br",{}),Object(g.jsx)("b",{children:"We\u2019ll help you find where to donate it."})]})}),Object(g.jsxs)("div",{className:"inner-form",children:[Object(g.jsxs)("div",{className:"left",children:[Object(g.jsx)("div",{className:"input-wrap first",children:Object(g.jsxs)("div",{className:"input-field first",children:[Object(g.jsx)("label",{children:" I Want To Donate "}),Object(g.jsx)("div",{className:"input-select",children:Object(g.jsx)(v,{setType:this.setType})})]})}),Object(g.jsx)("div",{className:"input-wrap second",children:Object(g.jsxs)("div",{className:"input-field second",children:[Object(g.jsx)("label",{children:"My Zipcode Is"}),Object(g.jsx)("input",{name:"code",value:this.state.code,type:"text",onChange:function(e){t.setZip(e)}})]})})]}),Object(g.jsx)(o.b,{to:{pathname:e,state:{code:this.state.code,type:this.state.type}},children:Object(g.jsx)("button",{onClick:this.componentDidMount,class:"btn-search",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]})]}),this.state.match?Object(g.jsx)("div",{children:Object(g.jsx)("center",{children:this.state.zip.map((function(e,t){return Object(g.jsx)(N,{address:e.address,phone:e.public_phone,website:e.website,nonprofit:e.nonprofit_organization,operationtype:e.operations_type,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))})}):Object(g.jsx)("p",{})]})}),Object(g.jsxs)("center",{children:[Object(g.jsx)("h5",{className:"mb-5 mt-5",children:"\u2728 Sorry, no more results found. \u2728"}),Object(g.jsx)("img",{src:m,className:"img-fluid"})]})]})}}]),s}(c.Component);var _=function(e){var t=e.setType;return i.a.useEffect((function(){new f.a("#choices-single-default",{searchEnabled:!1})}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a,{"data-trigger":"",id:"choices-single-default",name:"choices-single-default",type:"select",onChange:t,children:[Object(g.jsx)("option",{value:"electronics",children:" Electronics "}),Object(g.jsx)("option",{value:"textiles",children:"Clothing"}),Object(g.jsx)("option",{value:"pharmaceuticals",children:" Pharmaceuticals "})]})})},I=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).setZip=function(e){c.setState({code:e.target.value})},c.setType=function(e){c.setState({type:e.target.value})},c.state={zip:[],code:c.props.location.state.code,match:!1,type:c.props.location.state.type},c.componentDidMount=c.componentDidMount.bind(Object(h.a)(c)),c.doStuff=c.doStuff.bind(Object(h.a)(c)),c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;"electronics"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"textiles"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"pharmaceuticals"===this.state.type&&u.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e,t=this;return"textiles"===this.state.type&&(e="/clothing"),"electronics"===this.state.type&&(e="/electronics"),"pharmaceuticals"===this.state.type&&(e="/pharma"),Object(g.jsxs)("body",{className:"bg-color",children:[Object(g.jsx)("div",{class:"container",style:{maxWidth:"1000px",fontFamily:"Poppins"},children:Object(g.jsxs)("div",{className:"s013",children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("fieldset",{children:Object(g.jsxs)("h3",{className:"text-center mt-5 mb-5",children:["Don't want it? Don't need it? Don't use it?",Object(g.jsx)("br",{}),Object(g.jsx)("b",{children:"We\u2019ll help you find where to donate it."})]})}),Object(g.jsxs)("div",{className:"inner-form",children:[Object(g.jsxs)("div",{className:"left",children:[Object(g.jsx)("div",{className:"input-wrap first",children:Object(g.jsxs)("div",{className:"input-field first",children:[Object(g.jsx)("label",{children:" I Want To Donate "}),Object(g.jsx)("div",{className:"input-select",children:Object(g.jsx)(_,{setType:this.setType})})]})}),Object(g.jsx)("div",{className:"input-wrap second",children:Object(g.jsxs)("div",{className:"input-field second",children:[Object(g.jsx)("label",{children:"My Zipcode Is"}),Object(g.jsx)("input",{name:"code",value:this.state.code,type:"text",onChange:function(e){t.setZip(e)}})]})})]}),Object(g.jsx)(o.b,{to:{pathname:e,state:{code:this.state.code,type:this.state.type}},children:Object(g.jsx)("button",{onClick:this.componentDidMount,class:"btn-search",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]})]}),this.state.match?Object(g.jsx)("div",{children:Object(g.jsx)("center",{children:this.state.zip.map((function(e,t){return Object(g.jsx)(C,{address:e.address,website:e.website,operationtype:e.operations_type,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))})}):Object(g.jsx)("p",{})]})}),Object(g.jsxs)("center",{children:[Object(g.jsx)("h5",{className:"mb-5 mt-5",children:"\u2728 Sorry, no more results found. \u2728"}),Object(g.jsx)("img",{src:m,className:"img-fluid"})]})]})}}]),s}(c.Component);var W=function(e){var t=e.setType;return i.a.useEffect((function(){new f.a("#choices-single-default",{searchEnabled:!1})}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.a,{"data-trigger":"",id:"choices-single-default",name:"choices-single-default",type:"select",onChange:t,children:[Object(g.jsx)("option",{value:"pharmaceuticals",children:" Pharmaceuticals "}),Object(g.jsx)("option",{value:"electronics",children:" Electronics "}),Object(g.jsx)("option",{value:"textiles",children:"Clothing"})]})})},A={width:"100%",height:"100%"},T=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(r.a)(this,s);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,s,c){return e.setState({selectedPlace:t,activeMarker:s,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e.handleClick=function(t){t.preventDefault(),window.open("https://maps.google.com?q="+e.props.latitude+","+e.props.longitude)},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"mt-4",children:Object(g.jsx)("div",{className:"card mb-4 border border-light bg-white rounded",style:{border:"none"},children:Object(g.jsxs)("div",{className:"row g-0",children:[Object(g.jsx)("div",{class:"col-md-7",style:{minHeight:"200px"},children:Object(g.jsxs)(w.Map,{google:this.props.google,zoom:17,style:A,center:{lat:this.props.latitude,lng:this.props.longitude},initialCenter:{lat:this.props.latitude,lng:this.props.longitude},children:[Object(g.jsx)(w.Marker,{onClick:this.onMarkerClick,name:this.props.dropoff_sitename}),Object(g.jsx)(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(g.jsx)("div",{children:Object(g.jsx)("h4",{children:this.state.selectedPlace.name})})})]})}),Object(g.jsx)("div",{class:"col-md-5 align-self-center",children:Object(g.jsxs)("div",{class:"card-body",children:[Object(g.jsxs)("h5",{class:"card-title mt-3",children:[this.props.dropoff_sitename," "]}),Object(g.jsxs)("h6",{class:"card-subtitle mb-2 text-muted mb-4",children:[Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{"fill-rule":"evenodd",d:"M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"})})," ",this.props.address,", ",this.props.zipcode,Object(g.jsx)("br",{})," "]}),this.props.phone&&Object(g.jsxs)("h6",{class:"card-subtitle mb-2 text-muted mb-4",children:[" ",Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-phone-fill",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"})})," ",this.props.phone," "]}),Object(g.jsx)("button",{type:"button",onClick:this.handleClick,class:"btn-directions btn-lg pl-5 pr-5 pt-3 pb-3",children:"Directions"})]})})]})})})}}]),s}(c.Component),P=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI"})(T),B=function(e){Object(j.a)(s,e);var t=Object(p.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).setZip=function(e){c.setState({code:e.target.value})},c.setType=function(e){c.setState({type:e.target.value})},c.state={zip:[],code:c.props.location.state.code,match:!1,type:c.props.location.state.type},c.componentDidMount=c.componentDidMount.bind(Object(h.a)(c)),c.doStuff=c.doStuff.bind(Object(h.a)(c)),c}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;"electronics"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"textiles"===this.state.type?u.a.get("https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)})):"pharmaceuticals"===this.state.type&&u.a.get("https://data.cityofnewyork.us/resource/edk2-vkjh.json?zipcode=".concat(this.state.code)).then((function(t){t.data.length>0?e.setState({zip:t.data,match:!0}):e.setState({match:!1})})).catch((function(e){console.log(e)}))}},{key:"doStuff",value:function(){this.setState({match:!1})}},{key:"render",value:function(){var e,t=this;return"textiles"===this.state.type&&(e="/clothing"),"electronics"===this.state.type&&(e="/electronics"),"pharmaceuticals"===this.state.type&&(e="/pharma"),Object(g.jsxs)("body",{className:"bg-color",children:[Object(g.jsx)("div",{class:"container",style:{maxWidth:"1000px",fontFamily:"Poppins"},children:Object(g.jsxs)("div",{className:"s013",children:[Object(g.jsxs)("form",{children:[Object(g.jsx)("fieldset",{children:Object(g.jsxs)("h3",{className:"text-center mt-5 mb-5",children:["Don't want it? Don't need it? Don't use it?",Object(g.jsx)("br",{}),Object(g.jsx)("b",{children:"We\u2019ll help you find where to donate it."})]})}),Object(g.jsxs)("div",{className:"inner-form",children:[Object(g.jsxs)("div",{className:"left",children:[Object(g.jsx)("div",{className:"input-wrap first",children:Object(g.jsxs)("div",{className:"input-field first",children:[Object(g.jsx)("label",{children:" I Want To Donate "}),Object(g.jsx)("div",{className:"input-select",children:Object(g.jsx)(W,{setType:this.setType})})]})}),Object(g.jsx)("div",{className:"input-wrap second",children:Object(g.jsxs)("div",{className:"input-field second",children:[Object(g.jsx)("label",{children:"My Zipcode Is"}),Object(g.jsx)("input",{name:"code",value:this.state.code,type:"text",onChange:function(e){t.setZip(e)}})]})})]}),Object(g.jsx)(o.b,{to:{pathname:e,state:{code:this.state.code,type:this.state.type}},children:Object(g.jsx)("button",{onClick:this.componentDidMount,class:"btn-search",children:Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16",children:Object(g.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})})]})]}),this.state.match?Object(g.jsx)("div",{children:Object(g.jsx)("center",{children:this.state.zip.map((function(e,t){return Object(g.jsx)(P,{address:e.address,phone:e.contact_phone_number,website:e.website,operationtype:e.operations_type,dropoff_sitename:e.dropoff_sitename||e.vendor_name||e.drop_off_site_name,zipcode:e.zipcode,latitude:e.latitude,longitude:e.longitude},t)}))})}):Object(g.jsx)("p",{})]})}),Object(g.jsxs)("center",{children:[Object(g.jsx)("h5",{className:"mb-5 mt-5",children:"\u2728 Sorry, no more results found. \u2728"}),Object(g.jsx)("img",{src:m,className:"img-fluid"})]})]})}}]),s}(c.Component),V=s(13),Z=s(43),F=s(24);var E=function(){return Object(V.a)().listen((function(e){F.a.initialize("G-Q7MMEHNDKG"),F.a.set({page:e.pathname}),F.a.pageview(e.pathname)})),Z.hotjar.initialize(2254498,6),Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("browserRouter",{children:Object(g.jsx)(o.a,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/",children:Object(g.jsx)(z,{})}),Object(g.jsx)(l.a,{path:"/clothing",component:D}),Object(g.jsx)(l.a,{path:"/electronics",component:I}),Object(g.jsx)(l.a,{path:"/pharma",component:B})]})})})})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,91)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root")),L()}},[[89,1,2]]]);
//# sourceMappingURL=main.c18e1206.chunk.js.map