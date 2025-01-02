import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // URL base do seu backend
});

export const sendEmail = async (data) => {
    try {
        const response = await api.post('/send-email', data);
        return response.data; // Retorna a resposta
    } catch (error) {
        throw error; // Lança o erro para ser tratado no componente
    }
};