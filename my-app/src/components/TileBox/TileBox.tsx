import { BorderBox, Box } from '@primer/components';
import 'primer-box/index.scss';
import * as React from 'react';
import './TileBox.css';

interface ITileBoxProps {
  name: string;
}

const TileBox: React.SFC<ITileBoxProps> = props => {
  return (
    <React.Fragment>
      <Box className="Box">
        <BorderBox ml="3" mr="3">
          <div className="Box-header">
            <h3 className="Box-title">Box title</h3>
          </div>
          <p>Text in p inner Box</p>
          <div className="Box-title">textTitle</div>
        </BorderBox>
        <BorderBox ml="3" mr="3">
          <div className="Box-row--gray">
            <h3 className="Box-title">Box title</h3>
          </div>
          <p>Text in p inner Box</p>
          <div className="Box-title">textTitle</div>
        </BorderBox>
      </Box>
    </React.Fragment>
  );
};
export default TileBox;
