import axios from 'axios';

export type VotePostRequestBody = {
  image_id: string;
  sub_id?: string;
  value: Number;
};

export type VotePostResponse = {
  message: string;
  id: string | Number;
};

export const votePost = (payload: VotePostRequestBody) =>
  axios.post<VotePostResponse>('https://api.thecatapi.com/v1/votes', payload);
