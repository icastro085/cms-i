import { connect } from 'react-redux';
import ItemComponent from './component';

import {
  edit,
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
    edit: (history) => {
      history.push(`/${type}/${item.id}`);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent);