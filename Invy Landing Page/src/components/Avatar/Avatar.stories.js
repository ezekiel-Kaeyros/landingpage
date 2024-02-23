import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    sizes: {
      options: ["xl", "xs", "lg", "sm", "md"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    sizes: "xl",
    outline: true,
    online: true,
    className: {},
    avatarClassName: {},
    avatar:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar@2x.png",
    img:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-6@2x.png",
    avatar1:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-8@2x.png",
    avatar2:
      "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-4@2x.png",
  },
};
