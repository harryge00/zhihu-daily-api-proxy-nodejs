const http = require('http');
const path = require('path');
const request = require('got');

const HOSTNAME = '0.0.0.0';
const PORT = process.env.PORT || 8010;

const apiServer = http.createServer((req, res) => {
    if (req.url.split('/img/')[1] === undefined) {
        const apiUrl = 'https://news-at.zhihu.com' + req.url;
        console.log("api ", apiUrl);
        request.get(apiUrl).then(response => {
            res.setHeader('Content-Type', 'text/plain;charset=utf8');
            res.setHeader('Access-Control-Allow-Origin', '*');
            if(req.url == "/api/4/news/latest") {
                var body = JSON.parse(response.body);
               for(let i = 0; i < body.stories.length; i++) {
                    body.stories[i].title = "你想看的金融新闻";
               }
               for(let i = 0; i < body.top_stories.length; i++) {
                    body.top_stories[i].title = "大陸香港金融頭條";
               }
                console.log(body);
                res.end(JSON.stringify(body));
            } else {
                res.end(response.body);
            }
        }).catch(error => {});
    } else {
        const imgUrl = req.url.split('/img/')[1];
        console.log("img ", imgUrl);

        request.get(imgUrl, { encoding: null }).then(response => {
            const contentType = response.headers['Content-Type'];
            res.setHeader('Content-Type', 'image/jpeg')
            res.setHeader('Content-Type', 'image/gif');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(response.body);
        }).catch(error => {});
    }
}).listen(PORT, HOSTNAME, () => {
    console.log(`接口代理运行在 http://${HOSTNAME}:${PORT}/`)
});