import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from 'hamburger-react';

import styles from './App.scss';
import List from './../List/List';
import Creator from './../Creator/Creator';
import {
  settings,
  pageContents,
  listData,
  newListData,
} from '../../data/dataStore';

export class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  };

  addList(title) {
    this.setState(state => ({
      lists: [
        ...state.lists,
        {
          key: state.lists.length
            ? state.lists[state.lists.length - 1].key + 1
            : 0,
          title,
          icon: 'list-alt',
          cards: [],
        },
      ],
    }));
  }

  render() {
    // const [isOpen, setOpen] = useState(false);
    return (
      <div>
        <main className={styles.component}>
          <h1 className={styles.title}>{pageContents.title}</h1>
          <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
          {/* <Hamburger toggled={isOpen} toggle={setOpen} />; */}
          <Hamburger
            className={styles.hamburger}
            onToggle={toggled => {
              const lists = document.querySelector('.List_component_3J2m8');
              console.log(lists);
              if (toggled) {
                // open a menu
                lists.classList.remove('hidden');
                console.log('show');
              } else {
                // close a menu
                lists.classList.add('hidden');
                console.log('hide');
              }
            }}
          />
          <div
            // id="lists"
            className={styles.lists}
          >
            <List {...listData} />
            <div className={styles.columns}>
              {this.state.lists.map(({ key, ...listProps }) => (
                <List {...newListData} key={key} {...listProps} />
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
