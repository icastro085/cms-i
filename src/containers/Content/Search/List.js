import { connect } from 'react-redux';
import ListComponent from './../../../components/Content/Search/List';

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

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default connect()(List);