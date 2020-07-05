import axios from 'axios';
import { Job } from '../mobx/models';
import { config } from '../config';

const jobApi = axios.create({
  baseURL: config.apiHost,
});

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const { data } = await jobApi.get('/jobs');
    return data as Job[];
  } catch (e) {
    throw e;
  }
};
