/**
EasyHTTP Library
Library for making HTTP requests
@version 2.0.0
@author Chastity Lawson

**/

class EasyHTTP{
  //Make an HTTP GET Requst
  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url)
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });
  // }

  // Make an HTTP GET Request using async
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }


// Make an HTTP POST Request
  // post(url, data) {
  //     return new Promise((resolve, reject) => {
  //       fetch(url, {
  //         method: 'POST',
  //         headers: {
  //           'Content-type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //       })
  //       .then(res => res.json())
  //       .then(data => resolve(data))
  //       .catch(err => reject(err));
  //     });

  //   }

  // Make an HTTP POST Request with async
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

// Make an HTTP PUT request
  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     })
  //     .then(res => res.json())
  //     .then(data => resolve(data))
  //     .catch(err => reject(err));
  //   });
  // }

// Make an HTTP PUT request with async
  async put(url, data){
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }


  // Make an HTTP DELETE Request
  // delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': 'application/json'
  //       },
  //     })
  //     .then(res => res.json())
  //     .then(() => resolve('Resource Deleted'))
  //     .catch(err => reject(err));
  //   });

  // }

  // Make an HTTP DELETE Request with async
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    });

    const resData = await "Resource Deleted . . .";
    return resData;

  }


}


