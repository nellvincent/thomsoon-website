const path = require('path')

const express = require('express')
const port    = process.env.PORT ?? 3000
const app     = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.static(__dirname + "/views"))

let conf = {
    title:      "NOXET | Community",
    copyright:  "© Copyright 2022 NOXET INC. All Rights Reserved."
}
app.route('/')
    .get((request, response, next) => {
        return response.status(200).render('index', conf)
    })

app.route('/index')
    .get((request, response, next) => {
        return response.status(200).render('index', conf)
    })

app.route('/single')
    .get((request, response, next) => {
        return response.status(200).render('single', conf)
    })

app.route('/projects')
    .get((request, response, next) => {
        return response.status(200).render('projects', conf)
    })

app.route('/about-us')
    .get((request, response, next) => {
        return response.status(200).render('about-us', conf)
    })

app.route('/contact')
    .get((request, response, next) => {
        return response.status(200).render('contact', conf)
    })

app.route('/index-fixed')
    .get((request, response, next) => {
        return response.status(200).render('index-fixed', conf)
    })

app.route('/index-no-sidebar')
    .get((request, response, next) => {
        return response.status(200).render('index-no-sidebar', conf)
    })

app.route('/index-2')
    .get((request, response, next) => {
        return response.status(200).render('index-2', conf)
    })

app.route('/single-fullscreen')
    .get((request, response, next) => {
        return response.status(200).render('single-fullscreen', conf)
    })



app.listen(port, () => {
    console.log('Server started on port', port)
})
