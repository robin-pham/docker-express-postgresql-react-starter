import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../index';
import authorMock from '../../server/mocks/author.json';

chai.use(chaiHttp);

describe('REQUESTS TO SERVER', function() {
  it('should object with username, url, description /api/author GET', function(done) {
    chai.request(server)
      .get('/api/author')
      .set('accept', 'application/json')
      .end(function(err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('Object');
        Object.keys(authorMock).map(elem => {
          res.body.should.have.property(elem);
          res.body[elem].should.equal(authorMock[elem]);
        });
        done();
      });
  });
  it('Next server test', function(done) {
    done();
  });
});
