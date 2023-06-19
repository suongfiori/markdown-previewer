
const Preview = ({ convertedHTML }) => {

  return (
    <div
      id="preview" 
      dangerouslySetInnerHTML={{ __html: convertedHTML }} 
      className="text preview-container"
    >   
    </div>
  )
}

export default Preview
