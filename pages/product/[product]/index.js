import React from 'react'
import { useRouter } from 'next/router'

const Productdeatails = () => {
    const router = useRouter();
    const productId = router.query.product // url name should be [] file name of the same project
    console.log(productId);
    return (
        <div>
            <h1>
                details of product  {productId}</h1>

        </div>
    )
}

export default Productdeatails
