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

const req = {};
const token = $request.headers['token'];

$notify(token, token, token);

$done(req);
