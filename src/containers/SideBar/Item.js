import { connect } from 'react-redux';
import ItemComponent from 'Components/SideBar/Item';
import { setActiveSideBarItem } from 'actions/sideBar/item';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.sideBar === ownProps.link,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setActiveSideBarItem(ownProps.link));
    },
  };
}

const Item = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent);

export default Item;