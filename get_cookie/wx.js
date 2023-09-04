/********************************
Membership unlock for VSCO & 1Blocker & HTTPBot
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https:\/\/crm.scpgroup.com.cn\/yinli-minapp\/api\/v1\/square\/plazaInfo.* script-path=https://raw.githubusercontent.com/silasq/QuantumultX/main/get_cookie/wx.qxrewrite

[MITM]
hostname = crm.scpgroup.com.cn
********************************/
const token = $request.headers['token'];

let filePath = "scpgroup.txt";

let encoder = new TextEncoder();
let writeUint8Array = encoder.encode(token);

if ($iCloud.writeFile(writeUint8Array, filePath)) {
    console.log("OK");
} else {
    console.log("NO");
}
$done();

/*
$notify(token, token, token);
*/

