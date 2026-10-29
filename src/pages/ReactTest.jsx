import MyElement from '../components/MyElement';
import MyButton from '../components/MyButton';
import { useState } from 'react';

const ReactTest = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log('ReactTest render oldu!');

  const toggleParagraphHandler = () => {
    setToggleParagraph((prevState) => !prevState);
  };

  return (
    <div>
      {/*       <h1>React Optimizasyon Teknikleri</h1> */}
      <MyElement show={false} />
      <MyButton onClick={toggleParagraphHandler} />
    </div>
  );
};

export default ReactTest;
