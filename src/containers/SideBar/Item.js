import { connect } from 'react-redux';
import ItemComponent from 'Components/SideBar/Item';
import { setActiveSideBarItem } from './../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.sideBar === ownProps.link,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log(ownProps.link);
      dispatch(setActiveSideBarItem(ownProps.link));
    },
  };
}

const Item = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent);

export default Item;