//Unit Test Cheat Sheet
//https://gist.github.com/yoavniran/1e3b0162e1545055429e

var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test for array of chats result', function () {
//	this.timeout(15000);

  var requestResult;
  var response;

  before(function (done) {
    chai.request("http://localhost:8080")
      .get("/chats")
      .end(function (err, res) {
        requestResult = res.body;
        response = res;
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        response.body.should.be.a('array');
        response.should.be.json;
        done();
      });
  }); //tests the /chats route from Express Server

  //tests whether chats route returns an array of chats
  it('Should return an array of chats', function (){
    expect(response).to.exist;
    expect(response).to.have.status(200);
    expect(response).to.have.headers;
    expect(response).to.be.an('object');
  });

  //tests properties of an item in the chat array
  it('The first entry in the array of chats has known properties (chatName, _id, body not a string)', function(){
    expect(requestResult[0]).to.include.keys('chatName');
    expect(requestResult[0]).to.have.property('_id');
    expect(response.body).to.not.be.a.string;
  });

  //tests the properties of items in the chat array
  it('The elements in the array of chats have a property (chatID) that is a number', function(){
    expect(response.body).to.satisfy(
      function (body) {
        for (var i = 0; i < body.length; i++) {
          expect(body[i]).to.have.property('chatID');
          expect(body[i]).to.have.property('chatID').that.is.a('number');
        }
        return true;
      });
  });

  //chai.use(require('chai-like'));
  //chai.use(require('chai-things'));
  //(requestResult[0]).to.be.an('array').that.contains.something.like.({chatName: 'cat chat'});


});
