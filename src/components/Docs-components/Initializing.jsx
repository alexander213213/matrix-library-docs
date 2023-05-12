import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs' 

export default function Initializing() {
  const code1 = `npm install matrix-library`
  const code2 = `import Matrix form "matrix-library"

//Matrix( shape[rows, columns], arr )
const A = Matrix([2, 3], [1, 2, 3, 4, 5, 6])  //[ [1, 2, 3], [4, 5, 6] ]`

  return (
    <div className="content-container">
      <h1>Initalization</h1>

      <div className='block'>
        <h2>Installation</h2>
        <p>Add the library to your project using the command below:</p>
        <SyntaxHighlighter
          language='npm'
          style={atomOneDark}
        >
          {code1}
        </SyntaxHighlighter>
      </div>

      <div className='block'>
        <h2>Creating Matrices</h2>
        <p>To initialize a matrix use the code below:</p>
        <SyntaxHighlighter
          language='javascript'
          style={atomOneDark}
        >
          {code2}
        </SyntaxHighlighter>
      </div>
      
      <div className="block">
        <h2>Notes</h2>
        <p>All operations implemented on this library follows and thus have the same properties as in linear algebra; meaning that (AB) is not the same as (BA). This apply to all properties of every operation since the algorithms that are used here are the same as taught in textbooks.</p>
      </div>
    </div>
  )
}
