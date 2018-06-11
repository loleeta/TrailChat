var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('TrailChat Azure tests', function () {
	this.timeout(15000);

	var requestResult;
	var response;

    before(function (done) {

//		chai.request('http://trailchatclt.azurewebsites.net')
        chai.request("http://localhost")
			.get("/app/lists")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
            //expect(err).to.be.null;
            //expect(res).to.have.status(200);
                console.log(res.request.url);
				done();
			});
	});

    it('Should return an array object with three objects', function (){
//		expect(response).to.have.status(200);
        expect(response.body).to.be.json; //an.object;
		expect(response.body).to.have.length.above(1);
//		expect(response).to.have.headers;
    });
    /*
	it('The first entry in the array has known properties', function(){
		expect(requestResult[0]).to.include.keys('name');
		expect(response).to.have.deep.property('body[0].listId', '1');
		expect(response.body).to.not.be.a.string;
		//done();
	});
*/
	it('The elements in the array have the expecte properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('name');
					expect(body[i]).to.have.property('description');
					expect(body[i]).to.have.property('listId');
					expect(body[i]).to.have.property('state').to.have.length(1);
					expect(body[i]).to.have.property('owner').that.is.a('string');
				}
				return true;
			});
		//done();
	});

});
