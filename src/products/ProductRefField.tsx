import * as React from 'react';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Product } from '../types';

const ProductRefField = (_: { source: string }) => {
    const record = useRecordContext<Product>();
    return record ? (
        <MuiLink
            component={Link}
            to={`/products/${record.id}`}
            underline="none"
        >
            {record.reference}
        </MuiLink>
    ) : null;
};

export default ProductRefField;
