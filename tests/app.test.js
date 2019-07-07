const request = require('request');
test('request3', () => {
    request.get("http://localhost:3000/test7", (err, response, data) =>{
      let result = null;
      if(err === null){
        result = JSON.parse(data).test;
      }
      expect(result).toBe("OK");
    })
    
})
test('request3', () => {
  request.get("http://localhost:3000/test2", (err, response, data) =>{
    let result = null;
    if(err === null){
      result = JSON.parse(data).test;
    }
    expect(result).toBe("OK");
  })
  
})
test('request3', () => {
  request.get("http://localhost:3000/test3", (err, response, data) =>{
    let result = null;
    if(err === null){
      result = JSON.parse(data).test;
    }
    expect(result).toBe("OK");
  })
  
})