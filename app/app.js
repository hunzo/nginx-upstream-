const ex = require('express')
const morgan = require('morgan')

const app = ex()
app.use(morgan('combined'))

app.get('*', (req, res) => {
    res.json({
        req: req.headers,
        body: req.body,
        param: req.params,
        query: req.query,
        path: req.originalUrl
    })
})


app.listen(process.env.PORT || 3000)