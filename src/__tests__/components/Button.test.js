import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../app/components/Button';

let screen = null;
jest.useFakeTimers();
describe('[COMPONENTS] Button', () => {
  beforeEach(async () => {
    screen = await renderer.create(<Button />);
  });
  it('Should render corretly', async () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
