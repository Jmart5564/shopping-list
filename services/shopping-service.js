import { client } from './client.js';

export async function getAllItems() {
    const response = await client
        .from('shopping')
        .select();

    return response.data;
}

export async function addItem(item) {
    const response = await client
        .from('shopping')
        .insert(item)
        .single();

    return response.data;
}