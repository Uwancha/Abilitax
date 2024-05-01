import { ReactNode } from "react";
import Head from "next/head";

export default function Layout({children }: {children: ReactNode}) {
    return (
        <>
            <Head>
                <title>AbiliTax | Blog</title>
        
                <meta name="description" content='Collections of best curated resources to learn in demand skills in 2024' />
    
                <meta property="og:title" content='Abilitax|Blog' />
                <meta property="og:description" content='Collections of best curated resources to learn in demand skills in 2024' />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://abilitax.netlify.app/" />
                <meta property="og:image" content="/og.png" />
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
    
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://abilitax.netlify.app/"/>
                <meta property="twitter:title" content='Abilitax|Blog'/>
                <meta property="twitter:description" content='description'/>
                <meta property="twitter:image" content="/Abilitax-logo (1).png"/>
    
                <link rel="canonical" href="https://abilitax.netlify.app/"/>
    
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
            </Head>
            {children}
        </>
    );
};