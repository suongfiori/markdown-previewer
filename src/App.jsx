import { useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { marked } from 'marked';


const defaultInput = `
# This is a H1
## This is a H2
[I'm a title](https://www.example.com)

\`I am a chunk of code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`;

function App() {
  const [input, setInput] = useState(defaultInput);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  const convertedHTML = marked(input);

  return (
    <div className="container">
        <Header />

        <div className='split'>
          <Editor input={input} handleChange={handleChange} />
          <Preview convertedHTML={convertedHTML} />
        </div>
   
        <Footer />
    </div>
  )
}

export default App
