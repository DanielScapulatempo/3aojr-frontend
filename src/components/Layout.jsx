import PropTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

import { Aside } from './Aside';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <main className="col-8 py-4">
                        { children }
                    </main>
                    <Aside />
                </div>
            </div>
            
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
