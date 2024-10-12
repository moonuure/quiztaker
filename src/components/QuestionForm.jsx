import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
} from "@mui/material";

const QuestionForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState("");
  const [type, setType] = useState("MCQ");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question) return;

    const newQuestion = {
      question,
      type,
      options: type === "MCQ" ? options : null,
      answer,
    };
    addQuestion(newQuestion);
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Question"
            variant="outlined"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
              <MenuItem value="MCQ">Multiple Choice</MenuItem>
              <MenuItem value="TF">True/False</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {type === "MCQ" && (
          <Grid item xs={12}>
            <Box>
              {options.map((option, index) => (
                <TextField
                  key={index}
                  fullWidth
                  label={`Option ${index + 1}`}
                  variant="outlined"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  required
                  sx={{ marginBottom: 2 }}
                />
              ))}
            </Box>
          </Grid>
        )}

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Answer"
            variant="outlined"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", marginTop: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Add Question
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default QuestionForm;
