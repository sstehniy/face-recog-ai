const unknownEndpoint = (err, req, res, next) => {
    console.log(err.message)
    return res.status(404).send(err)
}

module.exports = unknownEndpoint