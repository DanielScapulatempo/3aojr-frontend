import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { getBySlug } from '../services/postService';

export const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setPost(await getBySlug(slug));
        };

        fetchData();
    }, [slug]);

    return (
        <>
            { post 
                ?
                <>
                    <h1>{ post.fields.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(post.fields.body)}}></div>
                </>
                :
                    <div>Carregando...</div>
            }

            <div className="mt-4">
                <Link to='/list' className='btn btn-primary'>Ver todos os posts</Link>
            </div>
        </>
    );
}