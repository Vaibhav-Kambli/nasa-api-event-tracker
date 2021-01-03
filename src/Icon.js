import L from 'leaflet';

const iconVolcano = new L.Icon({
    iconUrl: require('/public/volcano.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconVolcano };