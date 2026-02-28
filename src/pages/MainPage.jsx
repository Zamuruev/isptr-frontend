import "../styles/button.css"
import filter from "../resources/img/filter.svg"
import checkbtn from "../resources/img/check.svg"
import editbtn from "../resources/img/editbtn.svg"
import closebtn from "../resources/img/closebtn.svg"
function MainPage() {
    return (
        <>
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display: "flex"}}>
            <div style={{fontSize: "20px", fontWeight: "bold", marginRight: "30px"}}> Мои работы </div>
            <button className="filterbutton" style={{marginRight: "30px"}}> <img src={filter} alt="filter" /> Курс </button>
            <button className="filterbutton"style={{marginRight: "30px"}}> <img src={filter} alt="filter" /> Дисциплина </button>
            <button className="filterbutton"style={{marginRight: "30px"}}> <img src={filter} alt="filter" /> Выполнение </button>
            <button className="filterbutton"> <img src={filter} alt="filter" /> Период </button>
        </div>
        <div style={{marginTop: "20px"}}>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Вид работы</th>
                        <th>Курс</th>
                        <th>Дисциплина</th>
                        <th>Дата загрузки</th>
                        <th>Дедлайн</th>
                        <th style={{borderRight: "none"}}>Кнопки</th>
                    </tr>
                </thead>
                <tbody style={{whiteSpace: "nowrap"}}>
                    <tr>
                        <td style={{borderBottom: "none"}}>1</td>
                        <td style={{borderBottom: "none"}}>Курсовая работа</td>
                        <td style={{borderBottom: "none"}}>2</td>
                        <td style={{borderBottom: "none", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "20px"}}>Технологии программного обеспечения</td>
                        <td style={{borderBottom: "none"}}>10.02.2026</td>
                        <td style={{borderBottom: "none", color: "#CF0E0E"}}>23.01.2026</td>
                        <div style={{borderRight: "none", borderBottom: "none", 
                        display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", padding: "5px 30px"}}>
                            <button className="btntable"> <img src={checkbtn} alt="checkbtn" style={{height: "14px", alignSelf: "center", marginRight: "15px"}}/> </button>
                            <button className="btntable"> <img src={editbtn} alt="editbtn" style={{width: "17px", alignSelf: "center", marginRight: "15px"}}/> </button>
                            <button className="btntable"> <img src={closebtn} alt="closebtn" style={{height: "14px", alignSelf: "center"}}/> </button>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        
        </>
    )
}

export default MainPage;