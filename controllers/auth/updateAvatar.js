const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const {_id: id} = req.user

  const imgName = `${id}_${originalname}`

  try {
    const resultUpload = path.join(avatarDir, imgName);

    Jimp.read(tempUpload, (err, img) => {
      if (err) throw err;
      img
          .resize(256, 256)
          .write(resultUpload);
    });
    
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('public', 'avatars', imgName);
    await User.findByIdAndUpdate(req.user._id, { avatarURL });
    res.json({ avatarURL });
  } catch (err) {
    await fs.unlink(tempUpload);
    throw err

  }
};

module.exports = updateAvatar;

const uploadImage = async (id, file) => {
  const avatarURL = path.join(AVATARS, `${id}${file.originalname}`);

  try {
    await sharp(file.path)
        .resize({width: 250})
        .toFile(path.join(PUBLIC_DIR, avatarURL));
    return avatarURL;
  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    await fs.unlink(file.path);
  }

}
