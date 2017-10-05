const chai     = require('chai');
const chaiHttp = require('chai-http');
const should   = chai.should();

chai.use(chaiHttp);

describe('question development test',()=>{
  it('get all data success',(done)=>{
    chai.request('http://localhost:3000/question')
    .get('/')
    .end((err,res)=>{
      res.should.have.status(200)
      res.body[0].question.should.equal('ibukota Indonesia?')
      done()
    })
  })

})
