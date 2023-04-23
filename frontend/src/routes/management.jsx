import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import Management from "../components/management/management.jsx";

function ManagementRoot() {
    return (
        <div>
            <Header />
            <Management />
            <Footer />
        </div>
    );
};

export default ManagementRoot;