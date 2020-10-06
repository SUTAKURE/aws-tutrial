var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = function(event, context) {
    const path = '/tmp/' + (new Date()).getTime() + '.txt';// 一意なファイル名にすること
    fs.writeFileSync(path, "aaaa");

    var params = {
        Bucket: "aws-tutrial",
        Key: path,
        ContentType: 'text/plain',
        Body: 'lambda test'
    };
    
    s3.upload(params, function(err, data) {
        if(err) {
            console.log('access dined');
            console.log('error : ', err);
        }
    });
};