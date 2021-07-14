import React from 'react';

export default props => {
  
  return (
    <article className="bg-skin-fill theme-sky theme-teal my-3 p-8">
      <h1 className="text-skin-base text-2xl font-bold">
        Garlic bread with cheese: What the science tells us
      </h1>
      <p className="text-skin-muted mt-2">
        But a recent study shows that the celebrated appetizer may be linked
        to a series of rabies cases springing up around the country.
      </p>
      <p className="text-skin-base mt-4">
        For years parents have espoused the health benefits of eating garlic
        <br />
        bread with cheese to their children, with the food earning such an{' '}
        <br />
        iconic status in our culture that kids will often dress up as warm,{' '}
        <br />
        cheesy loaf for Halloween. <br />
      </p>
      <div className="flex gap-3 mt-8">
        <a
          href="#"
          className="btn bg-skin-button-muted text-skin-inverted px-5 py-2"
        >
          cancel
        </a>
        <a
          href="#"
          className="btn bg-skin-button-accent text-skin-base hover:bg-skin-button-accent-hover px-5 py-2"
        >
          action
        </a>
      </div>
    </article>
  )
}