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
        mediaUrl: imageUrlExample,
        answers: [
          {
            id: 1,
            text: 'Jordan',
            isCorrect: true,
            questionId: 1
          },
          {
            id: 2,
            text: 'Cedric',
            isCorrect: false,
            questionId: 1
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Mon deuxième quiz',
    description: 'Un quiz un peu plus difficile',
    questions: [
      {
        id: 2,
        question: 'Quel est le nom du framework qui permet de créer des applications web avec React ?',
        timeToAnswer: 70,
        answers: [
          {
            id: 22,
            text: 'React',
            isCorrect: false,
            questionId: 2
          },
          {
            id: 23,
            text: 'Next.js',
            isCorrect: true,
            questionId: 2
          },
          {
            id: 24,
            text: 'Angular',
            isCorrect: false,
            questionId: 2
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
            id: 31,
            text: 'render',
            isCorrect: false,
            questionId: 3
          },
          {
            id: 32,
            text: 'useState',
            isCorrect: true,
            questionId: 3
          },
        ],
      },
      {
        id: 4,
        question: 'A quel siècle a été inventé React ?',
        answers: [
          {
            id: 41,
            text: 'XIVe siècle',
            isCorrect: false,
            questionId: 4
          },
          {
            id: 42,
            text: 'XXIe siècle',
            isCorrect: true,
            questionId: 4
          },
        ],
      }
    ],
  },
];
