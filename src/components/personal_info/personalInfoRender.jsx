import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarker } from "react-icons/fa";

export default function PersonalInfoRender({fullName, fullEmail, cellNumber, address, newColor}) {
    
    return (
        <div className="personal-info" style={newColor.maincolor}>
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
                <div className="email"><FaEnvelope /> {fullEmail}</div>
                <div className="cellNum"><FaPhone />{(cellNumber !== "") ? (' +' + cellNumber) : ('')}</div>
                <div className="address"><FaMapMarker /> {address}</div>
            </div>
        </div>
)}