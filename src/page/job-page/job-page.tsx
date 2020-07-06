import React, { FC } from 'react';
import { inject, observer } from 'mobx-react';
import { storeName } from '../../mobx/stores';
import { JobStore } from '../../mobx/stores/job-store';
import { useHistory } from 'react-router-dom';
import { routes } from '../../routes';
import { List, ListItem, ListItemText } from '@material-ui/core';

const JobPageComponent: FC<{ jobStore?: JobStore }> = ({ jobStore }) => {
  const history = useHistory();

  const selectedJob = jobStore?.selectedJob;

  if (!selectedJob) {
    history.replace(routes.dashboard);
    return null;
  }

  return (
    <List dense={false}>
      <ListItem>
        <ListItemText primary="Job:" secondary={selectedJob?.job} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Link:"
          secondary={<a href={selectedJob?.link}>{selectedJob?.link}</a>}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Occupation:"
          secondary={selectedJob?.occupation}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Organization"
          secondary={selectedJob?.organization}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary="Address" secondary={selectedJob?.address} />
      </ListItem>
    </List>
  );
};

export const JobPage = inject(storeName.JOB_STORE)(observer(JobPageComponent));
