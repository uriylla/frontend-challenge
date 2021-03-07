import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Clusters from '../Clusters';
import { clusters } from './fixtures';

describe('Clusters', () => {
  const clusterClickSpy = jest.fn();
  const renderComponent = ({selectedCluster}) => render(
      <Clusters clusters={clusters} selectedCluster={selectedCluster} clusterClickHandler={clusterClickSpy} />
  );

  it('should render correctly', () => {
    const { container } = renderComponent({
      selectedCluster: 0
    });
    expect(container).toMatchSnapshot();
  })

  it('should select the first item', () => {
    const { getAllByRole} = renderComponent({
      selectedCluster: 0
    });
    expect(getAllByRole('listitem').map(item => item.className)).toEqual(['cluster cluster--selected', 'cluster']);
  });

  it('should select the second item', () => {
    const { getAllByRole} = renderComponent({
      selectedCluster: 1
    });
    expect(getAllByRole('listitem').map(item => item.className)).toEqual(['cluster', 'cluster cluster--selected']);
  });

  it('should change selected item', () => {
    const { getAllByRole } = renderComponent({
      selectedCluster: 0
    });
    fireEvent.click(getAllByRole('listitem')[1]);
    expect(clusterClickSpy).toHaveBeenCalledWith(1);
  })
}); 