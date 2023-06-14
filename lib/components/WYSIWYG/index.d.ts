import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
type WYSIWYGParams = {
    name: string;
    valueSaved: string;
    onChange: Function;
};
declare const WYSIWYG: ({ name, valueSaved, onChange }: WYSIWYGParams) => React.JSX.Element;
export default WYSIWYG;
