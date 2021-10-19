import api from './../services/networkService';
export const getContactsApi = async () => {
    debugger
    console.log(api)
    const result = await api.get('/seg');
    return result;
};
