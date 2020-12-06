require('dotenv').config();
var AWS = require('aws-sdk');
const sharp = require("sharp");

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


async function uploadObj(id, file, type, is_avatar) {

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
        
        const width = 200;   
        // if (is_avatar) {
        //   const width = 200;          
        //   const buffer = await sharp(file.tempFilePath).resize(width).toBuffer();
        // }
         
        const final_file = is_avatar ? await sharp(file.tempFilePath).resize(width).toBuffer() : fs.createReadStream(file.tempFilePath);
           
        let uploadParams = {
            Bucket: bucket_name, /* required */
            ContentType: f_type,
            Key: `${type}/${id}/${f_name}`,
            Body: final_file
        };
        try {
        const result = await s3.upload(uploadParams).promise();
        if (result) {
            fs.unlink(file.tempFilePath, function (err) {
                if (err) {
                    console.error(err);
                }
                console.log('Temp File Delete');
            });
          console.log("Photo Upload Success", result.Location);
                const location = result.Location;
                return {
                     status:true,
                     message: "ok",
                    location,
                        
             }
            }
        } catch (err) {
        console.log(err)
        }
        // await s3.upload(uploadParams, (err, data) => {
        //     if (err) {
        //         return {
        //             status:false,
        //             message: err
        //           }
        //     }
        //     if (data) {
        //         console.log("Photo Upload Success", data.Location);
        //         const location = data.Location;
        //         return {
        //             status:true,
        //             message: "ok",
        //             ...location,
                    
        //         }
        //     }
        // }).promise();
}


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
