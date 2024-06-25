import React, { useState } from 'react'
import data from './data';
import './accordion.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultipleSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);
        if (findIndexofCurrentId === -1) {
            copyMultiple.push(getCurrentId)
        } else copyMultiple.splice(findIndexofCurrentId, 1)

        setMultiple(copyMultiple)

    }
    //console.log(selected, multiple);

    return (
        <div>
            <div className="wrapper">
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Slection</button>
                <div className="accordion">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem =>
                                <div className='item' key={dataItem.id}>
                                    <div className="title"
                                        onClick={
                                            enableMultiSelection ?
                                                () => handleMultipleSelection(dataItem.id) :
                                                () => handleSingleSelection(dataItem.id)}>
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {enableMultiSelection
                                        ? multiple.indexOf(dataItem.id) !== -1 && (
                                            <div className="content ">{dataItem.answer}</div>
                                        ) :
                                        selected === dataItem.id ?
                                            <div className="content">{dataItem.answer}</div>
                                            : null
                                    }
                                </div>
                            )
                            : <div>No Data found</div>
                    }
                </div>

            </div>
        </div>
    )
}
