import { action, observable } from 'mobx'

let store = null

class Store {
  @observable addPlateModalOpen = false
  @observable plates = []
  @observable plateId = 0
  @observable washPlateModalOpen = false

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate
  }
}

export function initStore (isServer, lastUpdate = Date.now()) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, lastUpdate)
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate)
    }
    return store
  }
}
