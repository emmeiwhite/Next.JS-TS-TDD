import { useEffect, useState } from 'react'

function useFetchCustom<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
}

export default useFetchCustom
