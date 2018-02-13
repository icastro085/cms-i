import { connect } from 'react-redux';
import ItemComponent from './component';

import {
  edit,
  remove,
} from './../../../../../actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading } = state;
  const { item } = ownProps;
  return {
    item,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type, item } = ownProps;
  return {
    edit: history => (
      history.push(`/${type}/${item.id}`)
    ),
    remove: id => (
      dispatch(remove(id))
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent);