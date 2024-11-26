import { Envelope } from 'phosphor-react'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'


export function App() {
  return (
    <div className="w-screen h-screen bg-white-100 flex items-center justify-center text-black">
      <header className="flex flex-col items-center">
        <Logo/>

        <Heading size="lg" className="nt-4">
          Star Lab
        </Heading>

        <Text size="lg" className="text-white-300 nt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope/>
            </TextInput.Icon>
            <TextInput.Input placeholder='Digite seu -email' />
          </TextInput.Root>
        </label>
      </form>
    </div>
  )
}