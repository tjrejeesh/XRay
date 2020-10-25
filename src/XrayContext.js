import React, {useState, createContext} from 'react';

export const XrayContext = createContext();

export const XrayProvider = (props) => {
    const [uploads, setUploads] = useState([
        {name: null}
    ]);
    return(
        <XrayContext.Provider value={[uploads, setUploads]}>
            {props.children}
        </XrayContext.Provider>
    )
};
