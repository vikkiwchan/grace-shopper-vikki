const { test, describe, expect } = require('@jest/globals');
const {
  models: { Product },
} = require('../../server/db/index');
const app = require('../../server/app');
const agent = require('supertest')(app);

describe('GET /api/products/all', () => {
  test('returns all products in the database', async () => {
    const products = await Product.findAll();
    const response = await agent.get('/api/products/all').expect(200);
    expect(response.body.length).toBe(products.length);
  });
});
describe('GET /api/products with queries', () => {
  test('Pagination: GET /api/products?page=1&size=2', async () => {
    const offset = 0,
      limit = 2;
    const { count, rows } = await Product.findAndCountAll({
      order: ['name'],
      offset,
      limit,
    });
    const {
      status,
      body: { total, products },
    } = await agent.get('/api/products?page=1&size=2');
    expect(status).toBe(200);
    expect(total).toBe(count);
    expect(products[0].name).toBe(rows[0].name);
  });
  test('Filter by type', async () => {
    const type = 'bed';
    const { count, rows } = await Product.findAndCountAll({
      order: ['name'],
      where: { type },
    });
    const {
      status,
      body: { total, products },
    } = await agent.get('/api/products?type=bed');
    expect(status).toBe(200);
    expect(total).toBe(count);
    expect(products[1].name).toBe(rows[1].name);
  });
  test('Filter by style', async () => {
    const style = 'contemporary';
    const { count, rows } = await Product.findAndCountAll({
      order: ['name'],
      where: { style },
    });
    const {
      status,
      body: { total, products },
    } = await agent.get('/api/products?style=contemporary');
    expect(status).toBe(200);
    expect(total).toBe(count);
    expect(products[1].name).toBe(rows[1].name);
  });
  test('Filter by room', async () => {
    const room = '';
  });
});
describe('GET /api/products/:Bytype', () => {
  test('returns all products of a given type', async () => {
    const dressers = await Product.findAll({ where: { type: 'dresser' } });
    // console.log(dressers);
    const response = await agent
      .get('/api/products/Bytype/dresser')
      .expect(200);
    // console.log(response.body);
    expect(response.body.length).toBe(dressers.length);
  });
});
describe('GET /api/products/Byid/:id', () => {
  test('returns a specific product', async () => {
    const dresser = await Product.findOne({ where: { type: 'dresser' } });
    const response = await agent
      .get(`/api/products/Byid/${dresser.id}`)
      .expect(200);
    expect(response.body.name).toBe(dresser.name);
  });
});
