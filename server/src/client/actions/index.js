import axios from 'axios';

const baseUrl = 'https://react-ssr-api.heroku.com';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get(`${baseUrl}/users`);

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};