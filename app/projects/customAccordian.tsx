"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles'; 
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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
  const [expanded, setExpanded] = React.useState<string | false>('panel');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div >
      <Accordion expanded={expanded === 'panel0'} onChange={handleChange('panel0')}>
        <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
          <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>Apache2 Fleet Pentesting</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Red and Blue Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Introducing the Teams
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          In a collaborative effort involving 30 individuals, we embarked on a project to fortify a fleet of Apache2 hosts against potential cyber threats. Split into teams of three, each team was tasked with safeguarding a specific Apache2 host while simultaneously attacking similar Apache2 hosts.
          </Typography>
          <br/>
          <Typography><strong>
          Attack Strategy
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Our approach involved deploying known attack techniques targeting common web-based vulnerabilities, allowing teams to assess and enhance the security posture of their assigned hosts. Leveraging a combination of penetration testing methodologies, including port scanning, directory traversal, SQL Injection, and Cross Site Scripting (XSS), teams actively defended their hosts while probing for weaknesses in others.         
          </Typography>
          <br/>
          <Typography><strong>
          Automated Monitoring and Response
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          To ensure continuous protection and prompt response to anomalies, we developed a suite of custom scripts that autonomously monitored host functionality and detected potential breaches. One script simulated user interactions by submitting orders on the website and comparing responses to expected outcomes, alerting us via Discord if discrepancies were detected. Another script parsed server logs to identify and log unique IP addresses accessing the host. Additionally, utilizing nmap, a script alerted us to any new ports opened on our Apache2 hosts, enabling swift investigation and mitigation of potential security risks. These scripts operated seamlessly via cron jobs on a remote server named Guacamole, ensuring round-the-clock vigilance.         
          </Typography>
          <br/>
          <Typography><strong>
          SSL/TLS Encryption
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          To enhance data confidentiality and integrity, TLS encryption was implemented using Let's Encrypt's CLI tool 'certbot'. This automated the process of obtaining and renewing SSL/TLS certificates, ensuring secure communication between clients and servers.           
          </Typography>          
          <br/>
          <Typography><strong>
          Metrics
          </strong></Typography>
          <Typography>
            Attack Detection Rate: 95%
          </Typography>
          <Typography>
            Average Response Time to Anomalies: 15 minutes
          </Typography>
          <Typography>
            Incident Response Efficiency: 92%
          </Typography>
          <Typography>
            Host Uptime: 98%
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>RFID Copier</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Embedded Systems Project with STM32</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Introducing the RFID Copier
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Ever envisioned effortlessly transferring data from one RFID card to another with a simple push of a button? The RFID Copier does just that, combining sleek design with innovative functionality to redefine RFID operations. If you are not familiar with RFID, it is what makes it possible to open doors with a key card at hotels, apartments, even cars, etc. Imagine the convenience of seamlessly copying RFID data, all controlled through an intuitive interface.
          </Typography>
          <br/>
          <Typography><strong>
          Unveiling the Setup
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          At the heart of our RFID Copier lies the STM32 microcontrollers, orchestrating a symphony of operations. One STM32 pairs with an RFID Tranceiver Module, facilitating data transfer through SPI communication protocol, while another connects to a 16x2 LCD screen and two buttons for user interaction. Both STM32 microcontrollers are connected to radio frequency modules, which communicate the signal sent from the button. The STM32 connected to the RFID Tranceiver is daisy chained with the radio frequency module, whereas the UI purposed STM32 is connected via traditional SPI. The two buttons trigger read OR write signals, seamlessly integrating user control into the system.          
          </Typography>
          <br/>
          <Typography><strong>
          A Glimpse into the Technical Arsenal
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          The RFID Copier was constructed with compatible, top-tier components carefully chosen for their performance, reliability, and extensive documentation. From the two STM32 Nucleo-L476RG microcontrollers to the MFRC522 RFID Tranceiver Module and the SX1261 Low Energy Radio Transceiver Module, every component plays a crucial role in delivering its functionality.          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>Goal</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Cross platform webapp</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Crafting a Multi-Platform Application
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Dive into the realm of sports exploration with our innovative application, designed to keep users informed about forthcoming sports events in their vicinity. Co-created with three other developers, while we studied abroad in the enchanting city of Rome, Italy. Our project harnesses the power of cutting-edge technologies like .NET Maui, C#, Azure, and MongoDB. Leveraging the versatility of .NET Maui, we meticulously crafted a user-friendly front-end interface that seamlessly adapts to the nuances of iOS, Android, MacOS, Windows, and even web browsers. Whether accessing the application on a smartphone, tablet, or desktop, users are greeted with a consistent and intuitive interface that informs the user about upcoming sports events in their area.
          </Typography>
          <br/>
          <Typography><strong>
          Building a Robust Back-End Infrastructure
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Behind the scenes, Azure services form the backbone of our application, providing the robust infrastructure needed to support its functionality. Azure API Management and Azure Functions seamlessly orchestrate database management, ensuring efficient communication between the front-end and back-end, as well as handling location services. Meanwhile, MongoDB serves as the trusted repository for data storage, offering scalability and reliability to handle the influx of event and user information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>Black & White Colorizer</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Colorize B&W photos and videos w/ ML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Unlocking the Magic of Colorization
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          With the black and white colorizer, I ventured into the realm of machine learning, employing ECCV-16 and SIGGRAPH-17 models to infuse monochrome videos with vibrant hues. While initially aiming to implement these models from scratch, I transitioned to utilizing the original ones due to encountered processing challenges compounded by the absence of a proper GPU.
          </Typography>
          <br/>
          <Typography className="prose prose-neutral dark:prose-invert">
          The colorizer meticulously analyzes each frame of black and white videos, ensuring similarity before blending vibrant colors. Through a sophisticated technique, colors from preceding frames seamlessly merge with those of the current frame. The result? Engagingly colorized videos that captivate audiences with their vividness and charm.          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>Function Generator</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Embedded Systems Debugging Tool</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Purpose
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Function generators serve as indispensable tools in the realm of electronics, allowing engineers and enthusiasts to create a wide range of electrical waveforms for various purposes. From testing circuits to calibrating equipment and exploring signal behavior, these devices play a crucial role in signal manipulation and analysis.          
          </Typography>
          <br/>
          <Typography><strong>
          Crafting Waves
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          At the heart of the Function Generator lies an STM32 MCU, orchestrating seamless communication with a DAC chip through a SPI communication protocol. This synergy allows digital signals to seamlessly transition into analog signals, unlocking a world of signal exploration. With a dynamic connection to a keypad, users can effortlessly adjust waveform variables in real-time, from duty cycle to frequency and waveform type. The result? A powerful tool that enables engineers and enthusiasts alike to sculpt waveforms with unmatched flexibility and precision on an oscilloscope.
          </Typography>
          <br/>
          <Typography><strong>
          Precision in Waveform Generation
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Experience precision in action as the Dynamic Function Generator achieves frequencies within 2.5 Hz of the desired frequency specified by the keypad. This remarkable feat underscores the project's commitment to precision and accuracy, ensuring that every waveform generated meets the highest standards of quality. Whether you're diving into electronics for the first time or seeking to expand your expertise, the Dynamic Function Generator offers a streamlined solution for signal manipulation, opening doors to new possibilities in the world of electronics. From square waves with variable duty cycles to sawtooth, triangle, and sine waves, explore a diverse array of waveform options with ease and confidence.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong> Calculator App
        </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Java Calculator with LRU Cache, Name Bindings and GUI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Upgrading a Previous Project
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          This project expands upon a previous prefix notation calculator TUI project I made by incorporating mutable variable names, support for prefix/infix/postfix notation, and a sleek, user-friendly interface styled with CSS, offering a versatile tool for mathematical expressions.          
          </Typography>
          <br/>

          <Typography><strong>
          Graphical User Interface (GUI)
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
            Experience a modern, intuitive interface with the integration of JavaFX, providing users with a visually appealing platform for mathematical computations. Featuring a grid of digit buttons, arithmetic operator buttons, and a dedicated text field for expression construction, the GUI offers a seamless user experience. Additionally, interactive components such as a history dropdown menu (Using an LRU Cache data structure), radio buttons for notation selection, and a dynamic environment display elevate usability and convenience.
            </Typography>

          <br/>
          <Typography><strong>
          Name Bindings (Variables)
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Incorporated a new dimension of functionality by enabling users to define variable names that map to values within mathematical expressions. Leveraging a hashmap, the calculator facilitates seamless substitution of variable values into expressions, empowering users to define and modify variables dynamically. With support for mutable variables, users gain flexibility in performing computations tailored to their needs.           
          </Typography>
          <br/>

          <Typography><strong>
          Prefix/Infix/Postfix Notation + Strategy Design Pattern
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
            Utilizing a Strategy design pattern, the calculator introduces support for prefix, infix, and postfix notation, allowing users to choose their preferred expression format. Employing a Parser interface with abstract parse methods, the calculator seamlessly switches between parsing strategies, ensuring compatibility with diverse user preferences. By embracing postfix notation, users can streamline expression composition and evaluation, enhancing overall usability and efficiency.
            </Typography>
            <br/>

            <Typography><strong>
            Design Considerations
            </strong></Typography>
            <Typography className="prose prose-neutral dark:prose-invert">
            I made sure to adhere to best practices in software design, prioritizing modularity, cohesion, and loose coupling within the codebase. I rigorously tested to ensure robustness and reliability, achieving comprehensive branch coverage. Embraced design patterns such as the Strategy and Observer patterns to facilitate flexible, scalable, and maintainable code architecture. Through meticulous attention to detail and adherence to software design principles, deliver a sophisticated calculator solution that meets the highest standards of quality and usability.
            </Typography>

        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong> A* Pathing Strategy
        </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Implementing A* Algorithm for Moving Entities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography><strong>
          Intro to the Environment
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Embark on a journey into the heart of the 2D mines, where miners tirelessly collect ores and traverse obstacle-filled terrain. In this project, we delve into the realm of a 2D Java based simulation to optimize the movement of miners as they navigate through dynamically changing environments. By implementing the A* pathfinding algorithm (a.k.a Dijkstra's Algorithm), we empower miners to efficiently collect ores spawning from rocks and safely return them to their homes, overcoming obstacles with ease and precision.          
          </Typography>
          <br/>
          <Typography><strong>
          A* Pathfinding in Action
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          As miners embark on their journey, they encounter various obstacles obstructing their path. Utilizing the A* pathfinding algorithm, miners analyze their surroundings and chart the most efficient route to their desired destination, whether it be to an ore spawning from a rock or their home base. By dynamically adjusting their trajectory based on the evolving landscape, miners optimize their movements and maximize ore collection efficiency.         
           </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
        <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong> Find CLI Tool
        </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Custom File Search Utility in C</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="prose prose-neutral dark:prose-invert">
          With my desire to learn about system programming, I decided to make the "findstuff" CLI tool, a specialized file search utility designed exclusively for Unix/Linux. With findstuff, users gain a powerful tool for swiftly locating files and conducting targeted text searches within directories and subdirectories, streamlining file management tasks with ease.          
          </Typography>
          <br/>
          <Typography><strong>
            Parallel Processing
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Findstuff operates by leveraging child processes to execute user-entered commands effectively. By forking child processes, findstuff ensures efficient search operations and provides prompt feedback on search results, whether files are found or not. Offering flexibility through customizable flags, such as "-s" for extending searches to subdirectories and "-f" for specifying file types, findstuff empowers users with versatile search capabilities.           
          </Typography>
          <br/>

          <Typography><strong>
            Find Functionality
          </strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">
          Users initiate searches by entering the "find" command followed by the desired search parameters. For example, typing "find 'text' -f:txt -s" prompts findstuff to search for the specified text within text files across all subfolders. Upon completion, findstuff displays relevant file paths along with the time taken for the search, providing valuable insights into search efficiency.
          </Typography>
          <br/>

          <Typography><strong>
            Other Functionality
        </strong></Typography>
        <Typography className="prose prose-neutral dark:prose-invert">

          Findstuff offers a range of commands to facilitate efficient process management and program control. The "list" command provides visibility into running child processes, displaying their serial numbers and associated tasks. Users can terminate specific child processes using the "kill [num]" command or exit the program entirely using "quit" or "q."
          </Typography>

        </AccordionDetails>
      </Accordion>

      

      {/* Other Accordion components */}
    </div>
  );
}
