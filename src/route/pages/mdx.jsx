import React from 'react';
import CheatSheet from '@posts/cheatSheet.mdx';

import './mdx.css'

export default props => {
  
  return (
    <section className="container mx-auto ">
      <article className="w-2/3 mx-auto flex flex-col gap-1">
        <CheatSheet />
      </article>
    </section>
  )
}