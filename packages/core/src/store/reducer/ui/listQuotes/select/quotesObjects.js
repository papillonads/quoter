export function selectQuotesObjects({ quotesObjects, changedObjects }) {
  return (
    quotesObjects?.map((object) => ({
      ...object,
      isSelected: (() => {
        const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
        return isChangedObject ? isChangedObject.isSelected : object.isSelected
      })(),
    })) ?? null
  )
}
