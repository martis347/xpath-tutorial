import React from 'react';
import { useParams } from 'react-router-dom';

const Exercise = () => {
  const { exerciseId } = useParams<{ exerciseId: string }>();
  return <div>Exc {exerciseId}</div>;
};

export default Exercise;
