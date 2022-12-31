import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { dracula } from "@uiw/codemirror-theme-dracula";


const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

export default function App() {
  return (
    <CodeMirror
      theme={dracula} 
      height="100vh"
      width="50vw"
      value={code}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
    />
  );
}
