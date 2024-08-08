import {
  Button,
  createTheme,
  darken,
  defaultVariantColorsResolver,
  MantineProvider,
  parseThemeColor,
  rem,
  rgba,
  Textarea,
  TextInput,
  Title,
  VariantColorsResolverInput,
} from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { ComponentType, createElement } from "react";

export const withMantine = (component: ComponentType) => () => {
  const theme = createTheme({
    variantColorResolver: (input: VariantColorsResolverInput) => {
      const defaultResolvedColors = defaultVariantColorsResolver(input);
      const parsedColor = parseThemeColor({
        color: input.color || input.theme.primaryColor,
        theme: input.theme,
      });

      if (input.variant === "filled" || input.variant === "default") {
        return {
          hover: rgba(parsedColor.value, 0),
          color: "#FFF",
          background: "#FDB022",
          border: `${rem(1)} solid ${parsedColor.value}`,
          hoverColor: "#FDB022",
        };
      }

      if (input.variant === "outline") {
        return {
          background: rgba(parsedColor.value, 0),
          hover: rgba(parsedColor.value, 1),
          border: `${rem(1)} solid ${parsedColor.value}`,
          color: darken(parsedColor.value, 0),
          hoverColor: "#FFF",
        };
      }

      if (input.variant === "danger") {
        return {
          background: "var(--mantine-color-red-9)",
          hover: "var(--mantine-color-red-8)",
          color: "var(--mantine-color-white)",
          border: "none",
        };
      }

      return defaultResolvedColors;
    },
    components: {
      TextInput: TextInput.extend({
        styles: {
          input: {
            padding: "20px 10px",
          },
        },

        defaultProps: {
          radius: 7,
        },
      }),

      Textarea: Textarea.extend({
        defaultProps: {
          radius: 7,
        },
      }),

      Title: Title.extend({
        defaultProps: {
          ff: "Montserrat, sans-serif",
        },
      }),

      Button: Button.extend({
        defaultProps: {
          color: "#FDB022",
          variant: "filled",
          radius: 7,
        },
        styles: {
          root: { transition: "all 300ms" },
        },
      }),
    },

    breakpoints: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1184px",
      xl: "1440px",
    },
  });

  return (
    <MantineProvider
      stylesTransform={emotionTransform}
      withCssVariables
      theme={theme}
    >
      <MantineEmotionProvider>
        {createElement(component)}
      </MantineEmotionProvider>
    </MantineProvider>
  );
};
