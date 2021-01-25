import React, { useState } from 'react';
import { AddCategoty } from './components/AddCategoty';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategoty setCategories={setCategories} />

            <hr />



            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );

}

export default GifExpertApp;