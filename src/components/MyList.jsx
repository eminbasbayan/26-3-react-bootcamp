import { useMemo } from 'react';

const MyList = ({ list }) => {
  const sortedList = useMemo(() => {
    console.log('list çalıştı!');
    return list.sort((a, b) => b - a);
  }, [list]);

  const listItems = sortedList;

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default MyList;
