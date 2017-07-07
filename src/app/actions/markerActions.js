export function addMarker(marker) {
  return {
    type: 'ADD_MARKER',
    payload: marker
  }
}

export function RemoveMarker(marker) {
  return {
    type: 'REMOVE_MARKER',
    payload: marker
  }
}
