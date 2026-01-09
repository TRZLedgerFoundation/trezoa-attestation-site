import { FC } from 'react'
import { Hero } from '@/shared/ui/hero'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'

export const CallToAction: FC = () => {
    return (
        <Hero title="Start building on TAS today" subTitle="An infrastructure public good for making attestations onchain or offchain about anything.">
            <Button href="https://github.com/trzledgerfoundation/trezoa-attestation-service" variant="primary" icon={Icon.Github}>
                Explore on Github
            </Button>
            <Button href="https://github.com/trzledgerfoundation/trezoa-attestation-service" variant="secondary" icon={Icon.Documentation}>
                Read documentation
            </Button>
        </Hero>
    )
}
