import React, { useState, useEffect } from 'react';
import {createUseStyles} from 'react-jss';

import api from '../api';
import Table from './Table';
import CreateAJob from './CreateAJob';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    maxWidth: 768,
    margin: '0 auto'
  }
})

const columns = [
  {
    name: 'Id',
    accessor: '_id'
  },
  {
    name: 'Summary',
    accessor: 'summary'
  },
  {
    name: 'Status',
    accessor: 'status'
  },
  {
    name: 'Description',
    accessor: 'description'
  },
  {
    name: 'Property Name',
    accessor: 'propertyName'
  },
  {
    name: 'Raised By',
    accessor: 'raisedBy'
  }
];

const Main = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const getJobsAndProperties = (async () => {
      let jobs = await api.getAllJobs().then(response => {
        return response.data.jobs;
      }).catch(() => ([]));

      let properties = await api.getAllProperties().then(response => {
        return response.data.properties;
      }).catch(() => ([]));

      jobs.forEach(job => {
        job.propertyName = properties.find(property => property._id === job.property).name;
        job.raisedBy = 'John Smith';
      })
      setJobs(jobs);
      setProperties(properties);
    });

    getJobsAndProperties();
  }, []);

  return (
    <div className={classes.root}>
      <Table columns={columns} data={jobs} />
      <CreateAJob properties={properties} />
    </div>
  );
};

export default Main;
