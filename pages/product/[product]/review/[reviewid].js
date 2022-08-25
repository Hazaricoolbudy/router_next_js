import React from 'react'
import { useRouter } from 'next/router'
import Product from '../..';

const Review = () => {
    const router = useRouter();
    const { reviewid, product } = router.query
    console.log(product);
    console.log(reviewid);
    return (
        <div>

            review  {reviewid} for product {product}

        </div>
    )
}

export default Review
