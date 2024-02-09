import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../../services/categoryService';


export const ListCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setCategories(await getAll());
        };

        fetchData();
    }, []);

    const listCategories = categories.map(category => (
        <li key={category.sys.id}><Link to={'/list/' + category.fields.slug}>{category.fields.title}</Link></li>
    ));

    return (
        <ul>
            {listCategories}
            <br />
            <li key="ver-todos"><Link to={'/list'}>Ver todos</Link></li>
        </ul>
    );
}