'use client'
import Image from 'next/image'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import logo3 from '@/images/logo3-min-resize.png'

export function Hero() {

    return (

        <Container className="pb-16 pt-5 text-center lg:pt-10">
            <div className="flex justify-center items-center">
                <Image
                    src={logo3}
                    alt=""
                    className="w-52 h-auto sm:w-72 lg:w-96"
                />
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
                Disrupt the norm with {' '}
                <span className="relative whitespace-nowrap text-cyan-500">

          <span className="relative font-bold">Bit Bot Labs</span>
        </span>{' '}
                custom solutions
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700 font-display">
                Bespoke software studio. Building custom solutions for your business needs.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
                <Button id="mlink" href="#" onMouseOver={()=>{
                    // Get the mLink element
                    const mLink = document.getElementById("mlink");
                    // Set the href attribute to the mLink
                    mLink?.setAttribute("href", "mailto:&#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;&#x40;&#x62;&#x69;&#x74;&#x62;&#x6f;&#x74;&#x6c;&#x61;&#x62;&#x73;&#x2e;&#x63;&#x6f;&#x6d;");
                }}>Get Started</Button>

            </div>

        </Container>
    )
}
