import _axios from "./client";

export const getNavBarData = async () => {
    try {
        const { data } = await _axios.get<any>("/nav-bar?populate=*");
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};