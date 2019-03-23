export default (dispatchFun) => {
  return {
      add: data => {
        dispatchFun({
          TYPE: 'add',
          DATA: data
        })
      }
  }
}