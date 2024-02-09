import { client } from '../lib/createClient';

const getBySlug = async (slug) => {
    const response = await client.getEntries({
        content_type: 'blogPage',
        "fields.slug": slug,
    });

    return response.items[0];
};

const getAllByParams = async (limit, pagination, category, currentPage) => {
    const categoryData = (category) 
        ? {
            'fields.category.sys.contentType.sys.id': "blogCategory",
            'fields.category.fields.slug': category,
        }
        : "";

    const paginationData = (pagination)
        ? {
            skip: (currentPage - 1) * limit,
        }
        : "";

    return await client.getEntries({
        content_type: 'blogPage',
        limit: limit,
        ...paginationData,
        ...categoryData
    });
};

export { getBySlug, getAllByParams }