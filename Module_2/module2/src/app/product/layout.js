import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <h1>This is Product Directory</h1>
            <button>Product List</button>
            {children}
        </div>
    );
};

export default Layout;