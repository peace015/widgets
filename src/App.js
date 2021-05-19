import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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
      <Search />
    </div>
  );
};
