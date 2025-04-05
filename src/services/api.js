import axios from 'axios';

const API_BASE = 'http://10.0.2.2:3000/api'; // Emulator alias for localhost

export const fetchSummary = async () => {
  const res = await axios.get(${API_BASE}/summary);
  return res.data;
};
