export const proventosService = async (idFolha: string) => {

  console.log("idFolha", idFolha)

  try {
    const resp = await fetch(`/api/data-analysis/getProventos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idFolha })
    })

    const proventos = await resp.json();

    return { proventos };

  } catch (error) {
    return { ok: false, error }
  }

}