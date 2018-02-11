import { connect } from 'react-redux';
import ListComponent from './component';

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
  return {};
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent);

export default connect()(List);