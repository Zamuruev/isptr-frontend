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
import closeForm from "../resources/img/closeForm.svg"
import closebtn from "../resources/img/closebtn.svg"

ReactModal.setAppElement("#root")

function LeftNavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [files, setFiles] = useState([])

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
                    data-tooltip-content="Добавление работ" onClick={() => setVisible(!visible)}>
                    <img src={plus} alt="plus" style={{ height: "20px" }} />
                </button>
                <ReactModal
                    isOpen={visible}
                    onRequestClose={() => setVisible(false)}
                    className="modalWindow"
                    overlayClassName="modalOverlay"
                >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Добавление работ</h2>

                        <div style={{ marginTop: "20px" }}>
                            <button className="btntable" onClick={() => setVisible(false)}> <img src={closeForm} alt="closeBtn" style={{ height: "14px", alignSelf: "center" }} /></button>
                        </div>
                    </div>

                    <div style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap"
                    }}>
                        {files.map((item, index) => (
                            <div key={index} style={{
                                position: "relative"
                            }}>
                                <img
                                    src={item.preview}
                                    alt="preview"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        border: "2px solid #ffffffff",
                                    }}
                                />

                                <button
                                    onClick={() => {
                                        setFiles(files.filter((_, i) => i !== index))
                                    }}
                                    className="btntable"> <img src={closeForm} alt="closebtn" style={{ height: "14px", alignSelf: "center", position: "absolute", top: "5px", left: "calc(100% - 30px)", }} /></button>
                            </div>
                        ))}
                        <div style={{ position: "relative" }}>
                            <label htmlFor="fileUpload" className="btntable" >
                                <div style={{ display: "flex", alignItems: "center", border: "2px dashed white", width: "100px", height: "100px", justifyContent: "center", borderRadius: "8px" }}>
                                    <img src={plus} alt="add" style={{
                                        width: "50px",
                                        height: "50px",
                                    }} />
                                </div>

                            </label>

                            <input
                                id="fileUpload"
                                type="file"
                                multiple
                                style={{ display: "none" }}
                                onChange={(e) => {
                                    const selectedFiles = Array.from(e.target.files)

                                    const mappedFiles = selectedFiles.map(file => ({
                                        file,
                                        preview: URL.createObjectURL(file)
                                    }))

                                    setFiles(prev => [...prev, ...mappedFiles])
                                }}
                            />
                        </div>
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