import React from 'react';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
// Styled Components
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';
import { createStage } from '../gameHelper';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text={`Score: 0`} />
            <Display text={`Row: 0`} />
            <Display text={`Level: 0`} />
          </div>

          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
