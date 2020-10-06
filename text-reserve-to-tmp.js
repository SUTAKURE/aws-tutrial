const aws = require("aws-sdk");
const fs = require('fs-extra');
 
exports.handler = (event, context, callback) => {
  const path = '/tmp/' + (new Date()).getTime() + '.txt';// 一意なファイル名にすること
  fs.writeFileSync(path, "aaaa");
 
  const data = fs.readFileSync(path, 'utf-8');
  console.log("this is ",data);
};