import api from './../services/networkService';
export const getContactsApi = async () => {
    const result = await api.get('', { params: { results: 500, nat: 'us' } });
    return result;
};
