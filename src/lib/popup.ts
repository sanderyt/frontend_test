import axios from 'axios';

const API_URL = 'http://localhost:8001/popup';

export async function getPopup() {
  /**
   * Step 2: Instead of directly returning the popup definition fetch it from http://localhost:8001/popup
   */

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  // return {
  //   id: 0,
  //   message: 'Hello, WisePops!'
  // };
}

export async function postMessage(message: string, id: number) {
  try {
    const response = await axios.post(API_URL, { message, id });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
