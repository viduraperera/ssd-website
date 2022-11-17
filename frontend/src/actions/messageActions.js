import * as api from '../api/Index';
export const addMessage = (message) => async (dispatch) => {
    try {
        const res = await api.addMessage(message);
        return { ...res }
    } catch (error) {
        console.log(error);
        return { ...error }
    }
}