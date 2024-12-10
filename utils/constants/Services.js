import {AppEnums} from 'sling-core';

const {ApiConfig} = AppEnums;

export const GET_INIT_PROPS = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/v1/frontend/getInitProps`
  : ApiConfig.GET_INIT_PROPS;
export const CLIENT_KEY_SECRET = `${process.env.NEXT_PUBLIC_CLIENT_KEY_SECRET}`;
export const CLIENT_ID = `${process.env.NEXT_PUBLIC_CLIENT_ID}`;
