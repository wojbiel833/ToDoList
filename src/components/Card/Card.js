import React from 'react';
import PropTypes from 'prop-types';

import styles from './Card.scss';

class Card extends React.Component {
  state = {
    cards: this.props.cards || [],
  };

  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    return (
      <div className={styles.component} text={this.props.cardCreatorText}>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

Card.propTypes = {
  cards: PropTypes.array,
  cardCreatorText: PropTypes.string,
};

export default Card;
