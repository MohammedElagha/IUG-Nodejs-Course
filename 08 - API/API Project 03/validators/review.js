const Joi = require('@hapi/joi')

const schema = Joi.object({
    _book_id: Joi.string().required(),
    _reviewer_id: Joi.string().required(),
    comment: Joi.string().required(),
    rating: Joi.number().required()
})

module.exports = schema