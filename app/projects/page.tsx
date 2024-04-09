import * as React from 'react';
import CustomizedAccordions from './customAccordian';

export default function Page() {
  return (
    <div >
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
      <p className="prose prose-neutral dark:prose-invert">
      Discover my portfolio of diverse projects showcasing my passion for technology. From web applications to embedded systems, each project reflects my dedication to innovation and problem-solving. Join me on this journey of exploration and creation as we shape the future together. Check out my <a href='https://github.com/JackWalton1'>GitHub</a> for more, as I still need to post more of my projects here.</p>
      <br/>
      <CustomizedAccordions></CustomizedAccordions>
    </div>
  );
}
