jest.mock('axios');

import axios from 'axios';

import api from './api';
import config from './config.json';

import { toOneLineString } from './utils/template-string.util';

describe('#cantidadOfertas', () => {
  const pais = 'pais';
  const expectedLaboralLength = 'expectedLaboralLength';
  const expectedFailureResponse = 0;

  it('should return length of Laboral for success response', async () => {
    axios.post.mockReturnValue(
      Promise.resolve({
        data: { data: { Laboral: { length: expectedLaboralLength } } },
      })
    );

    const laboralLength = await api.cantidadOfertas(pais);

    expect(laboralLength).toBe(expectedLaboralLength);
    expect(axios.post).toBeCalledWith(
      config.urlGraphQL,
      expect.any(Object)
    );
    const [[, { query }]] = axios.post.mock.calls;

    expect(toOneLineString(query)).toBe(
      '{Laboral(where: {field: pais, value: "pais"}, order: {by: fecha, orientation: DESC}) {link}}'
    );
  });

  it('should return 0 for rejected request', async () => {
      axios.post.mockReturnValue(Promise.reject());
      const failureResult = await api.cantidadOfertas(pais);

      expect(axios.post).toBeCalledWith(
        config.urlGraphQL,
        expect.any(Object)
      );
      expect(failureResult).toBe(expectedFailureResponse);
  });
});
