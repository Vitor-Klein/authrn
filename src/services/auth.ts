interface Response {
  token: string
  user: {
    name: string
    email:string
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'hgjh32reqr9q32yrriuriqgwe7gn78t7g773n893gcnpt3',
        user: {
          name: 'vior',
          email: 'vitorhklein2@gmail.com'
        }
      })
    },2000)
  })
}