import { connect } from 'react-redux';

import Card from './Card';
import {
  getCardsForColumns,
  createActionAddCard,
} from './../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title =>
    dispatch(
      createActionAddCard({
        columnId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
