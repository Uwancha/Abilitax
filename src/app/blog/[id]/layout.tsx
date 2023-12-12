import React, { Suspense } from "react";
import Head from "next/head";
import Loading from "@/app/skills/loading";

export default function Layout({children }) {

    return (
        <>
            <Head>
                <title>AbiliTax</title>
        
                <meta name="description" content='description' />
    
                <meta property="og:title" content='Abilitax' />
                <meta property="og:description" content='description' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.abilitax.com" />
                <meta property="og:image" content="/og.png" />
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
    
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.abilitax.com"/>
                <meta property="twitter:title" content='Abilitax'/>
                <meta property="twitter:description" content='description'/>
                <meta property="twitter:image" content="/og.png"/>
    
                <link rel="canonical" href="https://www.abilitax.com"/>
    
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
            </Head>
            <Suspense fallback={<Loading />}>
            {children}
            </Suspense>
        </>
    )
}