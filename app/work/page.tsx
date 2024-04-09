import * as React from 'react';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
      <p>
        Striving to create impactful products and empower the future generation of developers and their users. Here's a snapshot of my journey as a software engineer so far, poised to further embark on my career in tech.
      </p>
      {/* Microsoft information */}
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Microsoft</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">Software Engineer Apprentice</p>
      <p>I was fortunate to secure an apprenticeship opportunity with <a href="https://www.microsoft.com/">Microsoft</a> at the onset of the initial AI wave. I worked alongside five peers and three Microsoft software engineers to develop a "ML Work Scheduler Assistant" tailored for the Windows OS. Its purpose is to provide the "best" time for installations, updates, or reboots at the most convenient times, minimizing disruptions for users.</p>
      <ul>
        <li><strong>Requirements Engineering:</strong> The Microsoft engineers provided us apprentices with flexible requirements, including a model size of less than 150MB, processing time of 2 seconds or less, and local execution instead of relying on the cloud. Due to flexible requirements, we refined them and determined the technologies to research and use. We opted to collect data from Windows system data from users, such as current date, network utility, battery percentage, CPU usage, RAM usage, and internet connectivity. Our process involved brainstorming various project and model architectures and researching many relevant technologies to ensure optimal performance.</li>
        <li><strong>Software Construction:</strong> Once the Microsoft engineers were satisfied with our project architecture, technologies, and technical specification, we tackled the creation of this software. We leveraged Task Scheduler to set up tasks to collect a Windows user's system data every 5 minutes, while removing data older than 30 days old. This helped keep the data relevant, while impacting the OS storage lightly. We created an API server to collect the user data, give that data to the pretrained model, and allow the Windows Update Orchestrator of the API to hit endpoints that return the best times to update/install/restart. Once this looked good to the sponsors, we started setting up a CI/CD pipeline to test our project.</li>
        <li><strong>Software Deployment:</strong> The main challenge of our project right now is deployment. We are currently discussing with the sponsors how to bundle our project. We are thinking about making this project an executable that could be installed on the a Microsoft update in the .bin folder.</li>
      </ul>
      {/* Internship information */}
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Welcome Home Management Inc.</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">Software Engineering Intern</p>
      <p>During my internship at Welcome Home Management Inc., I took the lead in developing an autonomous Instagram bot tailored specifically for the real estate industry. This innovative solution was strategically crafted to effectively market available rental properties, revolutionizing the agency's outreach strategy.</p>
      <p>Using Python, Selenium WebDriver, Webscrapers, and InstagrAPI, I engineered a sophisticated tool that not only utilized existing agency listings but also promoted them dynamically on Instagram. To ensure seamless integration and deployment, I implemented GitHub Actions CI/CD, enabling the bot to autonomously build, test, and deploy updates on a bi-daily basis.</p>
      <p>Collaborating closely with the agency's team, I continuously refined the bot's functionality to align with evolving requirements and strategic objectives. As a result, we witnessed a significant increase in client outreach by 45%, while the agency was able to rent out properties 30% faster, particularly appealing to a younger demographic.</p>
      <p>However, as Instagram began implementing stricter guidelines regarding automated activity, our bot faced challenges. Despite this setback, I navigated through Instagram's two-factor authentication (2FA) security by integrating a package into the bot, allowing it to access my email and retrieve the six-digit verification code, thereby ensuring seamless operation and compliance with security measures.</p>
      </div>
    </section>
  );
}
