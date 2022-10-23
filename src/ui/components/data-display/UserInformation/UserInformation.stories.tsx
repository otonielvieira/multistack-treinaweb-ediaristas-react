import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserInformation from "./UserInformation";



export default {
    title: "data-display/UserInformation",
    component: UserInformation,

} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => {
    return <UserInformation {...args} />
};

export const Default = Template.bind({});

Default.args ={
    name: 'Otoniel Vieira',
    picture: 'https://github.com/otonielvieira.png',
    rating: 5,
    description: 'Web Developer',
    isRating: true,
    
}