import React from 'react';
import PropTypes from 'prop-types';

import styles from './Column.scss';
import Card from './../Card/Card';
import Creator from './../Creator/Creator';
import Icon from './../Icon/Icon';
import { settings } from './../../data/dataStore';
// , listData
class Column extends React.Component {
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(({ id, ...cardProps }) => (
            <Card key={id} {...cardProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};

export default Column;
