// or Dynamic metadata
export async function generateMetadata({ params }) {
    return {
      title: 'Projects',
    }
  }
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;