/* Packages */
const chai = require('chai');
const request = require('supertest');
const app = require('./../../bin/www');

/* Constants */
const {
  authenticatedAdmin,
  authenticatedUser,
} = require('./../authenticatedUser')();

chai.should();

module.exports = () => {
  describe('GET /', () => {
    describe('Not logged in', () => {
      it('should redirect to /login', (done) => {
        request(app).get('/')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });

    describe('Logged in admin', () => {
      it('should return a 200 response', (done) => {
        authenticatedAdmin.get('/')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });

    describe('Logged in user', () => {
      it('should return a 200 response', (done) => {
        authenticatedUser.get('/')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });
  });

  describe('GET /admin', () => {
    describe('Not logged in', () => {
      it('should redirect to /login', (done) => {
        request(app).get('/admin')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });

    describe('Logged in admin', () => {
      it('should return a 200 response', (done) => {
        authenticatedAdmin.get('/admin')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });

    describe('Logged in user', () => {
      it('should return a 200 response', (done) => {
        authenticatedUser.get('/admin')
          .end((err, res) => {
            res.headers.location.should.equal('/404');
            done();
          });
      });
    });
  });

  describe('GET /login', () => {
    describe('Not logged in', () => {
      it('should return a 200 response', (done) => {
        request(app).get('/login')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });

    describe('Logged in admin', () => {
      it('should redirect to /', (done) => {
        authenticatedAdmin.get('/login')
          .end((err, res) => {
            res.headers.location.should.equal('/');
            done();
          });
      });
    });

    describe('Logged in user', () => {
      it('should redirect to /', (done) => {
        authenticatedUser.get('/login')
          .end((err, res) => {
            res.headers.location.should.equal('/');
            done();
          });
      });
    });
  });

  describe('GET /map', () => {
    describe('Not logged in', () => {
      it('should redirect to /login', (done) => {
        request(app).get('/')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });

    describe('Logged in admin', () => {
      it('should return a 200 response', (done) => {
        authenticatedAdmin.get('/map')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });

    describe('Logged in user', () => {
      it('should return a 200 response', (done) => {
        authenticatedUser.get('/map')
          .end((err, res) => {
            res.statusCode.should.equal(200);
            done();
          });
      });
    });
  });

  describe('GET /logout', () => {
    describe('Not logged in', () => {
      it('should redirect to /login', (done) => {
        request(app).get('/logout')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });

    describe('Logged in admin', () => {
      it('should redirect to /login', (done) => {
        authenticatedAdmin.get('/logout')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });

    describe('Logged in user', () => {
      it('should redirect to /login', (done) => {
        authenticatedUser.get('/logout')
          .end((err, res) => {
            res.headers.location.should.equal('/login');
            done();
          });
      });
    });
  });
};
