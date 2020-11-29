var AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAJM7IUMIVPNRGHZLQ',
    secretAccessKey: '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'
});
s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
})

// let params = {
//     Bucket: 'pinchef', /* required */
// };

// s3.listObjects(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data);
//     }
// });

module.exports = s3;
