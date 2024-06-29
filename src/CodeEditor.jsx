// // CodeEditor.js

// import React, { useState } from 'react';
// import { Highlight, themes } from 'prism-react-renderer';
// import './CodeEditor.css';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// const CodeEditor = () => {
//   const [code, setCode] = useState('');

//   const handleCodeChange = (event) => {
//     setCode(event.target.value);
//   };

//   return (
//     <div className='code-editor-container'>
//       <textarea
//         value={code}
//         onChange={handleCodeChange}
//         spellCheck="false"
//         className='code-input'
//       />
//       <div className='code-output'>
//         <Highlight theme={themes.nord} code={code} language="javascript">
//           {({ className, style, tokens, getLineProps, getTokenProps }) => (
//             <pre className={className} style={style}>
//               {tokens.map((line, i) => (
//                 <div key={i} {...getLineProps({ line })}>
//                   <span className="line-number">{i + 1}</span>
//                   {line.map((token, key) => (
//                     <span key={key} {...getTokenProps({ token })} />
//                   ))}
//                 </div>
//               ))}
//             </pre>
//           )}
//         </Highlight>
// {/* 
//         <SyntaxHighlighter language="javascript" style={themes.nord}>
//           {code}
//         </SyntaxHighlighter> */}
//       </div>
//     </div>
//   );
// };

// export default CodeEditor;



import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import "./CodeEditor.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/prism';


const initialCode = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}
`;

const CodeEditor = () => {
  const [code, setCode] = useState(initialCode);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div>
        <textarea
          value={code}
          onChange={handleChange}
          spellCheck="false"
          className="code-input"
        />
      </div>
      <div className="code-output">
        <Highlight theme={themes.nord} code={code} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
         
         {/* <SyntaxHighlighter  code = {code}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span className="line-number">{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
         </SyntaxHighlighter> */}

        {/* <SyntaxHighlighter language="tsx" style={shadesOfPurple} >
          {code}
        </SyntaxHighlighter> */}
      </div>
    </div>
  );
};

export default CodeEditor;