// app/server/api/auth/me.get.js
import jwt from 'jsonwebtoken'


export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')

  if (!token) {
    return { user: null }
  }

  try {
    // Tady jsme museli použít správné rozkódování a stejné tajné heslo
    const decoded = jwt.verify(token, 'super-tajne-nahodne-heslo-aplikace-123')
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        username: true,
        email: true,
      },
    })

    return { user: user ?? null }
  } catch {
    return { user: null }
  }
})