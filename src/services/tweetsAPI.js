import axios from 'axios';

const BASE_URL = 'https://6442b17976540ce225932bce.mockapi.io/api/v1/users';

export async function fetchTweets(page = 1) {
  const response = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
  return response.data;
}

export async function updateFollowers(id, followers) {
  const response = await axios.put(`${BASE_URL}/${id}`, followers);
  return response.data;
}
