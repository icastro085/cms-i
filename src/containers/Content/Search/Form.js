import { connect } from 'react-redux';
import FormComponent from './../../../components/Content/Search/Form';
import { search } from 'actions/content';

const mapStateToProps = (state, ownProps) => {
  const { isLoading } = state.content;
  return {
    isLoading: isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (params = {}, query = {}) => {
      dispatch(search(params, query));
    },
  };
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);

export default connect()(Form);