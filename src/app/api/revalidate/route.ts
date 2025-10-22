import { revalidatePath } from 'next/cache';

const SECRET = "12345" //process.env.REVALIDATE_TOKEN;

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get('token');
    const body = await req.json();

    if (token !== SECRET) {
      return Response.json({ error: 'Token inválido' }, { status: 401 });
    }

    // Define a página a ser revalidada
    const path = body?.path || '/eventos';
    revalidatePath(path);
    console.log(`✅ Revalidated: ${path}`);

    return Response.json({ revalidated: true, path });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Erro interno' }, { status: 500 });
  }
}
