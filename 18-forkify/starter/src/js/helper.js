import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

//-> Data to insert snippet
/*
 * Paneer Chilli
 * https://github.com/orangeX6/
 * https://media.istockphoto.com/photos/chilli-paneer-indian-snack-food-picture-id1311491582
 * Pranav N
 * 65
 * 2
 * 500,g,Paneer
 * 7,,chilli green
 * ,,herbs
 */

/*
export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    // console.log(err);
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPOST = fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    
    const res = await Promise.race([fetchPOST, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    return data;
  } catch (err) {
    // console.log(err);
    throw err;
  }
};
*/
