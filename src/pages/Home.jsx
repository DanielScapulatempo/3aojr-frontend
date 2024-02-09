import { Link } from 'react-router-dom';

import { PostCard } from './partials/PostCard';

export const Home = () => {
    return (
        <>
            <h1>Últimos posts</h1>

            <PostCard limit={2} />

            <Link to="/list" className="btn btn-primary">Ver todos os posts</Link>
        </>
    );
}