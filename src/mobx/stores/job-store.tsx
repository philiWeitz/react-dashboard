import { action, computed, observable } from 'mobx';
import { Job } from '../models';
import { fetchJobs } from '../../apis/job-api';

export class JobStore {
  @observable
  isLoading: boolean = false;

  @observable
  jobs: Job[] = [];

  @observable
  filteredJobs: Job[] = [];

  @observable
  selectedJob?: Job = undefined;

  @computed
  get isJobFilterActive() {
    return this.filteredJobs.length > 0;
  }

  @computed
  get isInitialized() {
    return this.jobs.length > 0;
  }

  @action
  public fetchJobsFromApi = async () => {
    this.jobs = await fetchJobs();
    this.filteredJobs = [];
  };

  @action
  public selectJob = (job: Job) => {
    this.selectedJob = job;
  };

  @action
  public setJobFilter = async (ids: string[]) => {
    this.filteredJobs = this.jobs.filter((job) => ids.includes(job.id));
  };

  constructor() {
    this.fetchJobsFromApi();
  }
}
