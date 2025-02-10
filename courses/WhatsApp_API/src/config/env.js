import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

export default {
  WEBHOOK_VERIFY_TOKEN: env.WEBHOOK_VERIFY_TOKEN,
  API_TOKEN: env.API_TOKEN,
  PORT: env.PORT || 3000,
  BUSINESS_PHONE: env.BUSINESS_PHONE,
  API_VERSION: env.API_VERSION,
  CHATGPT_API_KEY: env.CHATGPT_API_KEY,
  BASE_URL: env.BASE_URL,
};
