import { HeadLine } from "./Headline";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Components/Headline',
    component: HeadLine,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Large = {
    args: {
        size: 'large',
        text: 'Soy un titular grande',
    },
};

export const Medium = {
    args: {
        size: 'small',
        text: 'Soy un titular mediano',
    },
};

export const Small = {
    args: {
        size: 'small',
        text: 'Soy un titular pequeño',
    },
};
