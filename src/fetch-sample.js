const axios = require('axios');

/**
 * Qiita APIでタグのIDの情報をとってきます。
 * 
 * @returns {Promise<string[]>}
 */
async function getQiitaTags() {
    // Qiita API https://qiita.com/api/v2/docs#part-65422ff107e
    const res = await axios.get("https://qiita.com//api/v2/tags");
    // とってきたデータは、dataに格納されている。
    // idパラメータのみ射影する。
    return res.data.map(t => t.id)
}

module.exports = {
    getQiitaTags
}