import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const Header = () => {

  return (
    <header>
      <form className="form-inline">
        <FilterContainer
          filterName="FILTER_BY_BEDROOMS"
          id="filterBedrooms"
          label="Bedrooms"
          options={['Any', '1', '2', '3']}
        />
        <FilterContainer
          filterName="FILTER_BY_BATHROOMS"
          id="filterBathrooms"
          label="Bathrooms"
          options={['Any', '1', '2', '3']}
        />
        <FilterContainer
          filterName="FILTER_BY_CAR_SPACES"
          id="filterCarSpaces"
          label="Car Spaces"
          options={['Any', '1', '2', '3']}
        />
        <FilterContainer
          filterName="FILTER_BY_MIN_PRICE"
          id="filterMinPrice"
          label="Min Price"
          options={['Any', '$2,000,000', '$4,000,000', '$6,000,000', '$8,000,000', '$10,000,000']}
        />
        <FilterContainer
          filterName="FILTER_BY_MAX_PRICE"
          id="filterMaxPrice"
          label="Max Price"
          options={['Any', '$4,000,000', '$6,000,000', '$8,000,000', '$10,000,000', '$20,000,000',]}
        />
        <FilterContainer
          filterName="ORDER_BY"
          id="filterOrderBy"
          label="Order By"
          options={['Default', 'Price: High to Low', 'Price: Low to High']}
        />

      </form>
    </header>
  );

}

export default Header;
