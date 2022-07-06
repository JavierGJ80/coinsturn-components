import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw, ContentState, EditorState } from 'draft-js';

type WYSIWYGParams = {
  valueSaved: any;
  obtainHTML: Function;
}

const WYSIWYG = React.forwardRef((props: WYSIWYGParams, ref) => {
  const { valueSaved, obtainHTML } = props;
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  React.useImperativeHandle(ref, () => ({
    handleSave() {
      if(editorState) 
        obtainHTML(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    }
  }));
  const getInitialState = (defaultValue: any) => {
    if (defaultValue) {
      const { contentBlocks, entityMap } = htmlToDraft(defaultValue);
      const state = ContentState.createFromBlockArray(contentBlocks, entityMap);
      return EditorState.createWithContent(state);
    } else {
      return EditorState.createEmpty()
    }
  }
  React.useEffect(() => {
    if(valueSaved) {
      const initialState = getInitialState(valueSaved)
      setEditorState(initialState)
    }
  }, [valueSaved]);
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={value => setEditorState(value)}
    />
  )
})
export default WYSIWYG;