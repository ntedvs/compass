export const checkPlatforms = async (state: any, fd: FormData) => {
  const username = fd.get("username") as string

  const platforms = await fetch("http://localhost:3000/api/platforms", {
    method: "POST",
    body: username,
  }).then((res) => res.json())

  return { platforms, username }
}
