import { connect } from 'react-redux';
import EditComponent from 'Components/Content/Edit';
import { search } from 'actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading, item } = state.content;
  return {
    isLoading: isLoading,
    item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (params = {}, query = {}) => {
      dispatch(search(params, query));
    },
  };
}

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComponent);

export default connect()(Edit);