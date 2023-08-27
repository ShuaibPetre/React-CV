export default function PersonalInfoRender({fullName, fullEmail, cellNumber, address}) {
    
    return (
        <div className="personal-info">
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
                <div className="email">{fullEmail}</div>
                <div className="cellNum">{cellNumber}</div>
                <div className="address">{address}</div>
            </div>
        </div>
)}