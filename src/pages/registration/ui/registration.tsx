import {
  Button,
  Center,
  Grid,
  Image,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import BellImage from "@/shared/assets/bell.jpg";
import { useForm } from "@mantine/form";
import { useAuthActions } from "@/entities/login/model";
import { notify, notifyError } from "@/shared/lib";

export const Registration = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value?.length < 8
          ? "Password must be at least 8 characters long"
          : null,
    },
  });

  const { Login } = useAuthActions();

  const handleSubmit = async (value: any) => {
    try {
      await Login.mutateAsync(value);
      notify("Success", "lime");
    } catch (error) {
      notifyError(error);
    }
  };

  return (
    <Grid w="100vw" h="100vh" overflow="hidden">
      <Grid.Col span={6}>
        <Image src={BellImage} h="100vh" />
      </Grid.Col>
      <Grid.Col span="auto">
        <Center
          h="100%"
          component="form"
          onSubmit={form.onSubmit(handleSubmit)}
        >
          <Stack w="50%" gap={60}>
            <Title ta="center">Log In</Title>
            <Stack>
              {formFields.map(({ label, placeholder }) => (
                <TextInput
                  key={label}
                  {...form.getInputProps(label)}
                  label={label}
                  placeholder={placeholder}
                  tt="capitalize"
                />
              ))}
            </Stack>
            <Button type="submit" loading={Login.isPending}>
              Log In
            </Button>
          </Stack>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

const formFields = [
  { label: "email", placeholder: "Enter your email" },
  { label: "password", placeholder: "Enter your password" },
];
