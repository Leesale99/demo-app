// import React from 'react';
// import PropTypes from 'prop-types';
//
// export default class Filters extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       bedrooms: 'Any'
//     }
//   }
//
//   handleFilter = (e) => {
//     const value = e.target.value;
//     const {filterName} = this.props.filterName;
//     let isActive;
//
//     this.setState({bedrooms: value});
//
//     this.props.activeFilters.map((filter, i) => {
//       if (filter.name == filterName) {
//         isActive = true;
//         if (value == 'ANY') {
//           isActive = false;
//           this.props.removeFilter(i);
//         }
//         this.props.updateFilter(filter.name, value, i);
//       }
//     });
//
//     if (isActive != true && value != 'ANY') {
//       this.props.addFilter(filterName, value);
//     }
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault;
//   }
//
//   render() {
//
//     return (
//       <header>
//         <form className="form-inline">
//           <div className="form-group">
//             <label htmlFor="filterBedrooms">Bedrooms</label>
//             <select id="filterBedrooms" className="form-control" value={this.state.bedrooms} onSubmit={this.handleSubmit} onChange={this.handleFilter} filterName="FILTER_BY_BEDROOMS">
//               <option value="ANY">Any</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//             </select>
//           </div>
//           {/* <div className="form-group">
//             <label htmlFor="filterBathrooms">Bathrooms</label>
//             <select id="filterBathrooms" className="form-control">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="filterCarSpaces">Car Spaces</label>
//             <select id="filterCarSpaces" className="form-control">
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="filterMinPrice">Min Price</label>
//             <select id="filterMinPrice" className="form-control">
//               <option>$2,000,000</option>
//               <option>$4,000,000</option>
//               <option>$6,000,000</option>
//               <option>$8,000,000</option>
//               <option>$10,000,000</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="filterMaxPrice">Max Price</label>
//             <select id="filterMaxPrice" className="form-control">
//               <option>$4,000,000</option>
//               <option>$6,000,000</option>
//               <option>$8,000,000</option>
//               <option>$10,000,000</option>
//               <option>$20,000,000</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="filterOrderBy">Order By</label>
//             <select id="filterOrderBy" className="form-control">
//               <option>Default</option>
//               <option>Price: High to Low</option>
//               <option>Price: Low to High</option>
//             </select>
//           </div> */}
//         </form>
//       </header>
//     );
//   }
// }
//
// Filters.propTypes = {
//   activeFilters: PropTypes.array.isRequired,
//   addFilter: PropTypes.func.isRequired,
//   updateFilter: PropTypes.func.isRequired,
//   removeFilter: PropTypes.func.isRequired
// }
