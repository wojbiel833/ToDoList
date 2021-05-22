import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import styles from './App.scss';
import List from './../List/ListContainer';
import Creator from './../Creator/Creator';
import { settings, pageContents, listData } from '../../data/dataStore';

export class App extends React.Component {
  state = {
    lists: this.props.lists || [],
    isOpen: false,
  };

  toggleIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  addList(title) {
    this.setState(state => ({
      lists: [
        ...state.lists,
        {
          key: shortid.generate(),
          title,
          icon: 'list-alt',
          columns: [],
        },
      ],
    }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          <div className={styles.container}>
            <button className={styles.button} onClick={this.toggleIsOpen}>
              {<i className="fas fa-bars"></i>}
            </button>
          </div>
          <div className={styles.lists + (!isOpen ? ' ' + styles.hidden : '')}>
            <List {...listData} />
            <div className={styles.columns}>
              {this.state.lists.map(({ ...listProps }) => (
                <List key={shortid.generate()} {...listProps} />
              ))}
            </div>
            <Creator
              text={settings.listCreatorText}
              action={title => {
                this.addList(title);
              }}
            />
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  lists: PropTypes.array,
};

export default App;
