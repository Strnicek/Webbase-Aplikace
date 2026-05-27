// app/server/api/auth/register.post.js
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '../../utils/prisma'

const JWT_SECRET = process.env.JWT_SECRET || 'super-tajne-nahodne-heslo-aplikace-123'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = body.email?.trim()
  const username = body.username?.trim()
  const password = body.password

  if (!email || !username || !password) {
    throw createError({ statusCode: 400, statusMessage: 'Vyplňte všechna pole.' })
  }

  const userExists = await prisma.user.findFirst({
    where: { OR: [{ email }, { username }] }
  })

  if (userExists) {
    throw createError({ statusCode: 400, statusMessage: 'Email nebo uživatelské jméno již existuje.' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.user.create({
    data: { email, username, password: hashedPassword }
  })
  

  const token = jwt.sign(
    { userId: newUser.id, email: newUser.email },
    'super-tajne-nahodne-heslo-aplikace-123',
    { expiresIn: '7d' }
  )

  return { success: true, token }
})