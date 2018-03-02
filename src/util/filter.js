/**
 * 替换url
 * srcUrl 初始url
 *
 */
exports.replaceUrl = (srcUrl) => {
    return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
}