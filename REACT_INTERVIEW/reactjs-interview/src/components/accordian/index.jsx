//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";


export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentID = copyMultiple.indexOf(getCurrentId);
        //console.log(findIndexOfCurrentID);
        if (findIndexOfCurrentID === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentID, 1)

        setMultiple(copyMultiple);

    }
    //console.log(selected, multiple);

    return (
        <div className="wrapper">
            <div className="accordian">
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection === false
                    ?<>Enable Multi Selection</>
                    : <>Enable Single Selection</>}
                </button>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item">
                            <div
                                onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                                <div>
                                    <div>
                                        {
                                            enableMultiSelection
                                            ?multiple.indexOf(dataItem.id) !== -1 && (
                                            <div className="content">{dataItem.answer}</div>
                                            )
                                            : selected ===dataItem.id &&(
                                                <div className="content">{dataItem.answer}</div> 
                                            )
                                        }
                                        {/* {
                                            selected == dataItem.id ||
                                                multiple.indexOf(dataItem.id) !== -1
                                                ? <
                                                    div className="content">
                                                    {dataItem.answer}
                                                </div>
                                                : null
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </div>)
                        : <div>No data found !</div>
                }
            </div>
        </div>
    );
}