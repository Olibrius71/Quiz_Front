import QuizModel from "./QuizModel.ts";

export const imageUrlExample = "https://www.enia.fr/projects/diapos/Cr%C3%A9dit_enia-architectes_web_668e778a6cac2.jpeg";

export const quizListExample: QuizModel[] = [
  {
    id: 1,
    title: 'Mon premier quiz',
    description: 'Un quiz simple pour commencer',
    questions: [
      {
        id: 1,
        question: 'Quel est le prénom du créateur de react ?',
        answers: [
          {
            text: 'Jordan',
            isCorrect: true,
          },
          {
            text: 'Cedric',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Mon deuxi me quiz',
    description: 'Un quiz un peu plus difficile',
    questions: [
      {
        id: 2,
        question: 'Quel est le nom du framework qui permet de créer des applications web avec React ?',
        timeToAnswer: 70,
        answers: [
          {
            text: 'React',
            isCorrect: false,
          },
          {
            text: 'Next.js',
            isCorrect: true,
          },
          {
            text: 'Angular',
            isCorrect: false,
          }
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Mon troisième quiz',
    description: 'Un quiz plus difficile encore !',
    questions: [
      {
        id: 3,
        question: 'Quel est le nom de la méthode qui permet de mettre jour l état d un composant ?',
        answers: [
          {
            text: 'render',
            isCorrect: false,
          },
          {
            text: 'useState',
            isCorrect: true,
          },
        ],
      },
    ],
  },
];
