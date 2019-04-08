import React, { useState, useEffect } from "react";

import { BtnNext } from "../NavBtnFullpage";

import logoImg from "../../../img/logoWord.svg";
import { Wrapper, LikeBreadcrumb, Box, Water, LogoWord, Arrow } from "./styled";
import TestPaper from "./paper";

const Hero = props => {
  const [play, setPlay] = useState(false);
  const [isPaper, setIsPaper] = useState(false);

  let canvasRef = null;


  useEffect(() => {
    setPlay(true);

    if (canvasRef !== null && !isPaper) {
      setIsPaper(true);
      TestPaper(canvasRef)
      // setTimeout(() => TestPaper(canvasRef), 2000)
    }
  });

  const moveSectionDown = props.fullpage
    ? props.fullpage.moveSectionDown
    : null;

  return (
    <Wrapper className="section">
      <LikeBreadcrumb>ФИТНЕС клуб премиум Класса</LikeBreadcrumb>
      <Box pose={play ? "visible" : "hidden"}>
        <Water>
          <canvas ref={ref => canvasRef = ref} id="heroCanvas" width="600" height="280"></canvas>
        </Water>
        <LogoWord>
          <img src={logoImg} alt="River Club" />
        </LogoWord>
      </Box>
      <Arrow initialPose="none" pose="size" />
      <BtnNext name={props.nextBlockName} toDown={moveSectionDown} />
    </Wrapper>
  );
};

export default Hero;
