export function getAdminList() {
  // TODO Add axios get call here. console.log(return data to tune the data path.
  return Promise.resolve({
    data: [
      {
        name: 'Admin 1',
        mobile: '1234567890',
      },
      {
        name: 'Admin 2',
        mobile: '9234567890',
      }
    ]
  })
}

export default {
  getAdminList,
}