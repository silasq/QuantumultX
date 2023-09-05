/********************************
Membership unlock for VSCO & 1Blocker & HTTPBot
Please note that you may need to reinstall app for script to work.

QuantumultX rewrite link:
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js

Please note that the above rewrite link requires open KOP-XIAO's resource parser

*********************************
Surge4, Loon and Shadowrocket configuration:

[Script]
http-request ^https:\/\/api.51nwds.com\/api-mall\/v1\/mall-store\/search script-path=https://raw.githubusercontent.com/silasq/QuantumultX/main/get_cookie/nwds.js

[MITM]
hostname = api.51nwds.com
********************************/
let filePath = "nwds.txt";

let token_new = $request.headers['Authorization'].replace('bearer ', '');
let token_old = ''

let readUint8Array = $iCloud.readFile(filePath);
if (readUint8Array === undefined) {
    console.log("nwds: NO");
} else {
    let textDecoder = new TextDecoder();
    token_old = textDecoder.decode(readUint8Array);
}

if (token_new == token_old) {
    console.log("nwds: token exist");
} else {
    let encoder = new TextEncoder();
    let writeUint8Array = encoder.encode(token_new);
    
    if ($iCloud.writeFile(writeUint8Array, filePath)) {
        console.log("nwds: token refresh done");
        console.log(token_new);
    } else {
        console.log("nwds: token refresh failed");
    }
}


$done();

/*
$notify(token, token, token);
*/

