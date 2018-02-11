import { connect } from 'react-redux';
import EditComponent from './component';
import {
  search,
  create,
  update,
  find,
} from './../../../actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading } = state.content;
  const { type, match } = ownProps;
  const { id } = match.params;
  
  return {
    type,
    isLoading,
    id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { type, id } = ownProps;

  return {
    search: id => dispatch(find(type, id)),
    create: data => dispatch(create(type, data)),
    update: data => dispatch(update(type, data))
  };
}

const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComponent);

export default connect()(Edit);