import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './List.scss';
import Hero from './../Hero/Hero';
import Column from './../Column/ColumnContainer';
import Creator from './../Creator/Creator';
import { listData, settings } from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };

  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    columnTitle: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    cards: PropTypes.array,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
    image: listData.defaultImg,
  };

  render() {
    const { title, image, description, addColumn } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imgSrc={image} />
        <div className={styles.description}>{ReactHtmlParser(description)}</div>
        <div className={styles.columns}>
          {this.state.columns.map(({ id, ...columnProps }) => (
            <Column key={id} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
