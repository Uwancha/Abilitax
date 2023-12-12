import Head from "next/head";
import { ReactNode } from "react";


export default function Layout({children}:{children:ReactNode}) {

    return (
        <>
            <Head>
                <title>AbiliTax | About Page</title>
        
                <meta name="description" content='description' />
    
                <meta property="og:title" content='title' />
                <meta property="og:description" content='description' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.abilitax.com" />
                <meta property="og:image" content="/og.png" />
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
    
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.abilitax.com"/>
                <meta property="twitter:title" content='title'/>
                <meta property="twitter:description" content='description'/>
                <meta property="twitter:image" content="/og.png"/>
    
                <link rel="canonical" href="https://www.abilitax.com"/>
    
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
            </Head>
            {children}
        </>
    )
}