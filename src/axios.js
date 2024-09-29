import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-44ea6.cloudfunctions.net/api'

    // "http://localhost:5001/challenge-44ea6/us-central1/api",
});

export default instance;