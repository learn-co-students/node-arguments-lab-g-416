var test = require('tape'),
  cp = require('child_process')

test('node password 140 1', function (t) {
  t.plan(2)
  child = cp.spawn('node', ['password', '140', '1'])
  child.stdout.on('data', (data) => {
    data = data.toString('utf8')
    console.log(`stdout: ${data}`)
    data = data.replace('\n','')
    t.equal(data.length, 140)
    child.kill()
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    t.equal(code, 0)
  })
})

test('node password 10 2', function (t) {
  t.plan(4)
  child = cp.spawn('node', ['password', '10', '2'])
  var count = 0
  child.stdout.on('data', (data) => {
    data = data.toString('utf8')
    console.log(`stdout: ${data}`)
    data = data.replace('\n','')
    t.equal(data.length, 10)
    count ++
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    t.equal(count, 2)
    t.equal(code, 0)
  })
})
