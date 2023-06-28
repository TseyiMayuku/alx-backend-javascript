export default function getFullResponseFromAPI(Success) {
  const arr = new Promise((resolve, reject) => {
    if (Success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return arr;
}
