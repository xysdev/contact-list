import api from './../services/networkService';
export const getContactsApi = async () => {
    const result = await api.get('/seg');
    return result;
};
