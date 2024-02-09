import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getAllByParams } from '../../services/postService';
import { ListPagination } from './ListPagination';

export const PostCard = (props) => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [props.category]);

    useEffect(() => {
        const fetchData = async (limit,pagination, category, currentPage) => {
            const fetchedPosts = await getAllByParams(limit,pagination, category, currentPage);
            setTotalPage(fetchedPosts.total);
            setPosts(fetchedPosts.items);
        };
        fetchData(props.limit, props.pagination, props.category, currentPage);
    }, [props.category, currentPage, props.limit, props.pagination]);

    return (
        <>
            {posts.map(post => (
                <div className="card mb-3" key={post.sys.id}>
                    <div className="card-body">
                        <h5 className="card-title">{post.fields.title}</h5>
                        <p className="card-text">{post.fields.description}</p>
                        <Link to={'/post/' + post.fields.slug} className="card-link">Ver post</Link>
                    </div>
                </div>
            ))}

            {(props.pagination)
            ?
                <ListPagination 
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalPage / props.limit)}
                    onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
                />
            :
                ""
            }
        </>
    );
}

PostCard.propTypes = {
    pagination: PropTypes.bool,
    category: PropTypes.string,
    limit: PropTypes.number,
};