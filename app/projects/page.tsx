import * as React from 'react';
import CustomizedAccordions from './customAccordian';

export default function Page() {
  return (
    <div >
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h1>
      <p className="prose prose-neutral dark:prose-invert">
      Discover my portfolio of diverse projects showcasing my passion for technology. Including web applications, embedded systems, machine learning and more, each project reflects my dedication to innovation and problem-solving. I have also made sure they are in order from most interesting to me to least. Check out my <a href='https://github.com/JackWalton1'>GitHub</a> for more details, or if you'd like to see the source code.</p>
      <br/>
      <CustomizedAccordions></CustomizedAccordions>
    </div>
  );
}
