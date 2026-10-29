import MyElement from '../components/MyElement';
import MyButton from '../components/MyButton';
import { useCallback, useMemo, useState } from 'react';
import MyList from '../components/MyList';

const ReactTest = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log('ReactTest render oldu!');

  const toggleParagraphHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  const listItems = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div>
      {/*       <h1>React Optimizasyon Teknikleri</h1> */}
      <MyElement show={false} />
      <MyButton onClick={toggleParagraphHandler} />
      <MyList list={listItems} />
    </div>
  );
};

export default ReactTest;
