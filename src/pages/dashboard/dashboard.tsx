import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BarChartJobOccupation } from '../../components';
import { inject, observer } from 'mobx-react';
import { storeName } from '../../mobx/stores';
import { JobStore } from '../../mobx/stores/job-store';
import { Job } from '../../mobx/models';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DashboardComponent: FC<{ jobStore?: JobStore }> = ({ jobStore }) => {
  const classes = useStyles();

  const renderJob = (job: Job) => <div key={job.id}>{job.job}</div>;

  const renderJobs = () => <>{jobStore?.filteredJobs.map(renderJob)}</>;

  const renderNoJobsSelected = () => <span>Please Click</span>;

  const renderJobDescriptionSection = () => (
    <Grid item xs={12}>
      {renderJobs()}
      {jobStore?.isInitialized &&
        !jobStore?.isJobFilterActive &&
        renderNoJobsSelected()}
    </Grid>
  );

  const renderComponent = () => (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <BarChartJobOccupation id="job-categories-dashboard" />
        </Grid>
        {jobStore?.isInitialized && renderJobDescriptionSection()}
      </Grid>
    </div>
  );

  return renderComponent();
};

export const Dashboard = inject(storeName.JOB_STORE)(
  observer(DashboardComponent),
);
