var expect = require('chai').expect
var path = require('path')
var cp = require('child_process')

describe('"$ node password 140 1" command', function () {
  it('must return password with length 140', function(done){
    passwordAppProcess = cp.spawn('node', ['password', '140', '1'])
    passwordAppProcess.stdout.on('data', (data) => {
      data = data.toString('utf8').replace('\n','')
      expect(data.length).to.equal(140)
      passwordAppProcess.kill()
    })
    done();
  })
})

describe('"$ node password 10 2" command', function () {
  it('must return password with length 10', function(done){
    passwordAppProcess = cp.spawn('node', ['password', '10', '2'])
    passwordAppProcess.stdout.on('data', (data) => {
      data = data.toString('utf8').replace('\n','')
      expect(data.length).to.equal(10)
      passwordAppProcess.kill()

    })
    done();
  })
})
