import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import "../Map.css";

const Map = ({center}) => {
    return (
        <div className="map">
      <MapContainer center={center} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
      </MapContainer>
    </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 43.651070,
        lng: -79.347015
    }
}

export default Map



// import React from "react";
// import { MapContainer, TileLayer } from 'react-leaflet'
//  import "../Map.css";

// function Map() {
//   return (
//     <div className="map">
//       <MapContainer center={[43.651070,-79.347015]} zoom={13}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* {showDataOnMap(countries, casesType)} */}
//       </MapContainer>
//     </div>
//   );
// }



// export default Map;