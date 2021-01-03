import L from 'leaflet'
import fire from './components/fire.png'

export const iconVolcano =  new L.Icon({
    iconUrl: (fire),
    //iconUrl: ('../images/volcano.png'),
    iconSize: new L.Point(25, 25),
    className: 'leaflet-div-icon'
});