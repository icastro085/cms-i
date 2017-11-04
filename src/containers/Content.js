import { connect } from 'react-redux';
import ContentComponent from 'Components/Content';
import { search } from 'actions/content';

const mapStateToProps = (state, ownProps) => {
  const { items } = state.content;
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
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