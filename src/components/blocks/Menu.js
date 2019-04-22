import React from 'react';

const Menu = ({ videoChapters }) => videoChapters.map(chapter => {
  <span>{chapter.name}</span>
});

export default Menu;