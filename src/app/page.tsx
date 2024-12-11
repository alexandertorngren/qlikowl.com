import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { ThemeSwitch } from '@/components/theme-switch'
import { RandomCard } from '@/components/cards/random-card'
import { SubmitButton } from '@/components/buttons/submit-button'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ThemeSwitch />
        <div className="flex gap-4">
          <Button color="default">Button</Button>
          <Button color="primary">Button</Button>
          <Button color="secondary">Button</Button>
          <Button color="success">Button</Button>
          <Button color="warning">Button</Button>
          <Button color="danger">Button</Button>
          <Button isDisabled color="danger">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="bordered">
            Button
          </Button>
          <Button color="primary" variant="bordered">
            Button
          </Button>
          <Button radius="sm" color="secondary" variant="bordered">
            Button
          </Button>
          <Button radius="md" color="success" variant="bordered">
            Button
          </Button>
          <Button radius="full" color="warning" variant="bordered">
            Button
          </Button>
          <Button radius="none" color="danger" variant="bordered">
            Button
          </Button>
          <Button isDisabled color="danger" variant="bordered">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="faded">
            Button
          </Button>
          <Button color="primary" variant="faded">
            Button
          </Button>
          <Button color="secondary" variant="faded">
            Button
          </Button>
          <Button color="success" variant="faded">
            Button
          </Button>
          <Button color="warning" variant="faded">
            Button
          </Button>
          <Button color="danger" variant="faded">
            Button
          </Button>
          <Button isDisabled color="danger" variant="faded">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="flat">
            Button
          </Button>
          <Button color="primary" variant="flat">
            Button
          </Button>
          <Button color="secondary" variant="flat">
            Button
          </Button>
          <Button color="success" variant="flat">
            Button
          </Button>
          <Button color="warning" variant="flat">
            Button
          </Button>
          <Button color="danger" variant="flat">
            Button
          </Button>
          <Button isDisabled color="danger" variant="flat">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="ghost">
            Button
          </Button>
          <Button color="primary" variant="ghost">
            Button
          </Button>
          <Button color="secondary" variant="ghost">
            Button
          </Button>
          <Button color="success" variant="ghost">
            Button
          </Button>
          <Button color="warning" variant="ghost">
            Button
          </Button>
          <Button color="danger" variant="ghost">
            Button
          </Button>
          <Button isDisabled color="danger" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="light">
            Button
          </Button>
          <Button color="primary" variant="light">
            Button
          </Button>
          <Button color="secondary" variant="light">
            Button
          </Button>
          <Button color="success" variant="light">
            Button
          </Button>
          <Button color="warning" variant="light">
            Button
          </Button>
          <Button color="danger" variant="light">
            Button
          </Button>
          <Button isDisabled color="danger" variant="light">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="shadow">
            Button
          </Button>
          <Button color="primary" variant="shadow">
            Button
          </Button>
          <Button color="secondary" variant="shadow">
            Button
          </Button>
          <Button color="success" variant="shadow">
            Button
          </Button>
          <Button color="warning" variant="shadow">
            Button
          </Button>
          <Button color="danger" variant="shadow">
            Button
          </Button>
          <Button isDisabled color="danger" variant="shadow">
            Button
          </Button>
        </div>
        <div className="flex gap-4">
          <Button color="default" variant="solid">
            Button
          </Button>
          <Button color="primary" variant="solid">
            Button
          </Button>
          <Button color="secondary" variant="solid">
            Button
          </Button>
          <Button color="success" variant="solid">
            Button
          </Button>
          <Button color="warning" variant="solid">
            Button
          </Button>
          <Button color="danger" variant="solid">
            Button
          </Button>
          <Button isDisabled color="danger" variant="solid">
            Button
          </Button>
        </div>

        <div className="flex gap-4">
          <SubmitButton>Kom igång!</SubmitButton>
          <SubmitButton color="cyan" radius="lg">
            Kom igång!
          </SubmitButton>
          <SubmitButton color="orange">Kom igång!</SubmitButton>
          <SubmitButton color="indigo">Kom igång!</SubmitButton>
          <SubmitButton color="violet" radius="sm">
            Kom igång!
          </SubmitButton>
        </div>

        <div className="flex gap-4">
          <RandomCard progress={73} />
          <RandomCard progress={48} />
        </div>

        <Image
          src="/covers/cover-3.webp"
          alt="TippaVM"
          width={540}
          height={540}
          sizes="(max-width: 840px) 100vw, (max-width: 840px) 50vw, 33vw"
        />
      </main>
      <footer className="row-start-3"></footer>
    </div>
  )
}
