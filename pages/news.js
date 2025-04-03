import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { rgba } from 'polished';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';

const styles = theme => ({
  root: {},
  toolsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: [20, 0]
  },
  toolBlock: {
    margin: 15,
    padding: 20,
    width: 240,
    height: 180,
    border: `1px solid ${theme.color.secondary.main}`,
    backgroundColor: rgba(theme.color.secondary.dark, 0.1),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: rgba(theme.color.secondary.main, 0.15),
      transform: 'translateY(-5px)'
    }
  },
  availableBlock: {
    '&:hover': {
      boxShadow: `0 0 15px ${theme.color.secondary.main}`
    }
  },
  comingSoonBlock: {
    opacity: 0.6,
    cursor: 'default',
    '&:hover': {
      transform: 'none',
      backgroundColor: rgba(theme.color.secondary.dark, 0.1)
    }
  },
  blockTitle: {
    fontSize: 22,
    marginBottom: 10
  },
  blockStatus: {
    fontSize: 14,
    color: theme.color.tertiary.main
  }
});

class SelectTool extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>Select Your Tool</Text></h1>
          </header>
          
          <div className={classes.toolsContainer}>
            <Link href='/solana' className={cx(classes.toolBlock, classes.availableBlock)}>
              <Fader>
                <div className={classes.blockTitle}>
                  <Text>Solana</Text>
                </div>
                <div className={classes.blockStatus}>
                  <Text>Available Now</Text>
                </div>
              </Fader>
            </Link>
            
            <div className={cx(classes.toolBlock, classes.comingSoonBlock)}>
              <Fader>
                <div className={classes.blockTitle}>
                  <Text>BSC</Text>
                </div>
                <div className={classes.blockStatus}>
                  <Text>Coming Soon</Text>
                </div>
              </Fader>
            </div>
            
            <div className={cx(classes.toolBlock, classes.comingSoonBlock)}>
              <Fader>
                <div className={classes.blockTitle}>
                  <Text>BASE</Text>
                </div>
                <div className={classes.blockStatus}>
                  <Text>Coming Soon</Text>
                </div>
              </Fader>
            </div>
            
            <div className={cx(classes.toolBlock, classes.comingSoonBlock)}>
              <Fader>
                <div className={classes.blockTitle}>
                  <Text>ETH</Text>
                </div>
                <div className={classes.blockStatus}>
                  <Text>Coming Soon</Text>
                </div>
              </Fader>
            </div>
            
            <Link href='/custom' className={cx(classes.toolBlock, classes.availableBlock)}>
              <Fader>
                <div className={classes.blockTitle}>
                  <Text>Make Your Own Folder</Text>
                </div>
                <div className={classes.blockStatus}>
                  <Text>Available Now</Text>
                </div>
              </Fader>
            </Link>
          </div>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(SelectTool);