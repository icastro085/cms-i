import { connect } from 'react-redux';
import ItemComponent from './component';
import { setActiveSideBarItem } from '../../../actions/sideBar';

const mapStateToProps = (state, ownProps) => (
  {
    active: state.sideBar === ownProps.link,
  }
);

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onClick: () => {
      dispatch(setActiveSideBarItem(ownProps.link));
    },
  }
);

const Item = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent);

export default Item;
