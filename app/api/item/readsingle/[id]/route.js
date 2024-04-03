import { NextResponse } from 'next/server'
import connectDB from '../../../../utils/database'
import { ItemModel } from '../../../../utils/schemaModels'

export async function GET(request, context) {
  try {
    await connectDB()
    const singleItem = await ItemModel.findById(context.params.id)
    return NextResponse.json({
      message: 'アイテム読み込み成功（シングル）',
      singleItem: singleItem,
    })
  } catch (error) {
    return NextResponse.json({ message: 'アイテム読み込失敗（シングル）' })
  }
}
