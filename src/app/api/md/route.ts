import { promises as fs } from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
 try {
  const body = await req.json()
  const filePath = path.join(process.cwd(), 'src', 'md', body.file)
  const fileContents = await fs.readFile(filePath, 'utf8')

  //   const lines = fileContents.split('\n')
  //   let htmlParsed = []
  //   lines.forEach((line: string) => {

  //   })

  const data = {
   raw: fileContents,
  }
  // Return the data as a JSON response
  return new Response(JSON.stringify(data), {
   headers: { 'Content-Type': 'application/json' },
  })
 } catch (e: any) {
  // Return the error as a JSON response
  return new Response(JSON.stringify(e.toString()), {
   status: 500,
   headers: { 'Content-Type': 'application/json' },
  })
 }
}
