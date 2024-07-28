import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import CountryDetails from '../app/country-detail/components/CountryDetails';

const mockNavigation = {
    navigate: jest.fn(),
};

const countryDetails = { cca2: 'US', cca3: 'USA', officialName: 'United States', currencies: 'US Dollars' };

test('renders Country details', async () => {
    const { getByTestId } = render(
        <CountryDetails countryDetails={countryDetails} error={null} loading={false} />
    );

    // Check if country's details are rendered
    expect(getByTestId('US')).toBeTruthy();

});
