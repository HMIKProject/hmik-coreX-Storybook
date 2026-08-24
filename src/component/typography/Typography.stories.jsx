import Typography from "./Typography";

export default {
  title: "Atomic/Typography/Typography",
  component: Typography,
  tags: ['autodocs'],

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component: `Typography merupakan komponen dasar untuk mengatur hierarki teks
                    pada aplikasi HMIK CoreX.

                    Komponen menggunakan font Inter dengan base size 16px
                    dan typography scale 1.33 seperti yang ditetapkan pada design system Figma.`,
      },
    },
  },

    argTypes: {
        variant: {
        control: "select",

        options: [
            "heading1",
            "heading2",
            "heading3",
            "body",
            "caption",
        ],

        description: "Menentukan jenis dan ukuran typography.",
        table: {
            type: {
            summary:
                "heading1 | heading2 | heading3 | body | caption",
            },

            defaultValue: {
            summary: "body",
            },
        },
        },

        children: {
        control: "text",
        description: "Konten teks yang ditampilkan.",
        },

        className: {
        control: false,
        table: {
            disable: true,
        },
        },
    },

    args: {
        variant: "body",
        children: "The quick brown fox jumps over the lazy dog",
    },
};

export const Default = {
  render: (args) => <Typography {...args} />,
};

/* ========================================
   HEADING 1
   ======================================== */

export const Heading1 = {
  args: {
    variant: "heading1",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ========================================
   HEADING 2
   ======================================== */

export const Heading2 = {
  args: {
    variant: "heading2",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ========================================
   HEADING 3
   ======================================== */

export const Heading3 = {
  args: {
    variant: "heading3",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ========================================
   BODY
   ======================================== */

export const Body = {
  args: {
    variant: "body",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ========================================
   CAPTION
   ======================================== */

export const Caption = {
  args: {
    variant: "caption",
    children: "The quick brown fox jumps over the lazy dog",
  },
};

/* ========================================
   TYPOGRAPHY SCALE
   ======================================== */

export const TypographyScale = {
  parameters: {
    docs: {
      description: {
        story: `Contoh lengkap typography scale yang digunakan oleh design system HMIK CoreX.`,
      },
    },
  },

  render: () => (
    <div
      style={{
        width: "800px",
        padding: "32px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Typography variant="heading1">
        The quick brown fox jumps over the lazy dog
      </Typography>

      <div style={{ height: "32px" }} />

      <Typography variant="heading2">
        The quick brown fox jumps over the lazy dog
      </Typography>

      <div style={{ height: "32px" }} />

      <Typography variant="heading3">
        The quick brown fox jumps over the lazy dog
      </Typography>

      <div style={{ height: "32px" }} />

      <Typography variant="body">
        The quick brown fox jumps over the lazy dog
      </Typography>

      <div style={{ height: "32px" }} />

      <Typography variant="caption">
        The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
};