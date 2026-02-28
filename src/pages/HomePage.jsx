import Header from "../components/Header";
import LeftNavBar from "../components/LeftNavbar";
import MainPage from "./MainPage";

function HomePage() {
    return (
    <>
        <div style={{backgroundColor: "#232323", height: "100vh", color: "white", marginLeft: "",}}>
        <Header />
        <div style={{display: "flex", flexDirection: "row", marginLeft: "50px", 
                    marginRight: "50px", marginTop: "20px"}}>
            <LeftNavBar/>
            <MainPage/>
        </div>
        </div>
    </>
    )
}

export default HomePage;