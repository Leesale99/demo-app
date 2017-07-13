const getFilteredPropertes = (properties, filters) => {

  filters.map((filter) => {
    switch (filter.name) {
      case 'FILTER_BY_BEDROOMS':
        return properties = properties.filter((property) => property.bedrooms >= filter.quantity);
      case 'FILTER_BY_BATHROOMS':
        return properties = properties.filter((property) => property.bathrooms >= filter.quantity);
      case 'FILTER_BY_CAR_SPACES':
        return properties = properties.filter((property) => property.car_spaces >= filter.quantity);
      case 'FILTER_BY_MIN_PRICE':
        return properties = properties.filter((property) => (parseFloat(property.price.substr(1)) >= parseFloat(filter.quantity.substr(1))));
      case 'FILTER_BY_MAX_PRICE':
        return properties = properties.filter((property) => (parseFloat(property.price.substr(1)) <= parseFloat(filter.quantity.substr(1))));
        case 'ORDER_BY':
          return properties = properties.sort((property) => (parseFloat(property.price.substr(1)) <= parseFloat(filter.quantity.substr(1))));
      default:
        return properties;
    }
  })

  return properties;
}

export default getFilteredPropertes;
