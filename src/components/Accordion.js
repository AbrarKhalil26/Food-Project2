import React, { useState } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AddIcon from "@mui/icons-material/Add";
import { dataAccordion } from "../data/data";


const BasicAccordion = () => {
  const [expanded, setExpanded] = useState([]);

  const handleAccordionChange = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };


  const questions = dataAccordion.map((question, index) => (
    <Stack>
      <Accordion
        expanded={expanded[index]}
        onChange={() => handleAccordionChange(index)}
        sx={{ boxShadow: 'none'}} key={index} ml={-2}
      >
        <AccordionSummary
          expandIcon={expanded[index] ? <MinimizeIcon /> : <AddIcon />}
          aria-controls={`panel${index + 1}-content`}
          id={`panel${index + 1}-header`}
          sx={{ borderBottom: '0'}}
        >
          <Typography variant="subtitle1" fontWeight="600">
            {question.title}
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails sx={{ ml: "20px", pt: "0" }}>
          {question.links.map((link, Index) => (
            <p
              key={Index}
              style={{
                paddingBottom: "10px",
                fontWeight: "500",
                cursor: 'pointer',
              }}
            >
              {link}
            </p>
          ))}
        </AccordionDetails>
      </Accordion>
    </Stack>
  ));

  return (
    <Stack style={{ textAlign: "start", position: 'sticky', top: '120px' }}>
      <Typography variant="h5" mt={2} mb={2} fontWeight={700}>
        Recipes
      </Typography>
      {questions}
    </Stack>
  );
};

export default BasicAccordion;
