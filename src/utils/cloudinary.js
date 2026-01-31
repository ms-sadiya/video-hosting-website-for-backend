import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


  // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

    const uploadOnCloudinary = async(localFilePath) => {
      try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response  = await cloudinary.uploader.upload(localFilePath,{
          resource_type:"auto"
        })
        // File has been uploaded succesfully 
        console.log("file has succesfully uploaded", response.secure_url);
        return response;
      } catch (error) {
        fs.unlinkSync(localFilePath) //Used to delete local temp files after upload or on error
        return null;
      }
    }

    export {uploadOnCloudinary}
