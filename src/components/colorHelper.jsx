import { ColorPicker } from "react-color-palette";

export default function ColorChanger(color1, onChange) {
    return (
        <div>
            <h3>Change your colour:</h3>
            <ColorPicker width={450} height={450} 
                       color={color1} 
                       onChange={onChange} />;
        </div>
      )
}