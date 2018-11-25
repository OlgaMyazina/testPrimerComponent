import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { BorderBox, Box, Button, Flex } from '@primer/components';
import 'primer-box/index.scss';
import * as React from 'react';
import './TileBox.css';

interface ITileBoxProps {
  name: string;
}
/*
interface IButtonProps {
  open: string;
  toggle: string;
}*/

interface ITileBoxState {
  isOpen: boolean;
}

class TileBox extends React.Component<ITileBoxProps, ITileBoxState> {
  constructor(props: ITileBoxProps) {
    super(props);
    this.state = { isOpen: true };
    this.toggle = this.toggle.bind(this);
  }
  public isIconOpen(open: any) {
    return open ? ChevronUp : ChevronDown;
  }
  public toggle() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  }

  public render() {
    return (
      <React.Fragment>
        <BorderBox ml="3" mr="3">
          <Box is="div" width="100%">
            <div className="Box-header">
              <Flex justifyContent="space-between">
                <h3 className="Box-title">Box title</h3>
                <Button is="summary" onClick={this.toggle}>
                  <Octicon icon={this.state.isOpen ? ChevronUp : ChevronDown} />
                </Button>
              </Flex>
            </div>
          </Box>

          <Box is="div" width="100%">
            <div className={`Box-body${this.state.isOpen ? '' : '_isHidden'}`}>textTitle</div>
          </Box>
        </BorderBox>
      </React.Fragment>
    );
  }
}

export default TileBox;
