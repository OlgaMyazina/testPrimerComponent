import { BorderBox } from '@primer/components';
import * as React from 'react';
import './TileBox.css';

interface ITileBoxProps {
  name: string;
}

const TileBox: React.SFC<ITileBoxProps> = props => {
  return (
    <React.Fragment>
      <BorderBox ml="3" mr="3">
        <div className="Box-header">
          <div className="Box-title">Box title</div>
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
    </React.Fragment>
  );
};
export default TileBox;
