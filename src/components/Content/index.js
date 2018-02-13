import { connect } from 'react-redux';

import ContentComponent from './component';
import { search } from './../../actions/content';

const mapStateToProps = (state, ownProps) => {
  const { items, isLoading } = state.content;
  const { type } = ownProps;
  return {
    items,
    isLoading,
    type,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type, isEdit } = ownProps;

  if (!isEdit) {
    dispatch(search({ type }));
  }

  return {
    search: (params = {}, query = {}) => {
      dispatch(search(params, query));
    },
  };
}

const Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentComponent);

export default Content;