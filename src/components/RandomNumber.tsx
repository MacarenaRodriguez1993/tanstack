import { useQuery } from '@tanstack/react-query'

const getCryptoNumber = async():Promise<number>=>{
    const resp= await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then(res=>res.json())
    return Number(resp)
  }
export const RandomNumber = () => {
    const {data}=useQuery({
        queryKey:['cryptoNumber'],
        queryFn:getCryptoNumber,
        staleTime:10000
      })
  return (
    <div>RandomNumber {data}</div>
  )
}
