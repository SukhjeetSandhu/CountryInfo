import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import CountriesContext from '../app/country-list/contexts/CountriesContext';
import CountryList from '../app/country-list/components/CountryList';

const mockNavigation = {
    navigate: jest.fn(),
};

const countries = [
    { cca2: 'US', name: { common: 'United States' } },
    { cca2: 'CA', name: { common: 'Canada' } },
];

test('renders CountryList and handles selection', async () => {  
    const { getByTestId } = render(
      <CountriesContext.Provider value={{ countries, loading: false, error: null }}>
          <CountryList navigation={mockNavigation} />
      </CountriesContext.Provider>
    );
  
    // Check if countries are rendered
    expect(getByTestId('US')).toBeTruthy();
    expect(getByTestId('CA')).toBeTruthy();
  
    // Simulate country selection
    await act(async () => {
      fireEvent.press(getByTestId('US'));
    });
  
    // Assert the selectCountry function and navigation were called with the correct arguments
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details');
  
});
