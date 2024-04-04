import { NextResponse } from 'next/server'
import { SignJWT, jwtVerify } from 'jose'

export async function middleware(request) {
  console.log('ミドルウェア')
  const token = await request.headers.get('Authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.json({ message: 'トークンがありません' })
  }
  try {
    const secretKey = new TextEncoder().encode('next-market-app-book')
    const decodedJWT = await jwtVerify(token, secretKey)

    return NextResponse.next()
  } catch (error) {
    return NextResponse.json({ message: 'トークンが正しくないので、ログインしてください' })
  }
}

export const config = {
  matcher: ['/api/item/create', '/api/item/update/:path*', '/api/item/delete/:path*'],
}
