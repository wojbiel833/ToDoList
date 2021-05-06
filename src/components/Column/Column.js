import React from 'react';
import PropTypes from 'prop-types';

import styles from './Column.scss';
// import Card from './../Card/Card';
// import Creator from './../Creator/Creator';
import Icon from './../Icon/Icon';
// import { settings , listData  } from './../../data/dataStore';

class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // };

  static propTypes = {
    columnTitle: PropTypes.string,
  };

  // addCard(title) {
  //   this.setState(state => ({
  //     cards: [
  //       ...state.cards,
  //       {
  //         key: state.cards.length
  //           ? state.cards[state.cards.length - 1].key + 1
  //           : 0,
  //         title,
  //         icon: 'list-alt',
  //         cards: [],
  //       },
  //     ],
  //   }));
  // }

  render() {
    const { title, icon } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {/* <div>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div>
          <Creator
            text={settings.cardCreatorText}
            action={title => {
              this.addCard(title);
            }}
          />
        </div> */}
      </section>
    );
  }
}

Column.propTypes = {
  cards: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Column;
