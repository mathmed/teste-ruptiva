import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../app/components/Loading';

let screen = null;
jest.useFakeTimers();

describe('[COMPONENTS] Loading', () => {
  beforeEach(async () => {
    screen = await renderer.create(<Loading text={'Carregando'} />);
  });
  it('Should render corretly', async () => {
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
