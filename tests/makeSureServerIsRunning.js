import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Make sure that status is 200', () => {
    it('should return 200', (done) => {
        chai
            .request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
});