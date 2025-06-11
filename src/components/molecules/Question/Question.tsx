import React from "react";
import Image  from '../../atoms/Image';
import Container from "../../atoms/Container";
import Typography from "../../atoms/Typography";

type QuestionProps = {
  question: string;
  mediaUrl?: string;
  timeLeft?: number;
};

const Question: React.FC<QuestionProps> = ({
  question,
  mediaUrl,
  timeLeft,
}) => {
  console.log(mediaUrl);
  return (
    <Container.Base
      gap="1rem"
    >
      {mediaUrl && (
        <Image.Base
          src={mediaUrl}
          width="380px"
          height="250px"
          rounded
        />
      )}

      <Container.Base direction="column" gap="1rem">
        <Typography.Title size="lg" bold>{question}</Typography.Title>

        {timeLeft !== undefined && (
          <Typography.Paragraph size="md">
            Temps restant : {timeLeft}s
          </Typography.Paragraph>
        )}
      </Container.Base>
    </Container.Base>
  );
};

export default Question;