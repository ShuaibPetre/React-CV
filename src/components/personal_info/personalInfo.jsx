import InputBuilder from "../InputBuilder";

export default function PersonalInfoForm({onChange, fullName, fullEmail, cellNumber, address}) {
  return (
    <>
    <div className="personalInfo">
      <h2>Personal Info:</h2>
      <InputBuilder
        type="text"
        id="fullName"
        labelText="Full name:"
        value={fullName}
        onChange={onChange}
        data-key="fullName"
      />
      <InputBuilder
        type="text"
        id="fullEmail"
        labelText="Email: "
        value={fullEmail}
        onChange={onChange}
        data-key="fullEmail"
      />
      <InputBuilder
        type="number"
        id="cellNumber"
        labelText="Cell Number:"
        value={cellNumber}
        onChange={onChange}
        data-key="cellNumber"
      />
      <InputBuilder
        type="text"
        id="address"
        labelText="Address:"
        value={address}
        onChange={onChange}
        data-key="address"
      />
      </div>
    </>
  );
  
}
