import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="bg-container">
            <div className="background">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
            </div>
            <>
                {children}
            </>
        </div>
    );
};

export default Layout;
