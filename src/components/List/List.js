import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './List.scss';
import Hero from './../Hero/Hero';
import Column from './../Column/Column';
import Creator from './../Creator/Creator';
import { listData, settings } from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };

  static propTypes = {
    title: PropTypes.node,
    src: PropTypes.string,
    columnTitle: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    cards: PropTypes.array,
    image: PropTypes.string,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
    src: listData.defaultImg,
  };

  addColumn(title) {
    this.setState(state => ({
      columns: [
        ...state.columns,
        {
          key: state.columns.length
            ? state.columns[state.columns.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgSrc={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => {
              this.addColumn(title);
            }}
          />
        </div>
      </section>
    );
  }
}

export default List;
