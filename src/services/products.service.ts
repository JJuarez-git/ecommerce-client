import _axios from "./client";

export const getAllProducts = async () => {
    try {
        const { data } = await _axios.get<any>("/products?populate=*");
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};