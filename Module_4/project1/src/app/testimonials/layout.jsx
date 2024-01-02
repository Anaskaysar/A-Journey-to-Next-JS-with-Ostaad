// or Dynamic metadata
export async function generateMetadata({ params }) {
    return {
      title: 'Testimonials',
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