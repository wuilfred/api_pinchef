require('dotenv').config();
var AWS = require('aws-sdk');

const bucket_name = 'pinchef';

const s3 = new AWS.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
});

s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
})


function uploadObj(id, file, type) {
    try{
    console.log(id);
    console.log(type);
    console.log(`${type}/${id}/`);

        let params = {
            Bucket: bucket_name, /* required */
            Key: `${type}/${id}/`
        };
        s3.headBucket(params, function (err, data) {
            if (err) {
                s3.putObject(params, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    console.log("Bucket created");
                });
            } else {
                console.log("Bucket exists and we have access");
            }
        });
        let fs = require('fs');
        const f_name = file.name;
        const f_type = file.mimetype;
        if (f_type !== 'image/png' && f_type !== 'image/jpg' && f_type !== 'image/jpeg') {
            return {
                status:false,
                message: "Only .png, .jpg and .jpeg format allowed!"
              }
        }       
        
        let uploadParams = {
            Bucket: bucket_name, /* required */
            ContentType: f_type,
            Key: `${type}/${id}/${f_name}`,
            Body: fs.createReadStream(file.tempFilePath)
        };
        console.log(uploadParams);
        s3.upload(uploadParams, (err, data) => {
            if (err) {
                return {
                    status:false,
                    message: err
                  }
            }
            if (data) {
                console.log("Photo Upload Success", data.Location);
                const location = data.Location;
                return {
                    status:true,
                    message: "ok",
                    ...location,
                    
                }
            }
        });
}catch(e){}}


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

module.exports = uploadObj;
