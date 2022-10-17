import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import Visualize from './Visualize';

export default function VisualizeContainer() {

  const GET_ALL_EMPLOYEES = gql`{ employees { id firstName 
      company { id name } 
      technologies { id name }
    }
  }`;

  const { data, loading, error } = useQuery(GET_ALL_EMPLOYEES);
  const employees = data && !loading && !error && data.employees;

  return (
    <>
      <div className='row'>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Trending people, organizations and technologies
      </Typography>
        <div 
        // style={{ border: '1px solid black', padding :'10px' }}
        >
          {employees && employees.length && (
            <Visualize employees={employees} />
          )}
        </div>
      </div>
      <br />
    </>
  )
}