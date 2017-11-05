import { connect } from 'react-redux';
import SearchComponent from 'Components/Content/Search';
import { search } from 'actions/content';

const mapStateToProps = (state, ownProps) => {
  const { items, isLoading } = state.content;
  return {
    isLoading: isLoading,
    items,
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