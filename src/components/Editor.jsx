
const Editor = ({ input, handleChange }) => {
  
  return (
    <div  className="pane editor-container">
      <textarea 
        id="editor" 
        onChange={handleChange}
        value={input}
        className="text"
      />
    </div>
  )
}

export default Editor
