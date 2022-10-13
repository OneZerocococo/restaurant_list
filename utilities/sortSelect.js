function sortSelect(sortIndex) {
  const sortOptionsBoolean = findSelectedSort(sortIndex)
  switch (sortIndex) {
    case 'a-to-z':
      return [{ name: 'asc' }, sortOptionsBoolean];
    case 'z-to-a':
      return [{ name: 'desc' }, sortOptionsBoolean];
    case 'category':
      return [{ category: 'asc' }, sortOptionsBoolean];
    case 'location':
      return [{ location: 'asc' }, sortOptionsBoolean];
  }
}

function findSelectedSort(sortIndex) {
  const sortCollection = {
    isNameAsc: false,
    isNameDesc: false,
    isCategory: false,
    isLocation: false,
  }
  if (sortIndex === 'a-to-z') {
    sortCollection.isNameAsc = true
  } else if (sortIndex === 'z-to-a') {
    sortCollection.isNameDesc = true
  } else if (sortIndex === 'category') {
    sortCollection.isCategory = true
  } else if (sortIndex === 'location') {
    sortCollection.isLocation = true
  }
  return sortCollection
}

module.exports = sortSelect