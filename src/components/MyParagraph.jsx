const MyParagraph = (props) => {
  console.log('MyParagraph render oldu!');

  return <p>{props.children}</p>;
};

export default MyParagraph;
