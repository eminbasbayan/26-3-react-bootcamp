import React from 'react';
import MyParagraph from './MyParagraph';

const MyElement = (props) => {
  console.log('MyElement render oldu!');

  return <MyParagraph>{props.show && 'My Paragraph'}</MyParagraph>;
};

export default React.memo(MyElement);
