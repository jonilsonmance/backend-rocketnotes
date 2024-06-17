const fs = require("fs")
const path = require("path");
const uploadConfig  = require("../configs/upload");


class DiskStorage{
    async saveFile(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file), // função que mostra onde está o arquivo
            path.resolve(uploadConfig.UPLOADS_FOLDER, file) // função a qual o arquivo está sendo levado.
        );
        
        return file;
    };

    async deleteFile(file){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

        try{
            await fs.promises.stat(filePath);
        }catch{
            return;
        }
        await fs.promises.unlink(filePath) // finção que remove o arquivo
    }

}

module.exports = DiskStorage;