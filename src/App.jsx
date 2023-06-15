import { useState } from 'react';
import './App.css';
import Editor from './components/Editor.jsx';
import Preview from './components/Preview.jsx';
import Header from './components/Header.jsx';
import { marked } from 'marked';
import Split from 'react-split';
import Footer from './components/Footer.jsx';

const defaultInput = `
# This is a H1
## Thi is a H2
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
        <Split 
          // sizes={[50, 50]}
          direction="horizontal"
          className="split"
        >
          <Editor input={input} handleChange={handleChange} />
          <Preview convertedHTML={convertedHTML} />
        </Split>
        <Footer />
    </div>
  )
}

export default App
