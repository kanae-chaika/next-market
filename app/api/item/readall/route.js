import { NextResponse } from 'next/server'
import connectDB from '../../../utils/database'
import { ItemModel } from '../../../utils/schemaModels'

export async function GET() {
  try {
    await connectDB()
    const allItems = await ItemModel.find()
    return NextResponse.json({ message: 'アイテム読み込み成功（オール）', allItems: allItems })
  } catch (error) {
    return NextResponse.json({ message: 'アイテム読み込失敗（オール）' })
  }
}

export const revalidate = 0
