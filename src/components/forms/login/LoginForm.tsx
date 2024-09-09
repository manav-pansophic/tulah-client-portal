import { Button, Card, Container, Flex, Text } from '@pansophictech/base';
import { FormProvider, TextInput, useForm } from '@pansophictech/hook-form';
import TulahLogo from '../../../assets/img/TulahLogo.png';
import { useLoginMutation } from '../../../services/auth/authService';
import PhoneInput from 'react-phone-input-2';

const LoginForm = () => {

const [loginUser, {isLoading, isSuccess, isError, error}]= useLoginMutation()
// Handle Login Functions
const handleLogin = (credentials: any) => {
    loginUser(credentials);
    console.log('credentials',credentials)
}

  const methods = useForm<any>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    // resolver: zodResolver(LoginSchema),
    defaultValues: {}
  });

  return (
    <>
      <Container>
        <Flex h="100vh" align="center" justify="center">
          <Card p={50} mih="50vh" w="70%" shadow='lg'>
            <Flex align="center" justify="center">
              <img src={TulahLogo} alt="TulahLogo" style={{ background: 'transparent' }} />
            </Flex>
              <Text fw={800} fs='bold'>Login</Text>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleLogin)}>
                <div style={{marginTop: '20px'}}>
                <PhoneInput />
                </div>
                <Flex justify="center" mt={30}>
                  <Button fullWidth type="submit" radius={'xl'}>
                    Get OTP
                  </Button>
                </Flex>
                </form>
              </FormProvider>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default LoginForm;
