import { observable } from 'mobx'

const store = observable({
  addPlateModalOpen: false,
  plates: [],
  plateId: 0,
  washPlateModalOpen: false
})

export default store
