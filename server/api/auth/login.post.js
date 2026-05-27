// app/server/api/auth/login.post.js
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = body.email?.trim()
  const password = body.password

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Vyplňte email a heslo.' })
  }

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createError({ statusCode: 401, statusMessage: 'Nesprávný e-mail nebo heslo.' })
  }

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    'super-tajne-nahodne-heslo-aplikace-123',
    { expiresIn: '7d' }
  )

  return { success: true, token }
})