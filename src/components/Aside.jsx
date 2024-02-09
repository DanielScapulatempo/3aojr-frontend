import { ListCategories } from './partials/ListCategories';

export const Aside = () => {
    return (
        <aside className="col-4 py-4">
            <h2>Categorias</h2>
            <ListCategories />
        </aside>
    );
}