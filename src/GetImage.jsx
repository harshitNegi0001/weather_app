import Cloudy from "./assets/Cloudy.png"
import Drizzle from "./assets/Drizzle.png"
import Flurries from "./assets/Flurries.png"
import Fog from "./assets/Fog.png"
import FreezingDrizzle from "./assets/FreezingDrizzle.png"
import FreezingRain from "./assets/FreezingRain.png"
import HeavyFreezingRain from "./assets/HeavyFreezingRain.png"
import HeavyIcePellets from "./assets/HeavyIcePellets.png"
import HeavyRain from "./assets/HeavyRain.png"
import HeavySnow from "./assets/HeavySnow.png"
import IcePellets from "./assets/IcePellets.png"
import LightFog from "./assets/LightFog.png"
import LightFreezingRain from "./assets/LightFreezingRain.png"
import LightIcePellets from "./assets/LightIcePellets.png"
import LightRain from "./assets/LightRain.png"
import LightSnow from "./assets/LightSnow.png"
import MostlyCloudy from "./assets/MostlyCloudy.png"
import MostlySunny from "./assets/MostlySunny.webp"
import PartlyCloudy from "./assets/PartlyCloudy.png"
import Rain from "./assets/Rain.png"
import Snow from "./assets/Snow.png"
import Sunnyday from "./assets/Sunnyday.png"
import ThunderStorm from "./assets/ThunderStorm.png"


export function getImage(code) {
    switch (code) {
        case 1000:
        return Sunnyday
        case 1001:
        return Cloudy
        case 1100:
        return MostlySunny
        case 1101:
        return PartlyCloudy
        case 1102:
        return MostlyCloudy
        case 2000:
        return Fog
        case 2100:
        return LightFog
        case 4000:
        return Drizzle
        case 4001:
        return Rain
        case 4200:
        return LightRain
        case 4201:
        return HeavyRain
        case 5000:
        return Snow
        case 5001:
        return Flurries
        case 5100:
        return LightSnow
        case 5101:
        return HeavySnow
        case 6000:
        return FreezingDrizzle
        case 6001:
        return FreezingRain
        case 6200:
        return LightFreezingRain
        case 6201:
        return HeavyFreezingRain
        case 7000:
        return IcePellets
        case 7101:
        return HeavyIcePellets
        case 7102:
        return LightIcePellets
        case 8000:
        return ThunderStorm
        default:
        return MostlySunny
        
    }
}
