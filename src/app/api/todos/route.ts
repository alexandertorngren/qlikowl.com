import { NextRequest, NextResponse } from 'next/server'

interface Context {
  params: undefined
}

export async function GET(request: NextRequest, context: Context) {
  const query = new URLSearchParams(new URL(request.url).search)
  const limit = query.get('limit')
  console.log(`http://localhost:3000/todos?_limit=${limit}`)
  const response = await fetch(`http://localhost:3000/todos?_limit=${limit}`)
  const data = await response.json()

  return NextResponse.json({ data })
}
