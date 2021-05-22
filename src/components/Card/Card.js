import React from 'react';
import PropTypes from 'prop-types';

import { settings } from './../../data/dataStore';
import styles from './Card.scss';

class Card extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static defaultProps = {
    icon: settings.defaultCardIcon,
  };

  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={styles.component} text={this.props.cardCreatorText}>
        <h3>{title}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  cards: PropTypes.array,
  cardCreatorText: PropTypes.string,
};

export default Card;
