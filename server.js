//EXPRESS
import express from 'express'
import request from 'request'

const app = express()
const port = 3420

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/history/:wallet', function (req, res) {
    request(
        { url: `https://api-mainnet.magiceden.dev/v2/wallets/${req.params.wallet}/activities?offset=0&limit=500` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.get('/collectionname/:mint', function (req, res) {
    request(
        { url: `https://api-mainnet.magiceden.dev/v2/tokens/${req.params.mint}` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.get('/checkfloor/:collection', function (req, res) {
    request(
        { url: `https://api-mainnet.magiceden.dev/v2/collections/${req.params.collection}/stats` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.get('/pricehistory/:collection', function (req, res) {
    request(
        { url: `https://api-mainnet.magiceden.dev/v2/collections/${req.params.collection}/activities?offset=0&limit=500` },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

//LISTEN
app.listen(port, () => {
    console.log(`FUDility is listening at port ${port}`)
})