export async function POST(request: Request) {
  const username = await request.text()

  const check = async (url: string) => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    try {
      const res = await fetch(url + "/" + username, {
        method: "HEAD",
        signal: controller.signal,
      })

      return res.status === 404
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log(`Request to ${url} timed out`)
        return false
      }

      throw error
    } finally {
      clearTimeout(timeout)
    }
  }

  return Response.json({
    GitHub: await check("https://github.com"),
    Reddit: await check("https://www.reddit.com/user"),
    TikTok: await check("https://www.tiktok.com/@"),
  })
}
