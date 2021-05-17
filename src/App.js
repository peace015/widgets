import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'what is react?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'why use react?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
