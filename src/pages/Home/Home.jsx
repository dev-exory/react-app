import React, { useEffect, useState } from 'react'
import { Stack, Input } from '@chakra-ui/react'

export default function Home() {

    const [data, setdata] = useState()




    useEffect(() => {

        const requestOptions = {
            method: "GET"
        }

        fetch("https://api-v2.exory.dev/user/pub/MELVAR", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'HTTP error'
                    )
                }
                return response.json()
            })
            .then((response) => setdata(response))
    }, [])


    return (
        <>
            <Stack spacing={3}>
                <Input placeholder='extra small size' size='xs' />
                <Input placeholder='small size' size='sm' />
                <Input placeholder='medium size' size='md' />
                <Input placeholder='large size' size='lg' />
            </Stack>
            <h1>{data && data.name}</h1>
        </>

    )
}

