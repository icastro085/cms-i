import { connect } from 'react-redux';
import SearchComponent from './component';

const mapStateToProps = (state, ownProps) => {
  const { items, isLoading } = state.content;
  return {
    items,
    isLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export default connect()(Search);