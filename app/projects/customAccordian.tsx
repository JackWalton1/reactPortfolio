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
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="font-medium text-xl mb-1 tracking-tighter" sx={{ width: '30%', flexShrink: 0 }}>
          <strong>RFID Copier</strong></Typography>
          <Typography className="prose prose-neutral dark:prose-invert">Embedded Systems with STM32</Typography>
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
          The RFID Copier boasts a lineup of top-tier components meticulously chosen for their performance and reliability. From the STM32 Nucleo-L476RG to the MFRC522 RFID Tranceiver Module and the SX1261 Low Energy Radio Transceiver Module, every component plays a crucial role in delivering unparalleled functionality.          
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
      {/* Other Accordion components */}
    </div>
  );
}
