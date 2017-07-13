import React from 'react';
import PropTypes from 'prop-types';

export default class FilterDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bedrooms: 'Any'
    }
  }

  handleFilter = (e) => {
    const value = e.target.value;
    const {filterName} = this.props;
    let isActive;
    this.setState({bedrooms: value});

    this.props.activeFilters.map((filter, i) => {
      if (filter.name == filterName) {
        isActive = true;
        if (value == 'ANY') {
          isActive = false;
          this.props.removeFilter(i);
        } else {
          this.props.updateFilter(filter.name, value, i);
        }
      }
    });

    if (isActive != true && value != 'ANY') {
      this.props.addFilter(filterName, value);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault;
  }

  render() {

    return (
          <div className="form-group">
            <label htmlFor={this.props.id}>{this.props.label}</label>
            <select id={this.props.id} className="form-control" value={this.state.bedrooms} onSubmit={this.handleSubmit} onChange={this.handleFilter}>
              {
                this.props.options.map((option, i) => {
                  return <option key={i} value={option.toUpperCase()}>{option}</option>
                })
              }
            </select>
          </div>
          /*

          <div className="form-group">
            <label htmlFor="filterMinPrice">Min Price</label>
            <select id="filterMinPrice" className="form-control">
              <option>$2,000,000</option>
              <option>$4,000,000</option>
              <option>$6,000,000</option>
              <option>$8,000,000</option>
              <option>$10,000,000</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filterMaxPrice">Max Price</label>
            <select id="filterMaxPrice" className="form-control">
              <option>$4,000,000</option>
              <option>$6,000,000</option>
              <option>$8,000,000</option>
              <option>$10,000,000</option>
              <option>$20,000,000</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="filterOrderBy">Order By</label>
            <select id="filterOrderBy" className="form-control">
              <option>Default</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div> */
    );
  }
}

FilterDropdown.propTypes = {
  activeFilters: PropTypes.array.isRequired,
  filterName: PropTypes.string.isRequired,
  addFilter: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
