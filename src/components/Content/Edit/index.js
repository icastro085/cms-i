import { connect } from 'react-redux';
import EditComponent from './component';
import {
  search,
  create,
  update,
} from './../../../actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading, data } = state.content;
  const { type, match } = ownProps;
  return {
    type,
    isLoading,
    match,
    data: data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type } = ownProps;
  return {
    search: (params = {}, query = {}) => {
      dispatch(search(params, query));
    },
    create: data => dispatch(create(type, data)),
    update: data => dispatch(update(type, data))
  };
}

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComponent);

export default connect()(Edit);