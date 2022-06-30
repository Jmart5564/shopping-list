import { client } from './client.js';

export async function getAllItems() {
    const response = await client
        .from('shopping')
        .select();

    return response.data;
}