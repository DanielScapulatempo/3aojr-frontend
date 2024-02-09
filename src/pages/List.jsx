import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { PostCard } from './partials/PostCard';
import { getBySlug } from '../services/categoryService';

export const List = () => {
    const { slug } = useParams();
    
    const [categoryName, setCategoryName] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            setCategoryName(await getBySlug(slug));
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    return (
        <>
            <h1>
                Todos os posts
                {
                    (categoryName.fields && slug) ?
                    <span className="fs-6"> {categoryName.fields.title}</span>
                    : ""
                }
            </h1>

            <PostCard category={slug} limit={3} pagination />
        </>
    );
}