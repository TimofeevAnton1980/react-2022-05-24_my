import React from 'react';

export const Restaurant = ({ restaurantName }) => {
    return (
        <div>{restaurantName || 'unknown restaurant'}</div>
    );
}