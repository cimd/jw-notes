export default function sleep(ms: number): Promise<void>
{
  return new Promise((resolve) => setTimeout(() => {
    // console.log('resolved')
    resolve()
  }, ms))
}
