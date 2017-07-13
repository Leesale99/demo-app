import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as filterActions from '../actions/filterActions';
import FilterDropdown from '../components/FilterDropdown';


const mapStateToProps = (state, ownProps) => {
  return {
    activeFilters: state.activeFilters,
    filterName: ownProps.filterName
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(filterActions, dispatch)
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterDropdown);

export default FilterContainer;
