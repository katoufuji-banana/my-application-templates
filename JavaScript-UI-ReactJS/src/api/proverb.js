import axios from 'axios';

export const fetchProverb = () => axios.get("/api/proverb");
