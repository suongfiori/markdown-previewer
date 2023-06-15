
const Editor = ({ input, handleChange }) => {
  
  return (
    <div  className="pane editor-container">
      <textarea 
        id="editor" 
        onChange={handleChange}
        value={input}
      />
    </div>
  )
}

export default Editor
