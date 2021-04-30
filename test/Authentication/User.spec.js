const { test } = require('@jest/globals');
const jwt = require('jsonwebtoken');
const {
  models: { User },
} = require('../../server/db/index');

let userLogin;
beforeEach(async () => {
  // Create and save an example user before each test.
  userLogin = new User({
    email: 'test@email.com',
    password: '1234',
    phoneNumber: '1234567890',
    firstName: 'Jane',
    lastName: 'Doe',
  });
  await userLogin.save();
});
afterEach(async () => {
  // Delete the example user after each test to avoid unique constraint errors.
  await userLogin.destroy();
});
describe('User Update', () => {
  describe('change name', () => {
    test('does not change the password', async () => {
      const password = userLogin.password;
      const admin = userLogin;
      admin.firstName = 'Janelle';
      await admin.save();
      expect(admin.password).toBe(password);
    });
  });
});
describe('Class Method: User.authenticate', () => {
  describe('correct credentials', () => {
    test('returns a token', async () => {
      const token = await User.authenticate({
        email: 'test@email.com',
        password: '1234',
      });
      expect(token).toBeTruthy();
      // console.log(token);
    });
  });
  describe('incorrect credentials', () => {
    test('throws an error', async () => {
      try {
        await User.authenticate({
          email: 'test@email.com',
          password: '4321',
        });
        throw 'incorrect credentials!';
      } catch (er) {
        expect(er.status).toBe(401);
        expect(er.message).toBe('bad credentials');
      }
    });
  });
});
describe('Class Method: User.byToken', () => {
  describe('with a valid token', () => {
    test('returns a user', async () => {
      const token = await jwt.sign({ id: userLogin.id }, process.env.JWT);
      const user = await User.byToken(token);
      expect(user.fullName).toBe(userLogin.fullName);
    });
  });
  // error will be thrown if someone uses an invalid token
  describe('with a invalid token', () => {
    test('throws a 401', async () => {
      try {
        const token = await jwt.sign({ id: userLogin.id }, 'randomToken');
        await User.byToken(token);
        throw 'invalid token';
      } catch (er) {
        expect(er.status).toBe(401);
        expect(er.message).toBe('bad credentials');
      }
    });
  });
  describe('with a valid token but no associated user', () => {
    test('throws a 401', async () => {
      try {
        const token = await jwt.sign({ id: 99 }, process.env.JWT);
        await User.byToken(token);
        throw 'no associated user';
      } catch (er) {
        // console.log(er);
        expect(er.status).toBe(401);
        expect(er.message).toBe('bad credentials');
      }
    });
  });
});
