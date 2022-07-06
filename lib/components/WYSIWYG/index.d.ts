import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
declare type WYSIWYGParams = {
    valueSaved: any;
    obtainHTML: Function;
};
declare const WYSIWYG: React.ForwardRefExoticComponent<WYSIWYGParams & React.RefAttributes<unknown>>;
export default WYSIWYG;
