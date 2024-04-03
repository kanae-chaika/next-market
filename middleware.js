import { NextResponse } from 'next/server'
import { SignJWT, jwtVerify } from 'jose'

export async function middleware() {
  console.log('ミドルウェア')
  // const token = await request.headers.get('Authorization')?.split(' ')[1]

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTcxMjI1Mjk0MX0.PC5bHJ8F2W-ZI85EMPLDuIrzZnDhcb2TzU2UYAHZdzA'

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
