import cloudfog from "./assets/cloudfog.png"

import cloudSun from "./assets/cloudSun.png"
import heavyRain from "./assets/heavyRain.png"
import lowRain from "./assets/lowRain.png"
import snow from "./assets/snow.png"
import sunny from "./assets/sunny.png"
import thunderStrom from "./assets/thunderStrom.png"
import Windslow from "./assets/Windslow.png"

export function getImage(code) {
    switch (code) {
        case 1000:
            return sunny;
        case 1001:
            return cloudfog;
        case 1100:
            return cloudSun;
        case 1101:
            return cloudSun;
        case 2000:
            return cloudfog;
        case 2001:
            return cloudfog;
        case 3000:
            return Windslow;
        case 4000:
            return lowRain;
        case 4001:
            return heavyRain;
        case 5000:
            return snow;
        case 8000:
            return thunderStrom;
        
        default:
            return sunny;
    }
}
