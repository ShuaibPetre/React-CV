export default function InputBuilder({
id,
type,
labelText,
onChange,
value,
dataKey,
}) {
    return (
    <div className="inputForm">
        <label htmlFor={id}>
            <span className='labeltext'>{labelText}</span>
        </label>
        <br />
    {type === "textarea" ? (
        <textarea
        id={id}
        onChange={onChange}
        value={value}
        data-key={dataKey}
        ></textarea>
    ) : (
        <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        data-key={dataKey}/>
    )}
    </div>
    );
}
