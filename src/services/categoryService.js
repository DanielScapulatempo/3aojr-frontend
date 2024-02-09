import { client } from '../lib/createClient';

const getBySlug = async (slug) => {
    const response = await client.getEntries({
        content_type: 'blogCategory',
        "fields.slug": slug,
    });

    return response.items[0];
};

const getAll = async () => {
    const response = await client.getEntries({
        content_type: 'blogCategory'
    });

    return response.items;
};

export { getBySlug, getAll }