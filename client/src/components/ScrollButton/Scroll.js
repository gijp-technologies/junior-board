import React from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
 
export default class ScrollIndex extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton style={{width: 30}} ToggledStyle={{right: 20}}/>
            </div>
        );
    }
}