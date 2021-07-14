import React, { useMemo, useState } from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { jsx } from 'react-syntax-highlighter/dist/esm/languages/prism';
import { vscDarkPlus, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
// SyntaxHighlighter.registerLanguage('jsx', jsx);


// // 以字符串形式加载资源
// import assetAsString from './shader.glsl?raw'

// import { editorThemes, THEME_MAPPING } from "./themes";
import sassClasses from "./index.module.scss";

const CodeRender = (props) => {
  const { children: codeString, className = '' } = props;
  const codeLanguage = className.replace('language-', '');
  const { editor } = sassClasses
  const [isDarkMode, setDarkMode] = useState(false);
  const currentTheme = useMemo(
    () => isDarkMode ? vscDarkPlus : prism
  ,[isDarkMode])
  const hitColor = isDarkMode ? 'text-blue-50' : 'text-blue-900'
  return (
  <div className={`font-mono w-full ${editor} relative`} onClick={e => setDarkMode(!isDarkMode)}>
    <SyntaxHighlighter language={codeLanguage} style={currentTheme} showLineNumbers={false} >
      {codeString}
    </SyntaxHighlighter>
    <p className={`absolute right-1 bottom-0 ${hitColor} italic opacity-50 hover:opacity-80 `}><em>{`</>`}&nbsp;{codeLanguage}</em></p>
  </div>
  );
};
export default CodeRender