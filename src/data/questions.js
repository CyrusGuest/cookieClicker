const questions = [
  {
    topic: "DERIVATIVES",
    subtopic: "Definition",
    question: "What is the derivative of f(x) = x^2 at x = 3?",
    answer: "6",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Definition",
    question: "What is the derivative of f(x) = 3x at any point x?",
    answer: "3",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Deriving Functions",
    question: "Find the derivative of f(x) = 3x^2 + 2x + 1.",
    answer: "f'(x) = 6x + 2.",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Deriving Functions",
    question: "Find the derivative of f(x) = e^x.",
    answer: "f'(x) = e^x.",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Deriving Functions",
    question: "Find the derivative of f(x) = sin(x).",
    answer: "f'(x) = cos(x).",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Implicit Differentiation",
    question: "Find dy/dx if x^2 + y^2 = 1.",
    answer: "dy/dx = -x/y",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Implicit Differentiation",
    question: "Find dy/dx if sin(xy) = 1.",
    answer: "dy/dx = -y * cos(xy) / x * cos(xy)",
  },
  {
    topic: "DERIVATIVES",
    subtopic: "Implicit Differentiation",
    question: "Find dy/dx if e^(xy) = x + y.",
    answer: "dy/dx = (e^(xy) * y - 1) / (1 - e^(xy) * x)",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at a Value",
    question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?",
    answer: "2",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at Infinity",
    question: "What is the limit of 1/x as x approaches infinity?",
    answer: "0",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at a Value",
    question: "What is the limit of (x^2 - 4)/(x - 2) as x approaches 2?",
    answer: "4",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at a Value",
    question: "What is the limit of sin(x)/x as x approaches 0?",
    answer: "1",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at a Value",
    question: "What is the limit of (1 - cos(x))/x as x approaches 0?",
    answer: "0",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at Infinity",
    question: "What is the limit of 1/x as x approaches -infinity?",
    answer: "0",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at Infinity",
    question:
      "What is the limit of (2x^2 + 3)/(x^2 - 1) as x approaches infinity?",
    answer: "2",
  },
  {
    topic: "LIMITS",
    subtopic: "Limits at Infinity",
    question:
      "What is the limit of (3x^3 - x)/(2x^3 + 5x^2) as x approaches infinity?",
    answer: "3/2",
  },
  {
    topic: "APPLICATIONS",
    subtopic: "Equations of Tangent Lines",
    question:
      "Find the equation of the tangent line to the curve y = x^2 at x = 1.",
    answer: "y = 2x - 1",
  },
  {
    topic: "APPLICATIONS",
    subtopic: "Equations of Tangent Lines",
    question:
      "Find the equation of the tangent line to the curve y = e^x at x = 0.",
    answer: "y = x + 1",
  },
  {
    topic: "APPLICATIONS",
    subtopic: "Critical Points",
    question: "Find the critical points of f(x) = x^3 - 3x^2 + 2.",
    answer: "x = 1, x = 2",
  },
  {
    topic: "APPLICATIONS",
    subtopic: "Points of Inflection",
    question: "Find the points of inflection for f(x) = x^4 - 4x^3 + 6x^2.",
    answer: "x = 1, x = 2",
  },
  {
    topic: "INTEGRALS",
    subtopic: "Areas as Accumulation of Change",
    question: "What is the definite integral of f(x) = 3 from x = 1 to x = 4?",
    answer: "9",
  },
  {
    topic: "INTEGRALS",
    subtopic: "Areas as Accumulation of Change",
    question: "What is the definite integral of f(x) = 2x from x = 0 to x = 3?",
    answer: "9",
  },
  {
    topic: "INTEGRALS",
    subtopic: "Areas as Accumulation of Change",
    question:
      "What is the definite integral of f(x) = x^2 from x = 1 to x = 2?",
    answer: "7/3",
  },
];

export default questions;
