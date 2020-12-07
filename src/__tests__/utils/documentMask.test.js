import documentMask from '../../app/utils/documentMask';

describe('[UTILS] documentMask', () => {
  it('Should return CPF corretly', async () => {
    expect(documentMask('12345678910', 'individual')).toEqual('123.456.789-10');
  });
  it('Should return CNPJ corretly', async () => {
    expect(documentMask('12345678910115', 'business')).toEqual(
      '12.345.678/9101-15',
    );
  });
  it('Should return blank', async () => {
    expect(documentMask('12345678910115', 'foo')).toEqual('');
  });
});
