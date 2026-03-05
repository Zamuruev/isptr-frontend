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

ReactModal.setAppElement("#root")

function LeftNavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false)
    const [profileVisible, setProfileVisible] = useState(false)
    const [settingsVisible, setSettingsVisible] = useState(false)
    const [files, setFiles] = useState([])

    const fio = "Замуруев Роман Романович"
    const login = "@rrzamuruev"
    const status = "Онлайн"
    const faculty = "Информатика и вычислительная техника"
    const partFaculty = "Интернет вещей (IoT)"
    const course = "1"
    const group = "М3О-118СВ-25"
    const personalNumber = "1145506"
    const gradebookNumber = "114550233223236"
    const studentTicketNumber = "114550233223236"
    const raitingCount = 4.8

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
                onClick={() => setSettingsVisible(!profileVisible)}
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

            {(
                <ReactModal
                    isOpen={settingsVisible}
                    onRequestClose={() => setSettingsVisible(false)}
                    className="settingsBlock"
                    overlayClassName="modalOverlay">
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
                                <button className="profilebtn"> <img src={profile} alt="profileBtn" style={{ height: "60px" }} onClick={() => setProfileVisible(!profileVisible)} /></button>
                            </div>
                            <ReactModal
                                isOpen={profileVisible}
                                onRequestClose={() => setProfileVisible(false)}
                                className="modalWindow"
                                overlayClassName="modalOverlay"
                            >
                                <div style={{ display: "flex", gap: "30px", flexDirection: "row" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <img alt="profilePhoto" src={profile} style={{ width: "200px", height: "200px", border: "3px solid white", borderRadius: "200px", padding: "0px", marginBottom: "18px" }} />
                                        <button className="editPhotoProfile" onClick={() => {
                                            // открытие windows окна для выбора картинки
                                        }}>Редактировать фото</button>
                                        <div><strong>Рейтинг: </strong><a style={raitingCount >= 4 && raitingCount <= 5 ? { color: "#00D458" } : raitingCount < 4 && raitingCount >= 3 ? { color: "#FFA600" } : { color: "#e71b1bff" }}>{raitingCount}</a></div>
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", gap: "10px", justifyContent: "center", height: "max-content", alignItems: "center", marginBottom: "10px" }}>
                                            <div style={{ fontWeight: "bold", fontSize: "25px" }}>{fio}</div>
                                            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#0271FF" }}>{login}</div>
                                            <div style={{ fontWeight: "bold", fontSize: "18px", color: "#00D458" }}>{status}</div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                            <div>{faculty}</div>
                                            <div>{partFaculty} {course} курс {group}</div>
                                            <div><strong>Табельный номер:</strong> {personalNumber}</div>
                                            <div><strong>Номер зачетной книжки:</strong> {gradebookNumber}</div>
                                            <div><strong>Номер студенческого билета:</strong> {studentTicketNumber}</div>
                                        </div>
                                    </div>
                                </div>
                            </ReactModal>
                        </div>
                        <div>

                            <div>
                                <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img alt="settings" src={raiting} style={{ height: "25px", marginRight: "15px" }} /> <div style={{ color: "white" }}>Рейтинг</div></button>
                            </div>
                            <div>
                                <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img alt="settingsBtn" src={sun} style={{ height: "25px", marginRight: "15px" }} /><div style={{ color: "white" }}>Тема: <a style={{ color: "#0271FF" }}>Темная</a></div></button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img alt="settingsBtn" src={support} style={{ height: "25px", marginRight: "15px" }} /><div style={{ color: "#00D458", fontWeight: "bold", fontSize: "17px" }}>Поддержка</div></button>
                        </div>
                        <div>
                            <button className="settingsBtn" style={{ border: "none", flexDirection: "row", marginTop: "30px" }}> <img src={logout} style={{ height: "35px", marginRight: "15px" }} /></button>
                        </div>
                    </div>
                </ReactModal>
            )}

        </div>
    )
}

export default LeftNavBar