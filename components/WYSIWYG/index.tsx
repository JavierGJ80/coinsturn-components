import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw, ContentState, EditorState } from 'draft-js';

type WYSIWYGParams = {
  name: string;
  valueSaved: string;
  onChange: Function;
}

let handleTimeout: string | number | NodeJS.Timeout | undefined;

const WYSIWYG = ({ name, valueSaved, onChange }: WYSIWYGParams) => {
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
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
  const triggerOnChange = (editorState: EditorState) => onChange({name, value: draftToHtml(convertToRaw(editorState.getCurrentContent()))})
  const handleEditorState = (editorState: EditorState) => {
    setEditorState(editorState);
    clearTimeout(handleTimeout);
    handleTimeout = setTimeout(() => triggerOnChange(editorState), 2000);
  }
  return (
    <Editor
      editorState={editorState}
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName"
      onEditorStateChange={handleEditorState}
    />
  )
}
export default WYSIWYG;