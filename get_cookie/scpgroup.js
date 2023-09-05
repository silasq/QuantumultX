/********************************
Membership unlock for VSCO & 1Blocker & HTTPBot
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https:\/\/crm.scpgroup.com.cn\/yinli-minapp\/api\/v1\/square\/plazaInfo.* script-path=https://raw.githubusercontent.com/silasq/QuantumultX/main/get_cookie/scpgroup.js

[MITM]
hostname = crm.scpgroup.com.cn
********************************/
let filePath = "scpgroup.txt";

let token_new = $request.headers['token'];
let token_old = ''

let readUint8Array = $iCloud.readFile(filePath);
if (readUint8Array === undefined) {
    console.log("scpgroup: NO");
} else {
    let textDecoder = new TextDecoder();
    token_old = textDecoder.decode(readUint8Array);
}

if (token_new == token_old) {
    console.log("scpgroup: token exist");
} else {
    let encoder = new TextEncoder();
    let writeUint8Array = encoder.encode(token_new);
    
    if ($iCloud.writeFile(writeUint8Array, filePath)) {
        console.log("scpgroup: token refresh done");
        console.log(token_new);
    } else {
        console.log("scpgroup :token refresh failed");
    }
}


$done();

/*
$notify(token, token, token);
*/

