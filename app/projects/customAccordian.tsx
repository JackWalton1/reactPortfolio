'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles'; 
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

interface AccordionPanel {
  id: string;
  title: string;
  summary: string;
  details: {
    heading: string;
    content: React.ReactNode;
  }[];
}

const panels: AccordionPanel[] = [
  {
    id: 'panel0',
    title: 'DevSecOps Project',
    summary: 'Build, Test, Deploy, Monitor, Respond',
    details: [
      { heading: 'Purpose', content: 'I decided to dive into learning DevOps by building a small project: a Flask web app that colorizes black and white images using machine learning (A previous project). While the app’s purpose was fun and creative, I also saw it as a great opportunity to experiment with server deployment, security, and monitoring — things that are key in the DevOps world.' },
      { heading: 'DevOps Skills in Action', content: (
        <>
          <p><strong>Dockerize the App:</strong> I containerized the Flask application using Docker, learning how to manage app dependencies and deployment on a server. This was my first time using Docker on a production server, and I loved the flexibility it gave me to run the app anywhere.</p>
          <p><strong>DigitalOcean Deployment:</strong> For hosting, I used a DigitalOcean droplet running Ubuntu. I initially set up a more powerful droplet since I wasn’t sure about my resource needs, but later learned I could downsize once the app was running smoothly.</p>
          <p><strong>Nginx & Reverse Proxy:</strong> To handle web traffic, I set up Nginx as a reverse proxy. I learned how to route traffic securely using HTTPS with TLS encryption (thanks to Let’s Encrypt's tool 'certbot'), ensuring that data flowing between the client and server stayed private, and the server was secure from directory traversal, SQL injection, and XSS attacks.</p>
          <p><strong>System Monitoring with Splunk:</strong> I also set up <strong>Splunk</strong> for tracking system logs. This was a key learning point — I had to figure out how to forward logs from my webapp server to a separate server running Splunk Enterprise. I also got my hands dirty with networks because I had to set up a Splunk Universal Forwarder on the webapp host to send logs to Splunk Enterprise running on the other droplet. Once I was satisifed with the logs being forwarded, I navigated to my host's IP at port 8080 and was able to start making my dashboard and set up alerts, which has helped me keep an eye on things like web traffic, failures, attackers, and user base. I currently have 800+ users and 99% uptime, where the missing 1% was due to a maintence break.</p>
          <p><strong>Security Practices:</strong> Securing the server was one of my biggest takeaways. I Improved my ability with firewalls, input sanitation, networking, SSL/TLS, and reverse proxies. By setting up firewalls and TLS, I ensured the app was secure from potential attacks like port scanning, man in the middle, and server-side request forgery.</p>
        </>
      ), },
      { heading: 'Conclusion', content: 'While building this app, I tried to take a DevOps-first approach to make sure everything was automated, monitored, and secure. I set up cron jobs to handle backups and certificate renewals, and made sure all my logs were being captured and sent to Splunk. That way, I could quickly detect any issues with the app, such as downtime or potential attacks. Through this project, I got hands-on experience with several DevOps tools and concepts, including containerization, monitoring, and security practices. I even learned about automating the deployment process, which will definitely come in handy for future projects.' },
      { heading: "What's Next", content: 'I just took the Certified Kubernetes Administrator course on Udemy, and am currently brushing up on Jenkins (CI/CD tool, similar to Azure Pipelines). Then I want to learn Terraform and Ansible (Tools to automate Infrastructure in Code) and then create some application to help educators for children with autism and actually try to make it scalable. The current idea I have is to make a in-browser game that would help children with autism navigate difficult social interactions.' },

    ]
  },
  {
    id: 'panel1',
    title: 'Apache2 Fleet Pentesting',
    summary: 'Red and Blue Team',
    details: [
      { heading: 'Introducing the Teams', content: 'In a collaborative effort involving 30 individuals, we embarked on a project to fortify a fleet of Apache2 hosts against potential cyber threats. Split into teams of three, each team was tasked with safeguarding a specific Apache2 host while simultaneously attacking similar Apache2 hosts.' },
      { heading: 'Attack Strategy', content: 'Our approach involved deploying known attack techniques targeting common web-based vulnerabilities, allowing teams to assess and enhance the security posture of their assigned hosts. Leveraging a combination of penetration testing methodologies, including port scanning, directory traversal, SQL Injection, and Cross Site Scripting (XSS), teams actively defended their hosts while probing for weaknesses in others.' },
      { heading: 'Automated Monitoring and Response', content: 'To ensure continuous protection and prompt response to anomalies, we developed a suite of custom scripts that autonomously monitored host functionality and detected potential breaches. One script simulated user interactions by submitting orders on the website and comparing responses to expected outcomes, alerting us via Discord if discrepancies were detected. Another script parsed server logs to identify and log unique IP addresses accessing the host. Additionally, utilizing nmap, a script alerted us to any new ports opened on our Apache2 hosts, enabling swift investigation and mitigation of potential security risks. These scripts operated seamlessly via cron jobs on a remote server named Guacamole, ensuring round-the-clock vigilance.' },
      { heading: 'SSL/TLS Encryption', content: "To enhance data confidentiality and integrity, TLS encryption was implemented using Let's Encrypt's CLI tool 'certbot'. This automated the process of obtaining and renewing SSL/TLS certificates, ensuring secure communication between clients and servers."},
      { heading: 'Metrics', content: 'Attack Detection Rate: 95%, Average Response Time to Anomalies: 15 minutes, Incident Response Efficiency: 92%, Host Uptime: 98%' }
    ]
  },
  {
    id: 'panel2',
    title: 'RFID Copier',
    summary: 'Embedded Systems Project with STM32',
    details: [
      { heading: 'Introducing the RFID Copier', content: 'Ever envisioned effortlessly transferring data from one RFID card to another with a simple push of a button? The RFID Copier does just that, combining sleek design with innovative functionality to redefine RFID operations. If you are not familiar with RFID, it is what makes it possible to open doors with a key card at hotels, apartments, even cars, etc. Imagine the convenience of seamlessly copying RFID data, all controlled through an intuitive interface.' },
      { heading: 'Unveiling the Setup', content: 'At the heart of our RFID Copier lies the STM32 microcontrollers, orchestrating a symphony of operations. One STM32 pairs with an RFID Tranceiver Module, facilitating data transfer through SPI communication protocol, while another connects to a 16x2 LCD screen and two buttons for user interaction. Both STM32 microcontrollers are connected to radio frequency modules, which communicate the signal sent from the button. The STM32 connected to the RFID Tranceiver is daisy chained with the radio frequency module, whereas the UI purposed STM32 is connected via traditional SPI. The two buttons trigger read OR write signals, seamlessly integrating user control into the system.' },
      { heading: 'A Glimpse into the Technical Arsenal', content: 'The RFID Copier was constructed with compatible, top-tier components carefully chosen for their performance, reliability, and extensive documentation. From the two STM32 Nucleo-L476RG microcontrollers to the MFRC522 RFID Tranceiver Module and the SX1261 Low Energy Radio Transceiver Module, every component plays a crucial role in delivering its functionality.' }
    ]
  },
  {
    id: 'panel3',
    title: 'Black & White Colorizer',
    summary: 'Colorize B&W photos and videos w/ ML',
    details: [
      { heading: 'Unlocking the Magic of Colorization', content: 'With the black and white colorizer, I ventured into the realm of machine learning, employing ECCV-16 and SIGGRAPH-17 models to infuse monochrome videos with vibrant hues. While initially aiming to implement these models from scratch, I transitioned to utilizing the original ones due to encountered processing challenges compounded by the absence of a proper GPU.' },
      { heading: 'Building a Robust Back-End Infrastructure', content: 'The colorizer meticulously analyzes each frame of black and white videos, ensuring similarity before blending vibrant colors. Through a sophisticated technique, colors from preceding frames seamlessly merge with those of the current frame. The result? Engagingly colorized videos that captivate audiences with their vividness and charm.' },
    ]
  },
  {
    id: 'panel4',
    title: 'Goal - Cross Platform Webapp',
    summary: 'Learned .NET Maui, C#, Azure, and MongoDB',
    details: [
      { heading: 'Crafting a Multi-Platform Application', content: 'Dive into the realm of sports exploration with our innovative application, designed to keep users informed about forthcoming sports events in their vicinity. Co-created with three other developers, while we studied abroad in the enchanting city of Rome, Italy. Our project harnesses the power of cutting-edge technologies like .NET Maui, C#, Azure, and MongoDB. Leveraging the versatility of .NET Maui, we meticulously crafted a user-friendly front-end interface that seamlessly adapts to the nuances of iOS, Android, MacOS, Windows, and even web browsers. Whether accessing the application on a smartphone, tablet, or desktop, users are greeted with a consistent and intuitive interface that informs the user about upcoming sports events in their area.' },
      { heading: 'Building a Robust Back-End Infrastructure', content: 'Behind the scenes, Azure services form the backbone of our application, providing the robust infrastructure needed to support its functionality. Azure API Management and Azure Functions seamlessly orchestrate database management, ensuring efficient communication between the front-end and back-end, as well as handling location services. Meanwhile, MongoDB serves as the trusted repository for data storage, offering scalability and reliability to handle the influx of event and user information.' },
    ]
  },
  {
    id: 'panel5',
    title: 'Function Generator',
    summary: 'Embedded Systems Debugging Tool',
    details: [
      { heading: 'Purpose', content: 'Function generators serve as indispensable tools in the realm of electronics, allowing engineers and enthusiasts to create a wide range of electrical waveforms for various purposes. From testing circuits to calibrating equipment and exploring signal behavior, these devices play a crucial role in signal manipulation and analysis.' },
      { heading: 'Crafting Waves', content: 'At the heart of the Function Generator lies an STM32 MCU, orchestrating seamless communication with a DAC chip through a SPI communication protocol. This synergy allows digital signals to seamlessly transition into analog signals, unlocking a world of signal exploration. With a dynamic connection to a keypad, users can effortlessly adjust waveform variables in real-time, from duty cycle to frequency and waveform type. The result? A powerful tool that enables engineers and enthusiasts alike to sculpt waveforms with unmatched flexibility and precision on an oscilloscope.' },
      { heading: 'Precision in Waveform Generation', content: "Experience precision in action as the Dynamic Function Generator achieves frequencies within 2.5 Hz of the desired frequency specified by the keypad. This remarkable feat underscores the project's commitment to precision and accuracy, ensuring that every waveform generated meets the highest standards of quality. Whether you're diving into electronics for the first time or seeking to expand your expertise, the Dynamic Function Generator offers a streamlined solution for signal manipulation, opening doors to new possibilities in the world of electronics. From square waves with variable duty cycles to sawtooth, triangle, and sine waves, explore a diverse array of waveform options with ease and confidence." },
    ]
  },
];

// Define your Accordion component
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '8px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  // Apply dark mode styling using Tailwind's dark mode feature
  backgroundColor: 'white', // Default background color
  '@media (prefers-color-scheme: dark)': {
    backgroundColor: 'gray-800', // Dark mode background color
  },
}));

// Define your AccordionSummary component
const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '@media (prefers-color-scheme: dark)' ? '#fff' : '#000'  }} />}
    {...props}
  />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '&.Mui-expanded': {
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px'
    },
      // Set color of the arrow dynamically based on theme mode
    '& .MuiSvgIcon-root': {
        color: '#000',
    },
    padding: '10px',
    backgroundColor: theme.palette.background.default,
    border: '1px solid #f1f1f1',
    borderRadius: '8px',
    color: theme.palette.text.primary,
    fontSize: '14px',
    lineHeight: '10',
    overflow: 'auto',
    transition: 'background-color 0.3s ease-in-out',
  
    // Dark mode styles
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: '#333', // Example dark mode background color
      color: '#fff', // Example dark mode text color
      border: '1px solid #fff', // Example dark mode border color
      // Add more dark mode styles here as needed
      '& .MuiSvgIcon-root': {
        color: '#fff',
    },
    },
  }));
// Define your AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '16px',
    backgroundColor: theme.palette.background.default,
    border: '1px solid #e0e0e0',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    color: theme.palette.text.primary,
    fontSize: '14px',
    lineHeight: '1.5',
    overflow: 'auto',
    transition: 'background-color 0.3s ease-in-out',
  
    // Dark mode styles
    '@media (prefers-color-scheme: dark)': {
      backgroundColor: '#333', // Example dark mode background color
      color: '#fff', // Example dark mode text color
      border: '0.5px solid #fff', // Example dark mode border color
      // Add more dark mode styles here as needed
    },
    // // Remove border-radius when expanded
    // '&.MuiAccordionDetails-expanded': {
    //     borderRadius: '0px',
    // },
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionPanelComponent = ({ id, title, summary, details }) => (
    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary aria-controls={`${id}-content`} id={`${id}-header`}>
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>{title}</strong>
        </Typography>
        <Typography className="prose prose-neutral dark:prose-invert">{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {details.map((detail, idx) => (
          <div key={idx}>
            <Typography><strong>{detail.heading}</strong></Typography>
            {/* Rendering the content as JSX */}
            <div className="prose prose-neutral dark:prose-invert">{detail.content}</div>
            {idx < details.length - 1 && <br />}
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
  

  return (
    <div>
      {panels.map((panel) => (
        <AccordionPanelComponent key={panel.id} {...panel} />
      ))}
    </div>
  );
}
