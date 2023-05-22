import axios from 'axios';

axios.defaults.baseURL = 'https://64693df203bb12ac20890358.mockapi.io';

export const userLimit = 3;

export const fetchUsers = async (signal, page) => {
  const response = await axios.get('/users', {
    signal: signal,
    params: {
      page: page,
      limit: userLimit,
    },
  });

  return response.data;
};

export const updateFollower = async (id, followersNumber, isFollowingState) => {
  const response = await axios.put(`/users/${Number(id)}`, {
    followers: followersNumber,
    isFollowingState: isFollowingState,
  });

  return response.data;
};
