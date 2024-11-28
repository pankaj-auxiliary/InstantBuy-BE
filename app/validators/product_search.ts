import vine from '@vinejs/vine'

export const searchProductValidator = vine.compile(
  vine.object({
    query: vine.string(),
  })
)
