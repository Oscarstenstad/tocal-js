import React from "react";
import {Editor, EditorState, RichUtils} from "draft-js";

class Notes extends React.Component {
    constructor(props){
        super(props);
        this.state = {notes: EditorState.createEmpty()};
        this.onChange = notes => this.setState({notes});
    }
    render(){
        return (
            <div id="notesCon">
                <h2>Notes</h2>
                <button onClick={this.onBoldClick.bind(this)}>Bold</button>
                <button onClick={this.onItalicClick.bind(this)}>Italic</button>
                <button onClick={this.onH3Click.bind(this)}>Header</button>
                <div  id="notesEditor">
                    <Editor editorState={this.state.notes} onChange={this.onChange} handleKeyCommand={this.handleKeyCommand} />
                </div>
            </div>
        );
    }

    onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.notes, 'BOLD'));
        
      }
    onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.notes, 'ITALIC'));
    }
    onH3Click() {
        this.onChange(RichUtils.toggleBlockType(this.state.notes, 'header-three'));
    }
    
}

export default Notes;