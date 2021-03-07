import React from 'react';
import { render } from '@testing-library/react';
import Story from '../Story';
import { clusters } from './fixtures';

describe('Story', () => {

  const renderComponent = () => render(
      <Story story={clusters[0].representative_story} />
  );

  it('should render correctly with selected item', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
}); 