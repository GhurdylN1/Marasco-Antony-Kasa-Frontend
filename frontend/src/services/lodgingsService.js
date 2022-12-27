import Lodgings from '../data/logements.json'

const lodgingsService = {
  getAll: () => {
    return Lodgings
  },
  getById: (lodgingId) => {
    return Lodgings.filter((Lodgings) => Lodgings.id === lodgingId)
  },
}

export default lodgingsService
