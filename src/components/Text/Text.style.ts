import { variant as _variant } from "styled-system";

const fonts = {
  mono: "'Apercu Mono Pro', sans-serif",
  normal: "'Apercu Pro', sans-serif",
};

const px = (sizes: (number | null)[]) =>
  sizes.map((size: number | null) => {
    if (!size) return size;

    return `${size}px`;
  });

const variant = _variant({
  prop: "variant",

  variants: {
    h1: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([32, null, null, null, null, 60]),
      lineHeight: px([40, null, null, null, null, 76]),
    },

    h2: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([28, null, null, null, null, 48]),
      lineHeight: px([36, null, null, null, null, 60]),
    },

    h3: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([28, null, null, null, null, 36]),
      lineHeight: px([36, null, null, null, null, 48]),
    },

    h4: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([24, null, null, null, null, 30]),
      lineHeight: px([32, null, null, null, null, 40]),
    },

    subtitleLarge: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([20, null, null, null, null, 24]),
      lineHeight: px([32, null, null, null, null, 32]),
    },

    paragraphLarge: {
      fontFamily: fonts.normal,
      fontWeight: 400,
      fontSize: px([20, null, null, null, null, 24]),
      lineHeight: px([32, null, null, null, null, 40]),
    },

    subtitleNormal: {
      fontFamily: fonts.normal,
      fontWeight: 700,
      fontSize: px([16, null, null, null, null, 18]),
      lineHeight: px([24, null, null, null, null, 24]),
    },

    paragraphNormal: {
      fontFamily: fonts.normal,
      fontWeight: 400,
      fontSize: px([16, null, null, null, null, 18]),
      lineHeight: px([24, null, null, null, null, 32]),
    },

    button: {
      fontFamily: fonts.mono,
      fontWeight: 700,
      fontSize: px([16, null, null, null, null, 18]),
      lineHeight: px([24, null, null, null, null, 24]),
    },

    link: {
      fontFamily: fonts.mono,
      fontWeight: 400,
      fontSize: px([16, null, null, null, null, 18]),
      lineHeight: px([24, null, null, null, null, 24]),
    },

    label: {
      fontFamily: fonts.mono,
      fontWeight: 400,
      fontSize: px([14, null, null, null, null, 15]),
      lineHeight: px([24, null, null, null, null, 24]),
    },
  },
});

export { variant };
