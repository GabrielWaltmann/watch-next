import { Button } from '../../Components/Button/Index'
import { Checkbox } from '../../Components/Checkbox/Index'
import { Heading } from '../../Components/Heading/Index'
import { EmailInput } from '../../Components/Input/Email/Index'
import { PasswordInput } from '../../Components/Input/Password/Index'
import { Logo } from '../../Components/Logo/Index'
import { Text } from '../../Components/Text/Index'

import { Container } from './Style/Index'

export function Login() {
    return (
        <Container>
            <Logo className='logo'/>

            <header>
                <Heading>
                    Watch Next
                </Heading>
                <Text size='md'>
                    Faça Login e comece a diversão!
                </Text>
            </header>

            <form>
                <label htmlFor="email">
                    <Text className="emailLabel" size='xs' >
                        Endereço de email
                    </Text>
                    <EmailInput/>
                </label>

                <label htmlFor="email">
                    <Text className="passwordLabel" size='xs' >
                        Sua senha
                    </Text>
                    <PasswordInput/>
                </label>

                <Checkbox className='customCheckbox'>Lembrar de mim por 30 dias</Checkbox>

                <Button>Entrar na plataforma</Button>
            </form>

            <footer>
                <a href="#">Esqueceu sua senha?</a>
                <a href="#">Não possui conta? Crie uma agora!</a>
            </footer>
        </Container>
    )
}