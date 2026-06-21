// 获取请求地址
let requestUrl = $request.url;
let status = isJSON($response.body);
var obj = status
  ? JSON.parse(
      removeExtraSpaces($response.body)
        .replace(/"status":\w+/g, '"status":1')
        .replace(/"isSvip:-\d+/g, '"isSVip":1')
        .replace(/"isVip:-\d+/g, '"isVip":1')
    )
  : $response.body;

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function removeExtraSpaces(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  return JSON.stringify(jsonObj, function (key, value) {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  });
}

// 判断是否为匹配项
if (
  /^https:\/\/.+\.xiaonandou\.com\.cn\moria\/user\/userVipinfo/.test(requestUrl)
) {

  obj.data.vipDeadline = "2222\ /02\ /02 ";
}
// 重写数据
$done({ body: status ? JSON.stringify(obj) : obj });
