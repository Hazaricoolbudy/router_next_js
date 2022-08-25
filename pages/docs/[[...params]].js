import React from 'react';
import { useRouter } from 'next/router';

const Fetchallaoute = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);
    return (
        <div>
            this is fetch all route and display in the same page{params}
        </div>
    )
}

export default Fetchallaoute
