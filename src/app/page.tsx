"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { checkPlatforms } from "./actions"

export default function Home() {
  const [state, action] = useActionState(checkPlatforms, null)

  return (
    <div className="mx-auto mt-20 w-100">
      <h1 className="text-center text-4xl font-bold">Concedure</h1>

      <form action={action} className="mt-4 mb-5 flex flex-col gap-2">
        <input
          name="username"
          required
          placeholder="Username"
          className="rounded-lg border-2 border-primary p-2"
          defaultValue={state?.username}
        />

        <SubmitButton />
      </form>

      <div className="grid grid-cols-3">
        {state &&
          Object.entries(state.platforms).map(([key, value]) => (
            <p className="text-center" key={key}>
              {key}: {value ? "✅" : "❌"}
            </p>
          ))}
      </div>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="cursor-pointer rounded-lg bg-primary p-2 text-background disabled:bg-primary/50"
    >
      {pending ? "Checking..." : "Submit"}
    </button>
  )
}
