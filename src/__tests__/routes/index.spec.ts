import supertest from 'supertest';
import app from '../../index';
import { resizeImage } from '../../utilities/sharp';

const request = supertest(app);

/*
 * Test endpoint using supertest
 */
describe('Test endpoint responses', () => {
  it('API Should return 400 if missing name param', async done => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
    done();
  });
  it('API Should return 400 if missing hight param', async done => {
    const response = await request.get(
      '/api/images?name=usa&width=300',
    );
    expect(response.status).toBe(400);
    done();
  });
  it('API Should return 400 if missing width param', async done => {
    const response = await request.get(
      '/api/images?name=usa&height=400',
    );
    expect(response.status).toBe(400);
    done();
  });
});

describe('Test Image Processing', () => {
  it('Resize image should be running and return new file name', async done => {
    const response = await resizeImage('usa', 'png', 300, 300);
    expect(response).toBe('usa-w300-h300.png');
    done();
  });
});
