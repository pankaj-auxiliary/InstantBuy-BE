import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string(),
    price: vine.number(),
    images: vine.array(vine.string()),
    cover_image: vine.string(),
    category: vine.string(),
    stock: vine.number(),
  })
)
