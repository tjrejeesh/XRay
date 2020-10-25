import React, { useState, useContext } from 'react';
import logo from "../assets/Annalise logotype.svg";
import {XrayContext} from "../XrayContext";

export default function FileUpload() {
    const [uploads, setUploads] = useContext(XrayContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [invalidFormat, setInvalidFormat] = useState(false);
    const onFileChange = event => {
        if(event.target.files[0] &&
            (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png')){
            setSelectedFile(URL.createObjectURL(event.target.files[0]));
            setUploads(prevUploads => [...prevUploads, {
                name: URL.createObjectURL(event.target.files[0])
            }]);
            setInvalidFormat(false);
        }else {
            setInvalidFormat(true);
        }
    };
    const uploadCount = uploads.length;
    const fileData = () => {
        if (selectedFile) {
            return (
                <div>
                    {uploads && <img src={uploads[uploadCount - 1].name} alt={"logo"} width="200" height="200" />}
                </div>
            );
        }
    };
    const browseFile = () => {
        return (
            <div>
                <label className="locate-file">
                    <input type="file" onChange={onFileChange}/>
                    <span>{selectedFile ? "Re Upload" : "Upload"}</span>
                </label>
            </div>
        );
    };
    return <div className="container">
        <div className="form-wrapper">
            <div className="title">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="upload">
                {browseFile()}
                <div className="image-pop">
                    {invalidFormat ?  <div className="error">
                        Invalid file format. <br/>Please upload only jpeg or png files</div> : fileData()
                    }
                    <span className="image-zoom">{!invalidFormat && fileData()}</span>
                </div>
            </div>
        </div>
    </div>
}
