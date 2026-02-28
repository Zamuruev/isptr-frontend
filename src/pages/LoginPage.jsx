import mailogo from "../resources/img/mailogo.svg"
import "../styles/global.css";

function LoginPage() {
    return (
        <>
            <div style={{ backgroundColor: "#232323", height: "100vh", color: "white" }}>
                <div style={{ display: "flex", width: "850px", justifyContent: "space-between", alignItems: "center", margin: "auto", height: "750px" }}>
                    <img src={mailogo} alt="mailogo" style={{ height: "200px" }} />
                    <form style={{ display: "flex", flexDirection: "column", width: "400px" }}>
                        <div style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center", marginBottom: "20px" }}>Добро пожаловать!</div>
                        <label htmlFor="" style={{ marginBottom: "10px" }}> Почта </label>
                        <input style={{ borderRadius: "10px", height: "30px", marginBottom: "20px", paddingLeft: "20px", paddingRight: "20px" }} required />
                        <label htmlFor="" style={{ marginBottom: "10px" }}> Пароль </label>
                        <input style={{ borderRadius: "10px", height: "30px", marginBottom: "20px", paddingLeft: "20px", paddingRight: "20px" }} required />
                        <div style={{ textAlign: "right", marginBottom: "30px", fontSize: "12px" }}>Забыли пароль?</div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "400px" }}>
                                <button className="loginBtn">Войти</button>
                                <button className="registerBtn">Регистрация</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;