import axios from "axios"
import Cookies from "js-cookie";



export const submitScore: (
    accessToken: undefined | string ,
    score: number,
    title: string | undefined,
    userId: undefined | string
) => Promise<string> = async ( accessToken: undefined | string, score: number, title: string | undefined, userId: undefined | string) => {
    console.log(score, title, userId, accessToken);
    
    const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/submit`,
        {
            score: score,
            title: title,
            userId: userId
        },
        {
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        }
    )

    if (response.status === 200 || response.status === 201) {
        return response.data
    }else{
        throw new Error(`Request failed with status code ${response.status}`);

    }
}

export async function fetchUserInfo() {
    const userId = Cookies.get("userId");
    const accessToken = Cookies.get("token")
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/userinfo/${userId}`,
            {
                headers:{
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )

        return response.data.data;
    } catch (error) {
        console.error(error);
        return error
    }
}