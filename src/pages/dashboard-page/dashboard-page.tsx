import React, { FC } from 'react';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BarChartJobOccupation } from '../../components';
import { inject, observer } from 'mobx-react';
import { storeName } from '../../mobx/stores';
import { JobStore } from '../../mobx/stores/job-store';
import { Job } from '../../mobx/models';
import { routes } from '../../routes';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
  },
  listItem: {
    cursor: 'pointer',
    color: theme.palette.text.secondary,
  },
}));

const DashboardPageComponent: FC<{ jobStore?: JobStore }> = ({ jobStore }) => {
  const classes = useStyles();
  const history = useHistory();

  const renderJob = (job: Job) => {
    const handleOnClick = () => {
      jobStore?.selectJob(job);
      history.push(routes.job);
    };

    return (
      <>
        <ListItem
          onClick={handleOnClick}
          key={job.id}
          className={classes.listItem}
        >
          <ListItemText primary={job.job} />
        </ListItem>
      </>
    );
  };

  const renderJobs = () => (
    <List dense={true}>{jobStore?.filteredJobs.map(renderJob)}</List>
  );

  const renderNoJobsSelected = () => (
    <div>
      Please click on the graph to drill into the specific job categories
    </div>
  );

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

export const DashboardPage = inject(storeName.JOB_STORE)(
  observer(DashboardPageComponent),
);
