import React from 'react';

/**
 * 
 */
const alert = (props) => {
    const capitalize=(text)=>{
        text=text.toLowerCase();
        return text.charAt(0).toUpperCase()+text.slice(1);
      }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className="alert alert-success" role="alert">
            <strong>{capitalize(props.alert.type)} :</strong> {props.alert.msg}
        </div>}
        </div>
    );
}

export default alert;