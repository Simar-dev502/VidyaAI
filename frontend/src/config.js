// Central API URL config
// Uses REACT_APP_API_URL env variable — set in .env for local, Vercel env vars for production
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default API_URL;
