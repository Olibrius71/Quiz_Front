import styled from "styled-components";
import {useState} from "react";


const FadeInStyledCompAnimated = styled.div`
  animation: 1s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const FadeInStyledComp = () => {
  const [state, setState] = useState(false);

  return (
    <div
      onClick={() => setState(!state)}
    >

        <FadeInStyledCompAnimated>
          <p>AZERTY</p>
        </FadeInStyledCompAnimated>
    </div>
  )
}

export default FadeInStyledComp;