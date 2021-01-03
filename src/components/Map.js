import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { iconVolcano } from "../util.js";
import "../Map.css";

const Map = ({ eventData, center }) => {


	const markers = eventData.map(ev => {
		if (ev.categories[0].id === 8) {
			return (
				<Marker
					className="marker-icon"
					position={[
						ev.geometries[0].coordinates[1],
						ev.geometries[0].coordinates[0],
					]}
					icon={iconVolcano}
          >
            <Popup>
            <div className = 'location-info'>
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ev.id}</strong></li>
                <li>Title: <strong>{ev.title}</strong></li>
            </ul>
        </div>
            </Popup>
          </Marker>
			);
		}
		return null;
	});

	return (
		<div className="map">
			<MapContainer center={center} zoom={4}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				{markers}
			</MapContainer>
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 43.65107,
		lng: -79.347015,
	},
};

export default Map;
