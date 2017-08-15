'use strict';

var http = require("https");

exports.handler = (event, context, callback) => {
    var options = {
        "method": "POST",
        "hostname": "api.telegram.org",
        "path": "Input your bot path. Below is a temporary sample path.",
        // "path": "/bot352------:AA6S4x43qHWlXGik6enG_NUZH6Ix5j76wQo/sendMessage",
        "headers": {
            "content-type": "application/json"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    // Input your chat ID. Below is a temporary sample id.
    req.write(JSON.stringify({ chat_id: '140677379', text: event.key1 }));
    req.end();
};
