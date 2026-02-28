import { useState } from "react"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import ReactModal from "react-modal";

import "../styles/button.css"
import "../styles/global.css"

import file from "../resources/img/file.svg"
import plus from "../resources/img/plus.svg"
import settings from "../resources/img/settings.svg"
import profile from "../resources/img/profile.svg"
import raiting from "../resources/img/raiting.svg"
import sun from "../resources/img/sun.svg"
import support from "../resources/img/support.svg"
import logout from "../resources/img/logout.svg"

ReactModal.setAppElement("#root")

function LeftNavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "calc(100vh - 135px)",
            position: "relative"
        }}>

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "30px",
                marginTop: "5px"
            }}>
                <button className="btntable"
                    data-tooltip-id="allwork-tip"
                    data-tooltip-content="Все работы">
                    <img src={file} alt="file" style={{ height: "20px", marginBottom: "30px" }} />
                </button>

                <Tooltip id="allwork-tip"
                    place="right"
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "1px solid #ddd",
                        borderRadius: "8px"
                    }}
                />
                <button className="btntable"
                    data-tooltip-id="addfile-tip"
                    data-tooltip-content="Добавить работу" onClick={() => setVisible(!visible)}>
                    <img src={plus} alt="plus" style={{ height: "20px" }} />
                </button>
                <ReactModal
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    className="modalWindow"
                    overlayClassName="modalOverlay"
                >
                    <h2>Загрузка работы</h2>

                    <input type="file" />

                    <div style={{ marginTop: "20px" }}>
                        <button onClick={() => setVisible(false)}>
                            Закрыть
                        </button>
                    </div>
                </ReactModal>
                <Tooltip id="addfile-tip"
                    place="right"
                    style={{
                        backgroundColor: "#fff",
                        color: "#000",
                        border: "1px solid #ddd",
                        borderRadius: "8px"
                    }}
                />
            </div>

            <button
                className="btntable"
                onClick={toggleMenu}
                data-tooltip-id="settings-tip"
                data-tooltip-content="Настройки">
                <img src={settings} alt="settings" style={{ height: "30px" }} />
            </button>
            <Tooltip id="settings-tip"
                place="right"
                style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                }}
            />
            {isOpen && (
                <div className="settingsBlock">
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid white", paddingBottom: "10px", alignItems: "center" }}>
                            <div style={{ lineHeight: "25px" }}>
                                <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                                    Замуруев Роман Романович
                                </div>
                                <div style={{ fontSize: "14px" }}>
                                    М3О-118СВ-25
                                </div>
                                <div style={{ color: "#0271FF" }}> @rrzamuruev </div>
                            </div>
                            <div>
                                <button className="profilebtn"> <img src={profile} style={{ height: "60px" }} /></button>
                            </div>
                        </div>
                        <div>

                            <div>
                                <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img src={raiting} style={{ height: "25px", marginRight: "15px" }} /> <div style={{ color: "white" }}>Рейтинг</div></button>
                            </div>
                            <div>
                                <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img src={sun} style={{ height: "25px", marginRight: "15px" }} /><div style={{ color: "white" }}>Тема: <a style={{ color: "#0271FF" }}>Темная</a></div></button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img src={support} style={{ height: "25px", marginRight: "15px" }} /><div style={{ color: "#00D458", fontWeight: "bold", fontSize: "17px" }}>Поддержка</div></button>
                        </div>
                        <div>
                            <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img src={logout} style={{ height: "35px", marginRight: "15px" }} /></button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default LeftNavBar