import { useUserActions } from "@/entities/user/model";
import {
  userProfileInitialValues,
  userProfileInputFields,
} from "@/shared/lib/constants/user";
import { getSession } from "@/shared/lib/helpers/storage";
import { TUser } from "@/shared/lib/types";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  FileButton,
  Grid,
  Group,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAdjustments, IconPencil } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const EditPersonal = () => {
  const { user } = useSelector((state: { user: TUser }) => state);
  const [avatar, setAvatar] = useState<string | undefined>();
  const [editable, setEditable] = useState<boolean>(true);
  const session = getSession();

  const { updateUser } = useUserActions();

  const form = useForm<TUser>({
    initialValues: userProfileInitialValues,
  });

  const handleFileChange = (file: File | null) => {
    if (file) {
      form.setFieldValue("avatar", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values: TUser) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append("userId", session?.userId);

    console.log(formData);

    await updateUser.mutateAsync(formData);
  };

  useEffect(() => {
    if (user) {
      form.setValues(user);
    }
  }, [user]);

  return (
    <Box py={50}>
      <Stack gap={10}>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          encType="multipart/form-data"
        >
          <Grid grow gutter={30} mt={50} maw={500}>
            <Grid.Col span={6}>
              <Group pos="relative" w="max-content">
                <Avatar size={100} src={avatar || user.avatar} />
                {!editable && (
                  <FileButton
                    onChange={handleFileChange}
                    accept="image/png,image/jpeg"
                  >
                    {(props) => (
                      <ActionIcon
                        {...props}
                        aria-label="Settings"
                        pos="absolute"
                        style={{ right: 2, bottom: 2, borderRadius: "50%" }}
                      >
                        <IconAdjustments
                          style={{ width: "70%", height: "70%" }}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    )}
                  </FileButton>
                )}
              </Group>
            </Grid.Col>
            <Grid.Col
              span={6}
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <ActionIcon
                aria-label="Settings"
                onClick={() => setEditable((prev) => !prev)}
              >
                <IconPencil
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Grid.Col>
            {userProfileInputFields.map((field, index) => (
              <Grid.Col span={field.span} key={index}>
                <TextInput
                  {...form.getInputProps(field.name)}
                  disabled={editable}
                  label={field.label}
                  placeholder={field.placeholder}
                  styles={() => style}
                />
              </Grid.Col>
            ))}
            <Grid.Col span={12}>
              <Textarea
                {...form.getInputProps("bio")}
                disabled={editable}
                autosize
                minRows={2}
                label="Bio"
                styles={() => style}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              {!editable && (
                <Button type="submit" fullWidth>
                  Update
                </Button>
              )}
            </Grid.Col>
          </Grid>
        </form>
      </Stack>
    </Box>
  );
};

const style = {
  label: {
    fontWeight: 600,
  },
  input: {
    "&:disabled": {
      paddingLeft: 0,
      backgroundColor: "#FFF",
      color: "#000",
      border: "none",
      cursor: "auto",
      opacity: 1,
    },
  },
};
