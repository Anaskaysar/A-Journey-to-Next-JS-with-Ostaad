import image from '../assets/images/neom-qGH25zv5xMk-unsplash.jpg'
const Header = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Others</li>
            </ul>
            <img src={image} alt="" />
        </div>
    );
};

export default Header;