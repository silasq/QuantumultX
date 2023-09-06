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
let token_new = $request.headers['Authorization'].replace('bearer ', '');

const url = "https://api.silasq.net:4433/nwds";
const method = "POST";
const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
};
const data = {"Authorization": token_new};

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: JSON.stringify(data) // Optional.
    //body: data
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});

