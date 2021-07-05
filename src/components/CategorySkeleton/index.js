import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function CategorySkeleton() {
    return (
        <Skeleton variant="rect" width={210} height={40} animation="wave"/>
    );
  }