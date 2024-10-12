import React, { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Container,
} from '@mui/material';

import QuestionForm from './QuestionForm';

const QuizBuilder = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleSubmitQuiz = () => {
    // Save to Firebase or MongoDB here
    console.log(questions);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Quiz Builder
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Create your custom quiz by adding questions in various formats.
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Add a Question
              </Typography>
              <QuestionForm addQuestion={addQuestion} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Your Questions
          </Typography>
          {questions.map((q, index) => (
            <Card key={index} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  {index + 1}. {q.question}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Type: {q.type}
                </Typography>
                {q.type === 'MCQ' && (
                  <Typography variant="body2">
                    Options: {q.options.join(', ')}
                  </Typography>
                )}
                <Typography variant="body2">Answer: {q.answer}</Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmitQuiz}
        >
          Save Quiz
        </Button>
      </Box>
    </Container>
  );
};

export default QuizBuilder;
