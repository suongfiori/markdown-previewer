
const Preview = ({ convertedHTML }) => {

  return (
    <div
      id="preview" 
      dangerouslySetInnerHTML={{ __html: convertedHTML }} 
      className="pane preview-container"
    >   
    </div>
  )
}

export default Preview
