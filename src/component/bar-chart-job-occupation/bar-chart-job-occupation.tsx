import React, { FC } from 'react';
import { BarChart } from '../';
import { groupBy, map, values } from 'lodash';
import { Job } from '../../mobx/models';
import { inject, observer } from 'mobx-react';
import { storeName } from '../../mobx/stores';
import { JobStore } from '../../mobx/stores/job-store';

export const BarChartJobOccupationComponent: FC<{
  id: string;
  jobStore?: JobStore;
}> = ({ id, jobStore }) => {
  const groupedByOccupation = groupBy(jobStore?.jobs, 'occupation');

  const labels = map(
    groupedByOccupation,
    (group: Job[]) => group[0].occupation,
  );

  const data = map(groupedByOccupation, (group: Job[]) => group.length);

  const handleClick = (selectedChartId: number) => {
    const jobIds = values(groupedByOccupation)[selectedChartId].map(
      (job) => job.id,
    );
    jobStore?.setJobFilter(jobIds);
  };

  return (
    <BarChart
      data={data}
      labels={labels}
      title="Job Occupation"
      id={id}
      onClick={handleClick}
    />
  );
};

export const BarChartJobOccupation = inject(storeName.JOB_STORE)(
  observer(BarChartJobOccupationComponent),
);
