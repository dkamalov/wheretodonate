import React from "react";
// JavaScript library for creating Dropdown Selects
import Choices from "choices.js";
// reactstrap components
import { Input } from "reactstrap";
// Core Components

function SelectionP({setType}) {

    React.useEffect(() => {
        new Choices("#choices-single-default", {
            searchEnabled: false,
        });
    }, []);

    return (
        <>
            <Input  
                data-trigger=""
                id="choices-single-default"
                name="choices-single-default"
                type="select"
                onChange={setType}
            >
                <option value="pharmaceuticals"> Pharmaceuticals </option>
                <option value="electronics"> Electronics </option>
                <option value="textiles">Clothing</option>  
                
                
            </Input>
        </>
    );
}

export default SelectionP;