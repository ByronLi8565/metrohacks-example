import fetch from 'node-fetch'

const request = async(data, url) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  return fetch(url, requestOptions)
    .then(async (response) => {
      const response_ser = await response.json()
      return response_ser
    })
    .catch((error) => {
      return console.log(error.message)
    })
}

var data = {
  key: 'value1',
  int_key: 1,
  float_key: 1.1,
  bool_key: true,
  array_key: [1, 2, 3],
  object_key: {
    key: 'value',
  },
}

var response = await request(data, 'https://asrx.ngrok.io/data')
console.log(response)