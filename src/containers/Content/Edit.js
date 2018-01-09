import { connect } from 'react-redux';
import EditComponent from './../../components/Content/Edit';
import {
  search,
  create,
} from './../../actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading, data } = state.content;
  const { match, type } = ownProps;
  return {
    isLoading: isLoading,
    match,
    type,
    data: data || ownProps.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;
  return {
    search: (params = {}, query = {}) => {
      dispatch(search(params, query));
    },
    create: data => dispatch(create(type, data))
  };
}

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComponent);

export default connect()(Edit);