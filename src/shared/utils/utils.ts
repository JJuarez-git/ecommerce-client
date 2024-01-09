import { CONFIG } from "../config/config"

export const getImage = (url: string) => {
    return CONFIG.API_URL + url;
}