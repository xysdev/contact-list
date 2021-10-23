import { config } from 'config/config';
import api from 'services/networkService';
export const getContactsApi = async () => {
    const result = await api.get('', { params: { results: config.contactCount, nat: config.culture.nat } });
    return result;
};
