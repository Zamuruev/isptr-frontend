import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"

import "../styles/button.css"
import mailogo from "../resources/img/mailogo.svg"
import notification from "../resources/img/notification.svg"

function Header() {
    return (
        <>
            <div style={{
                display: "flex", borderBottom: "2px solid white", marginLeft: "50px",
                marginRight: "50px", alignItems: "center", paddingBottom: "30px",
                paddingTop: "30px", justifyContent: "space-between"
            }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <a href="https://my.mai.ru/" target="_blank" rel="noopener noreferrer">
                        <img src={mailogo} alt="mailogo" style={{ height: "35px", marginRight: "30px" }} />
                    </a>
                    <div style={{ fontWeight: "bold" }}>ИСПТР</div>
                </div>
                <button className="btntable" data-tooltip-id="notification-tip"
                    data-tooltip-content="Уведомления"><img alt="notification" src={notification} style={{ height: "30px" }} /></button>
                <Tooltip id="notification-tip"
                    place="right"
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "1px solid #ddd",
                        borderRadius: "8px"
                    }}
                />
            </div>
        </>
    )
}

export default Header;